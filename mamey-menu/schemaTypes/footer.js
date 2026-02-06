export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    // Columna 2: Contacto
    {
      name: 'contactTitle',
      title: 'Título Contacto (Columna 2)',
      type: 'string',
      initialValue: 'Footer',
    },
    {
      name: 'phoneNumber',
      title: 'Teléfono',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Dirección',
      type: 'string',
    },
    {
      name: 'whatsappLink',
      title: 'Enlace WhatsApp',
      type: 'url',
    },
    // Columna 3: Horarios
    {
      name: 'hoursTitle',
      title: 'Título Horarios (Columna 3)',
      type: 'string',
      initialValue: 'Öffnungszeiten',
    },
    {
      name: 'openingHours',
      title: 'Bloques de Horario',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Bloque',
          fields: [
            {
              name: 'label',
              title: 'Etiqueta (Verde)',
              type: 'string',
              description: 'Ej: Bestellzeiten',
            },
            {
              name: 'lines',
              title: 'Líneas de texto',
              type: 'array',
              of: [{type: 'string'}],
            },
            {
              name: 'note',
              title: 'Nota pequeña (opcional)',
              type: 'string',
              description: 'Aparece en gris y pequeño (ej: Mindestens 2h vor...)',
            },
          ],
        },
      ],
    },
  ],
}