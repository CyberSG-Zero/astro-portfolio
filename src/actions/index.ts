import { ActionError, defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
	contacto: defineAction({
		accept: 'form',
		input: z.object({
			// Honeypot: existe en el formulario, los usuarios reales lo dejan vacío.
			website_url: z.string().optional(),
			name: z.string().trim().min(1).max(100),
			company: z.string().trim().max(100).optional(),
			email: z.string().trim().email().max(200),
			message: z.string().trim().min(1).max(2000),
			Motive: z.enum(['work-together', 'talk-together']).default('work-together'),
			consent: z.literal('on'),
		}),
		handler: async ({ website_url, name, company, email, message, Motive, consent }) => {
			// Si el honeypot viene relleno es un bot: simulamos éxito sin llamar a Make.
			if (website_url) return { ok: true };

			const headers: Record<string, string> = {
				'Content-Type': 'application/json',
			};
			if (import.meta.env.MAKE_API_KEY) {
				headers['x-api-key'] = import.meta.env.MAKE_API_KEY;
			}

			let res: Response;
			try {
				res = await fetch(import.meta.env.MAKE_WEBHOOK_URL, {
					method: 'POST',
					headers,
					body: JSON.stringify({
						name,
						company,
						email,
						message,
						Motive,
						consent,
						fecha: new Date().toISOString(),
					}),
				});
			} catch {
				throw new ActionError({
					code: 'INTERNAL_SERVER_ERROR',
					message: 'No se pudo enviar el mensaje. Inténtalo de nuevo.',
				});
			}

			if (!res.ok) {
				throw new ActionError({
					code: 'INTERNAL_SERVER_ERROR',
					message: 'No se pudo enviar el mensaje. Inténtalo de nuevo.',
				});
			}

			return { ok: true };
		},
	}),
};
