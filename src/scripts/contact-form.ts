import { actions, isInputError } from 'astro:actions';
import { navigate } from 'astro:transitions/client';
import { contactSchema } from '../lib/contact-schema';

type FieldName = 'name' | 'company' | 'email' | 'message' | 'consent' | 'Motive';

const fieldNames: FieldName[] = ['name', 'company', 'email', 'message', 'consent', 'Motive'];

/**
 * Lógica común del formulario de contacto. La usan las tres páginas
 * (/contact, /es/contact y /ca/contact) a través de `src/sections/Contact.astro`
 * y de `src/pages/contact.astro`.
 *
 * Los textos se leen de los atributos `data-*` del formulario para que cada
 * idioma pueda mostrar sus propios mensajes sin duplicar esta lógica.
 */
export function initContactForm() {
	const form = document.getElementById('contacto-form') as HTMLFormElement | null;
	if (!form || form.dataset.contactoReady === 'true') return;
	form.dataset.contactoReady = 'true';

	const estado = document.getElementById('contacto-estado');
	const boton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
	if (!estado || !boton) return;

	const textoOriginal = form.dataset.send ?? boton.textContent ?? '';
	const enviando = form.dataset.sending ?? 'Sending...';
	const thanksUrl = form.dataset.thanks ?? '/gracias';
	const genericError = form.dataset.error ?? 'Something went wrong. Please try again.';
	const formError = form.dataset.formError ?? genericError;
	const networkError = form.dataset.networkError ?? genericError;

	let fieldErrors: Partial<Record<FieldName, string>> = {};
	try {
		fieldErrors = JSON.parse(form.dataset.fieldErrors ?? '{}');
	} catch {
		// Si el JSON no es válido, usamos el mensaje genérico por campo.
	}

	const controls = Object.fromEntries(
		fieldNames.map((name) => [name, form.querySelector<HTMLElement>(`[name="${name}"]`)]),
	) as Record<FieldName, HTMLElement | null>;

	const errorHint = (name: FieldName) => document.getElementById(`error-${name.toLowerCase()}`);

	function clearFieldError(name: FieldName) {
		controls[name]?.removeAttribute('aria-invalid');
		const hint = errorHint(name);
		if (hint) hint.textContent = '';
	}

	function clearErrors() {
		fieldNames.forEach(clearFieldError);
		estado!.textContent = '';
	}

	function showErrors(fields: Partial<Record<FieldName, unknown>>) {
		const invalidos = fieldNames.filter((name) => Boolean(fields[name]));

		invalidos.forEach((name) => {
			controls[name]?.setAttribute('aria-invalid', 'true');
			const hint = errorHint(name);
			if (hint) hint.textContent = fieldErrors[name] ?? genericError;
		});

		estado!.textContent = formError;
		invalidos
			.map((name) => controls[name])
			.find((control): control is HTMLElement => Boolean(control))
			?.focus();
	}

	// El botón sigue deshabilitado mientras falten campos obligatorios.
	// La validación completa (incluido el formato del email) ocurre al enviar.
	form.addEventListener('input', (event) => {
		const target = event.target as HTMLElement | null;
		const name = target?.getAttribute('name') as FieldName | null;
		if (name && fieldNames.includes(name)) clearFieldError(name);
		boton!.disabled = !form.checkValidity();
	});

	form.addEventListener('submit', async (event) => {
		event.preventDefault();
		clearErrors();

		const resultado = contactSchema.safeParse(Object.fromEntries(new FormData(form)));
		if (!resultado.success) {
			showErrors(resultado.error.flatten().fieldErrors as Partial<Record<FieldName, unknown>>);
			return;
		}

		boton!.disabled = true;
		boton!.textContent = enviando;

		try {
			const { error } = await actions.contacto(new FormData(form));

			if (error) {
				if (isInputError(error)) {
					showErrors(error.fields as Partial<Record<FieldName, unknown>>);
				} else {
					// Un ActionError del handler ya trae un mensaje legible,
					// pero mostramos el texto localizado de la página.
					estado!.textContent = genericError;
				}
				return;
			}

			navigate(thanksUrl);
		} catch {
			// La llamada a la acción puede rechazarse si no hay conexión.
			estado!.textContent = networkError;
		} finally {
			boton!.textContent = textoOriginal;
			boton!.disabled = false;
		}
	});
}
