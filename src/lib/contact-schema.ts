import { z } from 'astro:schema';

/**
 * Única fuente de verdad para los datos del formulario de contacto.
 * Se usa en el servidor (Astro Actions) y en el cliente (validación antes de enviar).
 *
 * Los mensajes están en inglés porque es el idioma por defecto de la interfaz.
 * Cada página traduce esos mensajes a través del atributo `data-field-errors`.
 */
export const contactSchema = z.object({
	// Honeypot: existe en el formulario, los usuarios reales lo dejan vacío.
	website_url: z.string().optional(),
	name: z
		.string({ message: 'Please enter your name.' })
		.trim()
		.min(1, 'Please enter your name.')
		.max(100, 'Please use 100 characters or fewer for your name.'),
	company: z
		.string({ message: 'Please enter your company name.' })
		.trim()
		.min(1, 'Please enter your company name.')
		.max(100, 'Please use 100 characters or fewer for your company name.'),
	email: z
		.string({ message: 'Please enter your email address.' })
		.trim()
		.email('Please enter a valid email address, e.g. name@company.com.')
		.max(200, 'Please use 200 characters or fewer for your email address.'),
	message: z
		.string({ message: 'Please write a message.' })
		.trim()
		.min(1, 'Please write a message.')
		.max(2000, 'Please keep your message under 2,000 characters.'),
	Motive: z.enum(['work-together', 'talk-together']).default('work-together'),
	// `enum` en lugar de `literal`: así el mensaje propio también se usa cuando
	// Astro convierte un checkbox sin marcar a `null` en el servidor.
	consent: z.enum(['on'], { message: 'Please accept the consent checkbox.' }),
});

export type ContactInput = z.infer<typeof contactSchema>;
