import { ActionError, defineAction } from 'astro:actions';
import { contactSchema } from '../lib/contact-schema';

export const server = {
	contacto: defineAction({
		accept: 'form',
		input: contactSchema,
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
					message: "We couldn't send your message. Please try again.",
				});
			}

			if (!res.ok) {
				throw new ActionError({
					code: 'INTERNAL_SERVER_ERROR',
					message: "We couldn't send your message. Please try again.",
				});
			}

			return { ok: true };
		},
	}),
};
