/**
 * Textos legales largos (términos y privacidad) en los tres idiomas del sitio.
 * El inglés es la fuente de verdad; es y ca son traducciones equivalentes.
 *
 * Los valores entre corchetes son campos pendientes de rellenar manualmente
 * con los datos fiscales y contractuales reales. Búscalos con `[`.
 */

import type { Lang } from './ui';

export interface LegalSection {
  id: string;
  heading: string;
  blocks: LegalBlock[];
}

export type LegalBlock =
  | { kind: 'p'; text: string }
  | { kind: 'html'; html: string }
  | { kind: 'list'; ordered?: boolean; items: string[] }
  | { kind: 'table'; headers: string[]; rows: string[][] };

export interface LegalDoc {
  metaTitle: string;
  metaDesc: string;
  eyebrow: string;
  title: string;
  lead: string;
  /** Fecha ISO usada en el atributo datetime de <time>. */
  updated: string;
  updatedDisplay: string;
  sections: LegalSection[];
}

/* ═══════════════════════════════════════════════════════════
   TÉRMINOS Y CONDICIONES
   ═══════════════════════════════════════════════════════════ */

const termsEn: LegalDoc = {
  metaTitle: 'Terms and Conditions | CyberSG',
  metaDesc:
    'Terms and conditions for the web design, digital products and €20 trial offered by CyberSG.',
  eyebrow: 'Legal',
  title: 'Terms and Conditions',
  lead: 'These terms govern the website, the €20 trial and any web design or digital product project contracted with CyberSG.',
  updated: '2026-11-22',
  updatedDisplay: '22 November 2026',
  sections: [
    {
      id: 'provider',
      heading: '1. Who provides the service',
      blocks: [
        {
          kind: 'p',
          text: 'CyberSG is the professional name of Luis Salas, an independent provider of web design, development and digital products. The responsible party is [LEGAL NAME], with tax ID [RUC], registered address [REGISTERED ADDRESS], [COUNTRY], and contact email luis.salas@cybersg.dev.',
        },
        {
          kind: 'html',
          html: 'You can write to <a href="mailto:luis.salas@cybersg.dev">luis.salas@cybersg.dev</a> for any question about these terms.',
        },
        {
          kind: 'p',
          text: 'I work remotely. References to Barcelona, Spain elsewhere on this website describe my current base of operation and do not change the fiscal and contact details above.',
        },
      ],
    },
    {
      id: 'services',
      heading: '2. Services covered',
      blocks: [
        {
          kind: 'p',
          text: 'I offer websites and digital products from start to finish: UX/UI design, frontend development, deployment and follow-up. These terms apply both to individual consumers and to businesses.',
        },
      ],
    },
    {
      id: 'trial',
      heading: '3. The €20 trial',
      blocks: [
        {
          kind: 'p',
          text: 'Before committing to a full project you can request a one-week trial so you can evaluate the way I work and the quality of the result.',
        },
        {
          kind: 'list',
          items: [
            'Price: €20, or its equivalent in Peruvian soles at the exchange rate in force on the payment date.',
            'Payment is made in advance, by Yape or private bank transfer to [BANK / ACCOUNT NUMBER]. This website never collects card or bank details.',
            'Scope: [TRIAL DELIVERABLE], with [NUMBER OF REVISIONS] round(s) of revisions included.',
            'Duration: one week from receipt of the payment and of the briefing or materials needed to start.',
            'Not included: production deployment, hosting, domain names, professional copywriting, complex integrations or ongoing support.',
          ],
        },
        {
          kind: 'p',
          text: 'If you decide to continue with the full project, the €20 paid (or its soles equivalent) is deducted from the final project price.',
        },
        {
          kind: 'p',
          text: 'If you decide not to continue, the payment is non-refundable and all rights over the trial deliverable remain with CyberSG. You are under no obligation to contract the full project.',
        },
      ],
    },
    {
      id: 'project',
      heading: '4. Contracting a full project',
      blocks: [
        {
          kind: 'p',
          text: 'A project is considered accepted once a written quote and its scope have been approved by both parties. The quote sets out deliverables, milestones and an estimated timeline.',
        },
        {
          kind: 'list',
          items: [
            'Deadlines depend on receiving content, feedback and access from the client on time.',
            'Changes outside the agreed scope are quoted separately before any extra work begins.',
            'Any change to scope, price or timeline must be confirmed in writing.',
          ],
        },
      ],
    },
    {
      id: 'payment',
      heading: '5. Prices and payment',
      blocks: [
        {
          kind: 'p',
          text: 'Prices are agreed in the quote and may be expressed in euros or Peruvian soles. Applicable taxes ([TAX]) are shown or invoiced separately.',
        },
        {
          kind: 'p',
          text: 'Payment is made by Yape or bank transfer agreed privately with the client: [PAYMENT SCHEDULE], to [BANK / ACCOUNT NUMBER]. No card data is collected through this website.',
        },
      ],
    },
    {
      id: 'client',
      heading: '6. Client responsibilities',
      blocks: [
        {
          kind: 'list',
          items: [
            'Provide the texts, images, brand assets and access needed to carry out the work.',
            'Give consolidated feedback within the agreed response times.',
            'Ensure you hold the rights or licences required for the materials you supply, and assume responsibility for their content.',
          ],
        },
      ],
    },
    {
      id: 'delivery',
      heading: '7. Delivery and acceptance',
      blocks: [
        {
          kind: 'p',
          text: 'Deliverables are handed over in the format agreed in the quote. The client has [ACCEPTANCE PERIOD] to review them and report any defect or deviation from the agreed scope.',
        },
        {
          kind: 'p',
          text: 'Domain registration, hosting and third-party accounts are the client’s responsibility unless the quote expressly states otherwise.',
        },
      ],
    },
    {
      id: 'ip',
      heading: '8. Intellectual property',
      blocks: [
        {
          kind: 'p',
          text: 'Once the full project price has been paid, the rights over the final deliverables created specifically for the client are assigned to the client.',
        },
        {
          kind: 'p',
          text: 'Third-party frameworks, libraries, fonts and assets keep their own licences. Rights over the €20 trial deliverable remain with CyberSG whenever the client does not continue with the project.',
        },
        {
          kind: 'p',
          text: 'Unless a written confidentiality agreement is signed, CyberSG may show the finished project in its portfolio and communications.',
        },
      ],
    },
    {
      id: 'warranty',
      heading: '9. Warranty and support',
      blocks: [
        {
          kind: 'p',
          text: 'For [WARRANTY PERIOD] after delivery I will correct errors attributable to the delivered work. New features, third-party changes, hosting issues and content updates are not included and may be quoted separately.',
        },
      ],
    },
    {
      id: 'cancellation',
      heading: '10. Cancellation and withdrawal',
      blocks: [
        {
          kind: 'p',
          text: 'Consumers: where applicable, you may exercise the statutory right of withdrawal or retraction within [STATUTORY WITHDRAWAL TERM] under [CONSUMER LAW]. Personalised digital services and work already completed with your express consent may be subject to the legal exceptions.',
        },
        {
          kind: 'p',
          text: 'Businesses: once work has started, cancellation entitles CyberSG to payment for the work performed and any committed costs, according to [CANCELLATION TERMS].',
        },
        {
          kind: 'p',
          text: 'The €20 trial payment is non-refundable in all cases.',
        },
      ],
    },
    {
      id: 'liability',
      heading: '11. Liability',
      blocks: [
        {
          kind: 'p',
          text: 'I make reasonable efforts to deliver the agreed work, but I cannot guarantee uninterrupted or error-free operation of third-party services. Liability is limited to the amounts paid for the service, except where the law provides otherwise. Events beyond my reasonable control suspend the corresponding obligations.',
        },
      ],
    },
    {
      id: 'law',
      heading: '12. Governing law and jurisdiction',
      blocks: [
        {
          kind: 'p',
          text: 'These terms are governed by [GOVERNING LAW] (Peruvian law by default). The parties will first try to resolve any dispute amicably; failing that, the competent courts will be those of [JURISDICTION].',
        },
      ],
    },
    {
      id: 'changes',
      heading: '13. Changes to these terms',
      blocks: [
        {
          kind: 'p',
          text: 'I may update these terms to reflect changes in the service or in the law. The current version is always the one published on this page with its last-updated date.',
        },
        {
          kind: 'html',
          html: 'For questions, contact <a href="mailto:luis.salas@cybersg.dev">luis.salas@cybersg.dev</a>.',
        },
      ],
    },
  ],
};

const termsEs: LegalDoc = {
  metaTitle: 'Términos y Condiciones | CyberSG',
  metaDesc:
    'Términos y condiciones del diseño web, los productos digitales y la prueba de 20 € de CyberSG.',
  eyebrow: 'Legal',
  title: 'Términos y Condiciones',
  lead: 'Estos términos regulan el sitio web, la prueba de 20 € y cualquier proyecto de diseño web o producto digital contratado con CyberSG.',
  updated: '2026-11-22',
  updatedDisplay: '22 de noviembre de 2026',
  sections: [
    {
      id: 'provider',
      heading: '1. Quién presta el servicio',
      blocks: [
        {
          kind: 'p',
          text: 'CyberSG es el nombre profesional de Luis Salas, proveedor independiente de diseño y desarrollo web y de productos digitales. El responsable es [NOMBRE O RAZÓN SOCIAL], con RUC [RUC], domicilio fiscal [DOMICILIO FISCAL], [PAÍS], y correo de contacto luis.salas@cybersg.dev.',
        },
        {
          kind: 'html',
          html: 'Puedes escribir a <a href="mailto:luis.salas@cybersg.dev">luis.salas@cybersg.dev</a> para cualquier consulta sobre estos términos.',
        },
        {
          kind: 'p',
          text: 'Trabajo en remoto. Las referencias a Barcelona, España en otras páginas del sitio describen mi base actual de operación y no modifican los datos fiscales y de contacto indicados arriba.',
        },
      ],
    },
    {
      id: 'services',
      heading: '2. Servicios cubiertos',
      blocks: [
        {
          kind: 'p',
          text: 'Ofrezco páginas web y productos digitales de inicio a fin: diseño UX/UI, desarrollo frontend, despliegue y seguimiento. Estos términos se aplican tanto a consumidores particulares como a empresas.',
        },
      ],
    },
    {
      id: 'trial',
      heading: '3. La prueba de 20 €',
      blocks: [
        {
          kind: 'p',
          text: 'Antes de comprometerte con un proyecto completo puedes solicitar una prueba de una semana para evaluar mi forma de trabajar y la calidad del resultado.',
        },
        {
          kind: 'list',
          items: [
            'Precio: 20 € o su equivalente en soles peruanos al tipo de cambio vigente en la fecha de pago.',
            'El pago se realiza por adelantado, mediante Yape o transferencia bancaria privada a [BANCO / N.º DE CUENTA]. Este sitio web nunca recoge datos bancarios ni de tarjeta.',
            'Alcance: [ENTREGABLE DE LA PRUEBA], con [N.º DE REVISIONES] ronda(s) de revisiones incluidas.',
            'Duración: una semana desde la recepción del pago y del briefing o los materiales necesarios para comenzar.',
            'No incluye: despliegue a producción, hosting, dominios, redacción profesional de textos, integraciones complejas ni soporte posterior.',
          ],
        },
        {
          kind: 'p',
          text: 'Si decides continuar con el proyecto completo, los 20 € pagados (o su equivalente en soles) se descuentan del precio final del proyecto.',
        },
        {
          kind: 'p',
          text: 'Si decides no continuar, el pago no es reembolsable y todos los derechos sobre el entregable de la prueba permanecen en CyberSG. No tienes obligación de contratar el proyecto completo.',
        },
      ],
    },
    {
      id: 'project',
      heading: '4. Contratación del proyecto completo',
      blocks: [
        {
          kind: 'p',
          text: 'Un proyecto se considera aceptado cuando ambas partes aprueban por escrito un presupuesto y su alcance. El presupuesto indica los entregables, los hitos y un plazo estimado.',
        },
        {
          kind: 'list',
          items: [
            'Los plazos dependen de que el cliente entregue a tiempo los contenidos, los comentarios y los accesos.',
            'Los cambios fuera del alcance acordado se presupuestan aparte antes de comenzar cualquier trabajo adicional.',
            'Toda modificación del alcance, el precio o el plazo debe confirmarse por escrito.',
          ],
        },
      ],
    },
    {
      id: 'payment',
      heading: '5. Precios y forma de pago',
      blocks: [
        {
          kind: 'p',
          text: 'Los precios se acuerdan en el presupuesto y pueden expresarse en euros o en soles peruanos. Los impuestos aplicables ([IMPUESTO]) se indican o se facturan por separado.',
        },
        {
          kind: 'p',
          text: 'El pago se realiza mediante Yape o transferencia bancaria acordada privatamente con el cliente: [CALENDARIO DE PAGOS], a [BANCO / N.º DE CUENTA]. No se recogen datos de tarjeta a través de este sitio.',
        },
      ],
    },
    {
      id: 'client',
      heading: '6. Responsabilidades del cliente',
      blocks: [
        {
          kind: 'list',
          items: [
            'Aportar los textos, imágenes, recursos de marca y accesos necesarios para realizar el trabajo.',
            'Enviar los comentarios de forma consolidada dentro de los plazos acordados.',
            'Garantizar que cuentas con los derechos o licencias necesarios sobre los materiales que entregues, y asumir la responsabilidad por su contenido.',
          ],
        },
      ],
    },
    {
      id: 'delivery',
      heading: '7. Entrega y aceptación',
      blocks: [
        {
          kind: 'p',
          text: 'Los entregables se entregan en el formato acordado en el presupuesto. El cliente dispone de [PLAZO DE ACEPTACIÓN] para revisarlos y comunicar cualquier defecto o desviación respecto al alcance acordado.',
        },
        {
          kind: 'p',
          text: 'El registro de dominios, el hosting y las cuentas de terceros son responsabilidad del cliente salvo que el presupuesto indique expresamente lo contrario.',
        },
      ],
    },
    {
      id: 'ip',
      heading: '8. Propiedad intelectual',
      blocks: [
        {
          kind: 'p',
          text: 'Una vez pagado el importe total del proyecto, se ceden al cliente los derechos sobre los entregables finales creados específicamente para él.',
        },
        {
          kind: 'p',
          text: 'Los frameworks, librerías, tipografías y recursos de terceros conservan sus propias licencias. Los derechos sobre el entregable de la prueba de 20 € permanecen en CyberSG cuando el cliente no continúa con el proyecto.',
        },
        {
          kind: 'p',
          text: 'Salvo que se firme un acuerdo de confidencialidad por escrito, CyberSG puede mostrar el proyecto terminado en su portafolio y comunicaciones.',
        },
      ],
    },
    {
      id: 'warranty',
      heading: '9. Garantía y soporte',
      blocks: [
        {
          kind: 'p',
          text: 'Durante [PERIODO DE GARANTÍA] tras la entrega corregiré los errores atribuibles al trabajo entregado. No se incluyen nuevas funcionalidades, cambios de terceros, problemas de hosting ni actualizaciones de contenido; pueden presupuestarse aparte.',
        },
      ],
    },
    {
      id: 'cancellation',
      heading: '10. Cancelación y desistimiento',
      blocks: [
        {
          kind: 'p',
          text: 'Consumidores: cuando corresponda, puedes ejercer el derecho legal de desistimiento o retracto dentro de [PLAZO LEGAL DE DESISTIMIENTO] conforme a [LEY DE CONSUMO]. Los servicios digitales personalizados y el trabajo ya realizado con tu consentimiento expreso pueden estar sujetos a las excepciones legales.',
        },
        {
          kind: 'p',
          text: 'Empresas: una vez iniciado el trabajo, la cancelación faculta a CyberSG a cobrar el trabajo realizado y los costes comprometidos, según [CONDICIONES DE CANCELACIÓN].',
        },
        {
          kind: 'p',
          text: 'El pago de la prueba de 20 € no es reembolsable en ningún caso.',
        },
      ],
    },
    {
      id: 'liability',
      heading: '11. Responsabilidad',
      blocks: [
        {
          kind: 'p',
          text: 'Realizo esfuerzos razonables para entregar el trabajo acordado, pero no puedo garantizar el funcionamiento ininterrumpido o libre de errores de servicios de terceros. La responsabilidad se limita a los importes pagados por el servicio, salvo que la ley disponga otra cosa. Los hechos fuera de mi control razonable suspenden las obligaciones correspondientes.',
        },
      ],
    },
    {
      id: 'law',
      heading: '12. Ley aplicable y jurisdicción',
      blocks: [
        {
          kind: 'p',
          text: 'Estos términos se rigen por [LEY APLICABLE] (por defecto, la legislación peruana). Las partes intentarán primero resolver amistosamente cualquier controversia; de no ser posible, serán competentes los tribunales de [JURISDICCIÓN].',
        },
      ],
    },
    {
      id: 'changes',
      heading: '13. Cambios en estos términos',
      blocks: [
        {
          kind: 'p',
          text: 'Puedo actualizar estos términos para reflejar cambios en el servicio o en la ley. La versión vigente es siempre la publicada en esta página con su fecha de última actualización.',
        },
        {
          kind: 'html',
          html: 'Para cualquier consulta, escribe a <a href="mailto:luis.salas@cybersg.dev">luis.salas@cybersg.dev</a>.',
        },
      ],
    },
  ],
};

const termsCa: LegalDoc = {
  metaTitle: 'Termes i condicions | CyberSG',
  metaDesc:
    'Termes i condicions del disseny web, els productes digitals i la prova de 20 € de CyberSG.',
  eyebrow: 'Legal',
  title: 'Termes i condicions',
  lead: 'Aquests termes regulen el lloc web, la prova de 20 € i qualsevol projecte de disseny web o producte digital contractat amb CyberSG.',
  updated: '2026-11-22',
  updatedDisplay: '22 de novembre de 2026',
  sections: [
    {
      id: 'provider',
      heading: '1. Qui presta el servei',
      blocks: [
        {
          kind: 'p',
          text: 'CyberSG és el nom professional de Luis Salas, proveïdor independent de disseny i desenvolupament web i de productes digitals. El responsable és [NOM O RAÓ SOCIAL], amb RUC [RUC], domicili fiscal [DOMICILI FISCAL], [PAÍS], i correu de contacte luis.salas@cybersg.dev.',
        },
        {
          kind: 'html',
          html: 'Pots escriure a <a href="mailto:luis.salas@cybersg.dev">luis.salas@cybersg.dev</a> per a qualsevol consulta sobre aquests termes.',
        },
        {
          kind: 'p',
          text: 'Treballo en remot. Les referències a Barcelona, Espanya en altres pàgines del lloc descriuen la meva base actual d’operació i no modifiquen les dades fiscals i de contacte indicades a dalt.',
        },
      ],
    },
    {
      id: 'services',
      heading: '2. Serveis coberts',
      blocks: [
        {
          kind: 'p',
          text: 'Ofereixo pàgines web i productes digitals de principi a fi: disseny UX/UI, desenvolupament frontend, desplegament i seguiment. Aquests termes s’apliquen tant a consumidors particulars com a empreses.',
        },
      ],
    },
    {
      id: 'trial',
      heading: '3. La prova de 20 €',
      blocks: [
        {
          kind: 'p',
          text: 'Abans de comprometre’t amb un projecte complet pots demanar una prova d’una setmana per avaluar la meva manera de treballar i la qualitat del resultat.',
        },
        {
          kind: 'list',
          items: [
            'Preu: 20 € o el seu equivalent en sols peruans al tipus de canvi vigent en la data de pagament.',
            'El pagament es fa per endavant, mitjançant Yape o transferència bancària privada a [BANC / N.º DE COMPTE]. Aquest lloc web no recull dades bancàries ni de targeta.',
            'Abast: [ENTREGABLE DE LA PROVA], amb [N.º DE REVISIONS] ronda(s) de revisions incloses.',
            'Durada: una setmana des de la recepció del pagament i del briefing o els materials necessaris per començar.',
            'No inclou: desplegament a producció, hosting, dominis, redacció professional de textos, integracions complexes ni suport posterior.',
          ],
        },
        {
          kind: 'p',
          text: 'Si decideixes continuar amb el projecte complet, els 20 € pagats (o el seu equivalent en sols) es descompten del preu final del projecte.',
        },
        {
          kind: 'p',
          text: 'Si decideixes no continuar, el pagament no és reemborsable i tots els drets sobre l’entregable de la prova romanen a CyberSG. No tens cap obligació de contractar el projecte complet.',
        },
      ],
    },
    {
      id: 'project',
      heading: '4. Contractació del projecte complet',
      blocks: [
        {
          kind: 'p',
          text: 'Un projecte es considera acceptat quan ambdues parts aproven per escrit un pressupost i el seu abast. El pressupost indica els entregables, els fites i un termini estimat.',
        },
        {
          kind: 'list',
          items: [
            'Els terminis depenen que el client lliuri a temps els continguts, els comentaris i els accessos.',
            'Els canvis fora de l’abast acordat es pressuposten a part abans de començar qualsevol feina addicional.',
            'Tota modificació de l’abast, el preu o el termini s’ha de confirmar per escrit.',
          ],
        },
      ],
    },
    {
      id: 'payment',
      heading: '5. Preus i forma de pagament',
      blocks: [
        {
          kind: 'p',
          text: 'Els preus s’acorden al pressupost i poden expressar-se en euros o en sols peruans. Els impostos aplicables ([IMPOST]) s’indiquen o es facturen a part.',
        },
        {
          kind: 'p',
          text: 'El pagament es fa mitjançant Yape o transferència bancària acordada privatament amb el client: [CALENDARI DE PAGAMENTS], a [BANC / N.º DE COMPTE]. No es recullen dades de targeta a través d’aquest lloc.',
        },
      ],
    },
    {
      id: 'client',
      heading: '6. Responsabilitats del client',
      blocks: [
        {
          kind: 'list',
          items: [
            'Aportar els textos, les imatges, els recursos de marca i els accessos necessaris per fer la feina.',
            'Enviar els comentaris de manera consolidada dins dels terminis acordats.',
            'Garantir que disposes dels drets o les llicències necessaris sobre els materials que lliures, i assumir la responsabilitat pel seu contingut.',
          ],
        },
      ],
    },
    {
      id: 'delivery',
      heading: '7. Lliurament i acceptació',
      blocks: [
        {
          kind: 'p',
          text: 'Els entregables es lliuren en el format acordat al pressupost. El client disposa de [TERMINI D’ACCEPTACIÓ] per revisar-los i comunicar qualsevol defecte o desviació respecte a l’abast acordat.',
        },
        {
          kind: 'p',
          text: 'El registre de dominis, l’hosting i els comptes de tercers són responsabilitat del client llevat que el pressupost indiqui expressament el contrari.',
        },
      ],
    },
    {
      id: 'ip',
      heading: '8. Propietat intel·lectual',
      blocks: [
        {
          kind: 'p',
          text: 'Un cop pagat l’import total del projecte, els drets sobre els entregables finals creats específicament per al client se li cedeixen.',
        },
        {
          kind: 'p',
          text: 'Els frameworks, les llibreries, les tipografies i els recursos de tercers conserven les seves llicències. Els drets sobre l’entregable de la prova de 20 € romanen a CyberSG quan el client no continua amb el projecte.',
        },
        {
          kind: 'p',
          text: 'Si no es signa un acord de confidencialitat per escrit, CyberSG pot mostrar el projecte acabat al seu portafoli i comunicacions.',
        },
      ],
    },
    {
      id: 'warranty',
      heading: '9. Garantia i suport',
      blocks: [
        {
          kind: 'p',
          text: 'Durant [PERIODE DE GARANTIA] després del lliurament corregiré els errors atribuïbles a la feina lliurada. No s’hi inclouen noves funcionalitats, canvis de tercers, problemes d’hosting ni actualitzacions de contingut; es poden pressupostar a part.',
        },
      ],
    },
    {
      id: 'cancellation',
      heading: '10. Cancel·lació i desistiment',
      blocks: [
        {
          kind: 'p',
          text: 'Consumidors: quan correspongui, pots exercir el dret legal de desistiment o retracte dins de [TERMINI LEGAL DE DESISTIMENT] segons [LLEI DE CONSUM]. Els serveis digitals personalitzats i la feina ja feta amb el teu consentiment exprés poden estar subjectes a les excepcions legals.',
        },
        {
          kind: 'p',
          text: 'Empreses: un cop iniciada la feina, la cancel·lació faculta CyberSG a cobrar la feina realitzada i els costos compromesos, segons [CONDICIONS DE CANCEL·LACIÓ].',
        },
        {
          kind: 'p',
          text: 'El pagament de la prova de 20 € no és reemborsable en cap cas.',
        },
      ],
    },
    {
      id: 'liability',
      heading: '11. Responsabilitat',
      blocks: [
        {
          kind: 'p',
          text: 'Faig esforços raonables per lliurar la feina acordada, però no puc garantir el funcionament ininterromput o sense errors de serveis de tercers. La responsabilitat es limita als importos pagats pel servei, llevat que la llei disposi una altra cosa. Els fets fora del meu control raonable suspenden les obligacions corresponents.',
        },
      ],
    },
    {
      id: 'law',
      heading: '12. Llei aplicable i jurisdicció',
      blocks: [
        {
          kind: 'p',
          text: 'Aquests termes es regeixen per [LLEI APLICABLE] (per defecte, la legislació peruana). Les parts intentaran primer resoldre amistosament qualsevol controvèrsia; si no és possible, seran competents els tribunals de [JURISDICCIÓ].',
        },
      ],
    },
    {
      id: 'changes',
      heading: '13. Canvis en aquests termes',
      blocks: [
        {
          kind: 'p',
          text: 'Puc actualitzar aquests termes per reflectir canvis en el servei o en la llei. La versió vigent és sempre la publicada en aquesta pàgina amb la seva data d’última actualització.',
        },
        {
          kind: 'html',
          html: 'Per a qualsevol consulta, escriu a <a href="mailto:luis.salas@cybersg.dev">luis.salas@cybersg.dev</a>.',
        },
      ],
    },
  ],
};

/* ═══════════════════════════════════════════════════════════
   POLÍTICA DE PRIVACIDAD
   ═══════════════════════════════════════════════════════════ */

const privacyEn: LegalDoc = {
  metaTitle: 'Privacy Policy | CyberSG',
  metaDesc:
    'How CyberSG handles data from the contact form, Microsoft Clarity, Google Analytics and Google Search Console.',
  eyebrow: 'Legal',
  title: 'Privacy Policy',
  lead: 'This policy explains what personal data is collected when you use this website, why it is collected and what rights you have.',
  updated: '2026-11-22',
  updatedDisplay: '22 November 2026',
  sections: [
    {
      id: 'controller',
      heading: '1. Data controller',
      blocks: [
        {
          kind: 'p',
          text: 'The controller is CyberSG / Luis Salas, [LEGAL NAME], with tax ID [RUC], registered address [REGISTERED ADDRESS], [COUNTRY]. Contact: luis.salas@cybersg.dev.',
        },
        {
          kind: 'html',
          html: 'You can exercise your rights and ask questions at <a href="mailto:luis.salas@cybersg.dev">luis.salas@cybersg.dev</a>.',
        },
        {
          kind: 'p',
          text: 'I operate remotely. References to Barcelona, Spain elsewhere on the website describe my current base of operation and do not change the details above.',
        },
      ],
    },
    {
      id: 'overview',
      heading: '2. Data collected and why',
      blocks: [
        {
          kind: 'table',
          headers: ['Source', 'Data', 'Purpose'],
          rows: [
            ['Contact form', 'Name, company, email, message, motive, consent', 'Answer your inquiry and manage a possible project'],
            ['Microsoft Clarity', 'Usage events, session recordings, heatmaps, approximate location', 'Understand how the site is used and improve UX'],
            ['Google Analytics 4', 'Page views, events, device and approximate location data', 'Measure audience and site performance'],
            ['Google Search Console', 'No tracking cookie (DNS verification)', 'Verify ownership and review search traffic'],
            ['Technical logs', 'IP address, browser, user agent', 'Security and basic operation of the site'],
          ],
        },
      ],
    },
    {
      id: 'form',
      heading: '3. Contact form',
      blocks: [
        {
          kind: 'p',
          text: 'When you submit the form, the fields name, company, email, message, motive and the consent checkbox are sent to the Make automation and from there to luis.salas@cybersg.dev. A hidden antispam field (honeypot) is also checked; real users leave it empty.',
        },
        {
          kind: 'p',
          text: 'The website does not ask for payment details. Trial and project payments are made directly by Yape or bank transfer outside this site.',
        },
        {
          kind: 'p',
          text: 'Purpose: to reply to your message and, if applicable, manage the contractual relationship. Legal basis: your consent and, where relevant, pre-contractual measures. Retention: [RETENTION PERIOD], unless you ask for earlier deletion or the law requires longer storage.',
        },
      ],
    },
    {
      id: 'clarity',
      heading: '4. Microsoft Clarity',
      blocks: [
        {
          kind: 'p',
          text: 'This site loads Microsoft Clarity (tag uj1cldalzc) to record anonymised session interactions and generate heatmaps. It may set identifiers such as _clck and _clsk and process approximate location and device data.',
        },
        {
          kind: 'p',
          text: 'Provider: Microsoft. Purpose: UX analysis and improvement. Legal basis: consent, subject to the cookie banner implementation noted in section 8. International transfers may occur under [TRANSFER MECHANISM]. More information: Microsoft privacy statement.',
        },
      ],
    },
    {
      id: 'analytics',
      heading: '5. Google Analytics 4',
      blocks: [
        {
          kind: 'p',
          text: 'Google Analytics 4 is used to measure visits and interactions. It may set cookies such as _ga and _gid, which identify browsers for statistical purposes.',
        },
        {
          kind: 'p',
          text: 'Provider: Google. Purpose: audience measurement. Legal basis: consent, subject to section 8. Google may process data outside the country under [TRANSFER MECHANISM]. See Google’s privacy policy for details.',
        },
      ],
    },
    {
      id: 'search-console',
      heading: '6. Google Search Console',
      blocks: [
        {
          kind: 'p',
          text: 'Search Console is linked through DNS verification. It does not install tracking cookies on this website and gives aggregated information about how the site appears in search results. Its use is based on the legitimate interest in keeping the site visible and healthy.',
        },
      ],
    },
    {
      id: 'cookies',
      heading: '7. Cookies used',
      blocks: [
        {
          kind: 'table',
          headers: ['Cookie', 'Provider', 'Purpose', 'Typical duration', 'Type'],
          rows: [
            ['_clck', 'Microsoft Clarity', 'Retains session state', 'Up to 1 year', 'Third party'],
            ['_clsk', 'Microsoft Clarity', 'Links session events', 'Session / up to 1 year', 'Third party'],
            ['_ga', 'Google Analytics', 'Distinguishes users', 'Up to 2 years', 'Third party'],
            ['_gid', 'Google Analytics', 'Distinguishes users within a day', '24 hours', 'Third party'],
            ['—', 'Google Search Console', 'DNS verification only, no cookie', 'None', '—'],
          ],
        },
        {
          kind: 'p',
          text: 'Durations reflect usual defaults; confirm the exact values in the Google and Microsoft dashboards. Strictly necessary cookies, if any, do not require consent.',
        },
      ],
    },
    {
      id: 'consent',
      heading: '8. Consent for analytics',
      blocks: [
        {
          kind: 'p',
          text: 'Clarity and Google Analytics are non-essential. Consent management (a cookie banner and Consent Mode compatibility) is planned as a later improvement. Until it is in place, you can block or delete these cookies through your browser settings.',
        },
        {
          kind: 'p',
          text: 'You may withdraw or give consent at any time through your browser or the future preference control, without affecting the lawfulness of processing carried out beforehand.',
        },
      ],
    },
    {
      id: 'recipients',
      heading: '9. Recipients and international transfers',
      blocks: [
        {
          kind: 'p',
          text: 'Data is shared only with the services needed to operate the site: Make (form automation, https://www.make.com), Microsoft (Clarity), Google (Analytics and Search Console) and the email provider for luis.salas@cybersg.dev. Some of these providers may process data outside your country under [TRANSFER MECHANISM], such as adequacy decisions or standard contractual clauses.',
        },
      ],
    },
    {
      id: 'retention',
      heading: '10. Retention',
      blocks: [
        {
          kind: 'p',
          text: 'Contact form data is kept for [RETENTION PERIOD]. Analytics data is kept according to the configuration of each provider: [ANALYTICS RETENTION]. When no longer needed, data is deleted or anonymised.',
        },
      ],
    },
    {
      id: 'rights',
      heading: '11. Your rights',
      blocks: [
        {
          kind: 'p',
          text: 'Subject to the applicable law, you may request access, rectification, deletion, opposition, limitation of processing and portability of your data, as well as withdraw your consent.',
        },
        {
          kind: 'p',
          text: 'Send your request to luis.salas@cybersg.dev. I will respond within [RESPONSE TIME]. You may also lodge a complaint with [SUPERVISORY AUTHORITY]. If you are in the EU, the GDPR may also apply and you can complain to your local data protection authority.',
        },
      ],
    },
    {
      id: 'children',
      heading: '12. Children',
      blocks: [
        {
          kind: 'p',
          text: 'This website is not directed at children and I do not knowingly collect data from minors. If you believe a child has sent data, contact me so I can delete it.',
        },
      ],
    },
    {
      id: 'security',
      heading: '13. Security',
      blocks: [
        {
          kind: 'p',
          text: 'Reasonable technical and organisational measures are used to protect the data. No system is completely secure, so please avoid sending sensitive information through the contact form.',
        },
      ],
    },
    {
      id: 'changes',
      heading: '14. Changes to this policy',
      blocks: [
        {
          kind: 'p',
          text: 'This policy may be updated when the tools used on the site or the law change. The current version is the one published here with its last-updated date.',
        },
        {
          kind: 'html',
          html: 'Questions: <a href="mailto:luis.salas@cybersg.dev">luis.salas@cybersg.dev</a>.',
        },
      ],
    },
  ],
};

const privacyEs: LegalDoc = {
  metaTitle: 'Política de Privacidad | CyberSG',
  metaDesc:
    'Cómo trata CyberSG los datos del formulario de contacto, Microsoft Clarity, Google Analytics y Google Search Console.',
  eyebrow: 'Legal',
  title: 'Política de Privacidad',
  lead: 'Esta política explica qué datos personales se recogen al usar este sitio web, para qué se recogen y qué derechos tienes.',
  updated: '2026-11-22',
  updatedDisplay: '22 de noviembre de 2026',
  sections: [
    {
      id: 'controller',
      heading: '1. Responsable del tratamiento',
      blocks: [
        {
          kind: 'p',
          text: 'El responsable es CyberSG / Luis Salas, [NOMBRE O RAZÓN SOCIAL], con RUC [RUC], domicilio fiscal [DOMICILIO FISCAL], [PAÍS]. Contacto: luis.salas@cybersg.dev.',
        },
        {
          kind: 'html',
          html: 'Puedes ejercer tus derechos y plantear consultas en <a href="mailto:luis.salas@cybersg.dev">luis.salas@cybersg.dev</a>.',
        },
        {
          kind: 'p',
          text: 'Opero en remoto. Las referencias a Barcelona, España en otras páginas del sitio describen mi base actual de operación y no modifican los datos indicados arriba.',
        },
      ],
    },
    {
      id: 'overview',
      heading: '2. Datos recogidos y finalidad',
      blocks: [
        {
          kind: 'table',
          headers: ['Origen', 'Datos', 'Finalidad'],
          rows: [
            ['Formulario de contacto', 'Nombre, empresa, correo, mensaje, motivo, consentimiento', 'Responder a tu consulta y gestionar un posible proyecto'],
            ['Microsoft Clarity', 'Eventos de uso, grabaciones de sesión, mapas de calor, ubicación aproximada', 'Entender el uso del sitio y mejorar la experiencia'],
            ['Google Analytics 4', 'Páginas vistas, eventos, dispositivo y ubicación aproximada', 'Medir la audiencia y el rendimiento del sitio'],
            ['Google Search Console', 'Sin cookie de seguimiento (verificación DNS)', 'Verificar la propiedad y revisar el tráfico de búsqueda'],
            ['Registros técnicos', 'Dirección IP, navegador, agente de usuario', 'Seguridad y funcionamiento básico del sitio'],
          ],
        },
      ],
    },
    {
      id: 'form',
      heading: '3. Formulario de contacto',
      blocks: [
        {
          kind: 'p',
          text: 'Al enviar el formulario, los campos nombre, empresa, correo, mensaje, motivo y la casilla de consentimiento se envían a la automatización de Make y desde allí a luis.salas@cybersg.dev. También se comprueba un campo antispam oculto (honeypot); los usuarios reales lo dejan vacío.',
        },
        {
          kind: 'p',
          text: 'Este sitio no solicita datos de pago. Los pagos de la prueba y del proyecto se realizan directamente por Yape o transferencia bancaria fuera de este sitio.',
        },
        {
          kind: 'p',
          text: 'Finalidad: responder a tu mensaje y, si procede, gestionar la relación contractual. Base jurídica: tu consentimiento y, cuando corresponda, medidas precontractuales. Conservación: [PLAZO DE CONSERVACIÓN], salvo que solicites antes su supresión o la ley exija un plazo mayor.',
        },
      ],
    },
    {
      id: 'clarity',
      heading: '4. Microsoft Clarity',
      blocks: [
        {
          kind: 'p',
          text: 'Este sitio carga Microsoft Clarity (etiqueta uj1cldalzc) para registrar interacciones de sesión de forma seudonimizada y generar mapas de calor. Puede instalar identificadores como _clck y _clsk y tratar ubicación aproximada y datos del dispositivo.',
        },
        {
          kind: 'p',
          text: 'Proveedor: Microsoft. Finalidad: análisis y mejora de la experiencia de uso. Base jurídica: consentimiento, sujeto a la implementación del banner de cookies indicada en la sección 8. Pueden producirse transferencias internacionales al amparo de [MECANISMO DE TRANSFERENCIA]. Más información en la declaración de privacidad de Microsoft.',
        },
      ],
    },
    {
      id: 'analytics',
      heading: '5. Google Analytics 4',
      blocks: [
        {
          kind: 'p',
          text: 'Se utiliza Google Analytics 4 para medir visitas e interacciones. Puede instalar cookies como _ga y _gid, que identifican navegadores con fines estadísticos.',
        },
        {
          kind: 'p',
          text: 'Proveedor: Google. Finalidad: medición de audiencia. Base jurídica: consentimiento, sujeto a la sección 8. Google puede tratar datos fuera del país al amparo de [MECANISMO DE TRANSFERENCIA]. Consulta la política de privacidad de Google para más detalles.',
        },
      ],
    },
    {
      id: 'search-console',
      heading: '6. Google Search Console',
      blocks: [
        {
          kind: 'p',
          text: 'Search Console está vinculado mediante verificación DNS. No instala cookies de seguimiento en este sitio y ofrece información agregada sobre cómo aparece el sitio en los resultados de búsqueda. Su uso se basa en el interés legítimo de mantener el sitio visible y funcionando correctamente.',
        },
      ],
    },
    {
      id: 'cookies',
      heading: '7. Cookies utilizadas',
      blocks: [
        {
          kind: 'table',
          headers: ['Cookie', 'Proveedor', 'Finalidad', 'Duración habitual', 'Tipo'],
          rows: [
            ['_clck', 'Microsoft Clarity', 'Conserva el estado de la sesión', 'Hasta 1 año', 'Tercero'],
            ['_clsk', 'Microsoft Clarity', 'Relaciona eventos de la sesión', 'Sesión / hasta 1 año', 'Tercero'],
            ['_ga', 'Google Analytics', 'Distingue usuarios', 'Hasta 2 años', 'Tercero'],
            ['_gid', 'Google Analytics', 'Distingue usuarios durante un día', '24 horas', 'Tercero'],
            ['—', 'Google Search Console', 'Solo verificación DNS, sin cookie', 'Ninguna', '—'],
          ],
        },
        {
          kind: 'p',
          text: 'Las duraciones corresponden a valores habituales; confírmalas en los paneles de Google y Microsoft. Las cookies estrictamente necesarias, si las hubiera, no requieren consentimiento.',
        },
      ],
    },
    {
      id: 'consent',
      heading: '8. Consentimiento para analítica',
      blocks: [
        {
          kind: 'p',
          text: 'Clarity y Google Analytics no son esenciales. La gestión del consentimiento (banner de cookies y compatibilidad con Consent Mode) está prevista como mejora posterior. Hasta entonces, puedes bloquear o eliminar estas cookies desde la configuración de tu navegador.',
        },
        {
          kind: 'p',
          text: 'Puedes retirar u otorgar tu consentimiento en cualquier momento desde el navegador o desde el futuro panel de preferencias, sin que ello afecte a la licitud del tratamiento anterior.',
        },
      ],
    },
    {
      id: 'recipients',
      heading: '9. Destinatarios y transferencias internacionales',
      blocks: [
        {
          kind: 'p',
          text: 'Los datos se comparten únicamente con los servicios necesarios para operar el sitio: Make (automatización del formulario, https://www.make.com), Microsoft (Clarity), Google (Analytics y Search Console) y el proveedor de correo de luis.salas@cybersg.dev. Algunos de estos proveedores pueden tratar datos fuera de tu país al amparo de [MECANISMO DE TRANSFERENCIA], como decisiones de adecuación o cláusulas contractuales tipo.',
        },
      ],
    },
    {
      id: 'retention',
      heading: '10. Conservación',
      blocks: [
        {
          kind: 'p',
          text: 'Los datos del formulario se conservan durante [PLAZO DE CONSERVACIÓN]. Los datos analíticos se mantienen según la configuración de cada proveedor: [CONSERVACIÓN DE ANALÍTICA]. Cuando dejan de ser necesarios, se eliminan o se anonimizan.',
        },
      ],
    },
    {
      id: 'rights',
      heading: '11. Tus derechos',
      blocks: [
        {
          kind: 'p',
          text: 'Según la normativa aplicable, puedes solicitar acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad de tus datos, así como retirar tu consentimiento.',
        },
        {
          kind: 'p',
          text: 'Envía tu solicitud a luis.salas@cybersg.dev. Responderé en un plazo de [PLAZO DE RESPUESTA]. También puedes presentar una reclamación ante [AUTORIDAD DE CONTROL]. Si te encuentras en la UE, el RGPD puede resultar aplicable y puedes reclamar ante la autoridad de protección de datos de tu país.',
        },
      ],
    },
    {
      id: 'children',
      heading: '12. Menores de edad',
      blocks: [
        {
          kind: 'p',
          text: 'Este sitio no está dirigido a menores y no recojo conscientemente datos de menores de edad. Si consideras que un menor ha enviado datos, escríbeme para que los elimine.',
        },
      ],
    },
    {
      id: 'security',
      heading: '13. Seguridad',
      blocks: [
        {
          kind: 'p',
          text: 'Se aplican medidas técnicas y organizativas razonables para proteger los datos. Ningún sistema es completamente seguro, por lo que te recomiendo no enviar información sensible a través del formulario.',
        },
      ],
    },
    {
      id: 'changes',
      heading: '14. Cambios en esta política',
      blocks: [
        {
          kind: 'p',
          text: 'Esta política puede actualizarse cuando cambien las herramientas del sitio o la normativa. La versión vigente es la publicada aquí con su fecha de última actualización.',
        },
        {
          kind: 'html',
          html: 'Consultas: <a href="mailto:luis.salas@cybersg.dev">luis.salas@cybersg.dev</a>.',
        },
      ],
    },
  ],
};

const privacyCa: LegalDoc = {
  metaTitle: 'Política de Privadesa | CyberSG',
  metaDesc:
    'Com tracta CyberSG les dades del formulari de contacte, Microsoft Clarity, Google Analytics i Google Search Console.',
  eyebrow: 'Legal',
  title: 'Política de Privadesa',
  lead: 'Aquesta política explica quines dades personals es recullen en fer servir aquest lloc web, per a què es recullen i quins drets tens.',
  updated: '2026-11-22',
  updatedDisplay: '22 de novembre de 2026',
  sections: [
    {
      id: 'controller',
      heading: '1. Responsable del tractament',
      blocks: [
        {
          kind: 'p',
          text: 'El responsable és CyberSG / Luis Salas, [NOM O RAÓ SOCIAL], amb RUC [RUC], domicili fiscal [DOMICILI FISCAL], [PAÍS]. Contacte: luis.salas@cybersg.dev.',
        },
        {
          kind: 'html',
          html: 'Pots exercir els teus drets i plantejar consultes a <a href="mailto:luis.salas@cybersg.dev">luis.salas@cybersg.dev</a>.',
        },
        {
          kind: 'p',
          text: 'Opero en remot. Les referències a Barcelona, Espanya en altres pàgines del lloc descriuen la meva base actual d’operació i no modifiquen les dades indicades a dalt.',
        },
      ],
    },
    {
      id: 'overview',
      heading: '2. Dades recollides i finalitat',
      blocks: [
        {
          kind: 'table',
          headers: ['Origen', 'Dades', 'Finalitat'],
          rows: [
            ['Formulari de contacte', 'Nom, empresa, correu, missatge, motiu, consentiment', 'Respondre a la teva consulta i gestionar un possible projecte'],
            ['Microsoft Clarity', 'Esdeveniments d’ús, enregistraments de sessió, mapes de calor, ubicació aproximada', 'Entendre l’ús del lloc i millorar l’experiència'],
            ['Google Analytics 4', 'Pàgines vistes, esdeveniments, dispositiu i ubicació aproximada', 'Mesurar l’audiència i el rendiment del lloc'],
            ['Google Search Console', 'Sense cookie de seguiment (verificació DNS)', 'Verificar la propietat i revisar el trànsit de cerca'],
            ['Registres tècnics', 'Adreça IP, navegador, agent d’usuari', 'Seguretat i funcionament bàsic del lloc'],
          ],
        },
      ],
    },
    {
      id: 'form',
      heading: '3. Formulari de contacte',
      blocks: [
        {
          kind: 'p',
          text: 'En enviar el formulari, els camps nom, empresa, correu, missatge, motiu i la casella de consentiment s’envien a l’automatització de Make i des d’allà a luis.salas@cybersg.dev. També es comprova un camp antispam ocult (honeypot); els usuaris reals el deixen buit.',
        },
        {
          kind: 'p',
          text: 'Aquest lloc no demana dades de pagament. Els pagaments de la prova i del projecte es fan directament per Yape o transferència bancària fora d’aquest lloc.',
        },
        {
          kind: 'p',
          text: 'Finalitat: respondre al teu missatge i, si escau, gestionar la relació contractual. Base jurídica: el teu consentiment i, quan correspongui, mesures precontractuals. Conservació: [TERMINI DE CONSERVACIÓ], llevat que demanis abans la seva supressió o la llei exigeixi un termini més llarg.',
        },
      ],
    },
    {
      id: 'clarity',
      heading: '4. Microsoft Clarity',
      blocks: [
        {
          kind: 'p',
          text: 'Aquest lloc carrega Microsoft Clarity (etiqueta uj1cldalzc) per enregistrar interaccions de sessió de manera seudonimitzada i generar mapes de calor. Pot instal·lar identificadors com _clck i _clsk i tractar ubicació aproximada i dades del dispositiu.',
        },
        {
          kind: 'p',
          text: 'Proveïdor: Microsoft. Finalitat: anàlisi i millora de l’experiència d’ús. Base jurídica: consentiment, sotmès a la implementació del banner de galetes indicada a la secció 8. Poden produir-se transferències internacionals a l’empara de [MECANISME DE TRANSFERÈNCIA]. Més informació a la declaració de privadesa de Microsoft.',
        },
      ],
    },
    {
      id: 'analytics',
      heading: '5. Google Analytics 4',
      blocks: [
        {
          kind: 'p',
          text: 'S’utilitza Google Analytics 4 per mesurar visites i interaccions. Pot instal·lar galetes com _ga i _gid, que identifiquen navegadors amb finalitats estadístiques.',
        },
        {
          kind: 'p',
          text: 'Proveïdor: Google. Finalitat: mesura d’audiència. Base jurídica: consentiment, sotmès a la secció 8. Google pot tractar dades fora del país a l’empara de [MECANISME DE TRANSFERÈNCIA]. Consulta la política de privadesa de Google per a més detalls.',
        },
      ],
    },
    {
      id: 'search-console',
      heading: '6. Google Search Console',
      blocks: [
        {
          kind: 'p',
          text: 'Search Console està vinculat mitjançant verificació DNS. No instal·la galetes de seguiment en aquest lloc i ofereix informació agregada sobre com apareix el lloc als resultats de cerca. El seu ús es basa en l’interès legítim de mantenir el lloc visible i funcionant correctament.',
        },
      ],
    },
    {
      id: 'cookies',
      heading: '7. Galetes utilitzades',
      blocks: [
        {
          kind: 'table',
          headers: ['Galeta', 'Proveïdor', 'Finalitat', 'Durada habitual', 'Tipus'],
          rows: [
            ['_clck', 'Microsoft Clarity', 'Conserva l’estat de la sessió', 'Fins a 1 any', 'Tercer'],
            ['_clsk', 'Microsoft Clarity', 'Relaciona esdeveniments de la sessió', 'Sessió / fins a 1 any', 'Tercer'],
            ['_ga', 'Google Analytics', 'Distingeix usuaris', 'Fins a 2 anys', 'Tercer'],
            ['_gid', 'Google Analytics', 'Distingeix usuaris durant un dia', '24 hores', 'Tercer'],
            ['—', 'Google Search Console', 'Només verificació DNS, sense galeta', 'Cap', '—'],
          ],
        },
        {
          kind: 'p',
          text: 'Les durades corresponen a valors habituals; confirma-les als panells de Google i Microsoft. Les galetes estrictament necessàries, si n’hi ha, no requereixen consentiment.',
        },
      ],
    },
    {
      id: 'consent',
      heading: '8. Consentiment per a analítica',
      blocks: [
        {
          kind: 'p',
          text: 'Clarity i Google Analytics no són essencials. La gestió del consentiment (banner de galetes i compatibilitat amb Consent Mode) està prevista com a millora posterior. Fins llavors, pots bloquejar o eliminar aquestes galetes des de la configuració del navegador.',
        },
        {
          kind: 'p',
          text: 'Pots retirar o atorgar el teu consentiment en qualsevol moment des del navegador o des del futur panell de preferències, sense que això afecti la licitud del tractament previ.',
        },
      ],
    },
    {
      id: 'recipients',
      heading: '9. Destinataris i transferències internacionals',
      blocks: [
        {
          kind: 'p',
          text: 'Les dades es comparteixen només amb els serveis necessaris per operar el lloc: Make (automatització del formulari, https://www.make.com), Microsoft (Clarity), Google (Analytics i Search Console) i el proveïdor de correu de luis.salas@cybersg.dev. Alguns d’aquests proveïdors poden tractar dades fora del teu país a l’empara de [MECANISME DE TRANSFERÈNCIA], com decisions d’adequació o clàusules contractuals estàndard.',
        },
      ],
    },
    {
      id: 'retention',
      heading: '10. Conservació',
      blocks: [
        {
          kind: 'p',
          text: 'Les dades del formulari es conserven durant [TERMINI DE CONSERVACIÓ]. Les dades analítiques es mantenen segons la configuració de cada proveïdor: [CONSERVACIÓ D’ANALÍTICA]. Quan deixen de ser necessàries, s’eliminen o s’anonimitzen.',
        },
      ],
    },
    {
      id: 'rights',
      heading: '11. Els teus drets',
      blocks: [
        {
          kind: 'p',
          text: 'Segons la normativa aplicable, pots demanar accés, rectificació, supressió, oposició, limitació del tractament i portabilitat de les teves dades, així com retirar el consentiment.',
        },
        {
          kind: 'p',
          text: 'Envia la teva sol·licitud a luis.salas@cybersg.dev. Respondré en un termini de [TERMINI DE RESPOSTA]. També pots presentar una reclamació davant [AUTORITAT DE CONTROL]. Si et trobes a la UE, el RGPD pot ser aplicable i pots reclamar davant l’autoritat de protecció de dades del teu país.',
        },
      ],
    },
    {
      id: 'children',
      heading: '12. Menors d’edat',
      blocks: [
        {
          kind: 'p',
          text: 'Aquest lloc no va dirigit a menors i no recullo conscientment dades de menors d’edat. Si consideres que un menor ha enviat dades, escriu-me perquè les elimini.',
        },
      ],
    },
    {
      id: 'security',
      heading: '13. Seguretat',
      blocks: [
        {
          kind: 'p',
          text: 'S’apliquen mesures tècniques i organitzatives raonables per protegir les dades. Cap sistema és completament segur, per la qual et recomano no enviar informació sensible a través del formulari.',
        },
      ],
    },
    {
      id: 'changes',
      heading: '14. Canvis en aquesta política',
      blocks: [
        {
          kind: 'p',
          text: 'Aquesta política pot actualitzar-se quan canviïn les eines del lloc o la normativa. La versió vigent és la publicada aquí amb la seva data d’última actualització.',
        },
        {
          kind: 'html',
          html: 'Consultes: <a href="mailto:luis.salas@cybersg.dev">luis.salas@cybersg.dev</a>.',
        },
      ],
    },
  ],
};

export const legalTerms: Record<Lang, LegalDoc> = {
  en: termsEn,
  es: termsEs,
  ca: termsCa,
};

export const legalPrivacy: Record<Lang, LegalDoc> = {
  en: privacyEn,
  es: privacyEs,
  ca: privacyCa,
};
