export default {
  name: 'horario',
  title: 'Tarjetas de Información (Horario)',
  type: 'document',
  fields: [
    {
      name: 'order',
      title: 'Orden',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'title',
      title: 'Título de la Tarjeta',
      type: 'string',
      description: 'Ej: "Horarios de Pedido"',
    },
    {
      name: 'tabId',
      title: 'ID de la Pestaña',
      type: 'string',
      description: 'Debe coincidir con el data-target del botón (ej: "tab-calendar")',
    },
    {
      name: 'details',
      title: 'Detalles (Lista)',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Cada entrada es una línea en la lista.',
    },
    {
      name: 'isPrimary',
      title: '¿Es la tarjeta principal (verde)?',
      type: 'boolean',
      description: 'Si se activa, la tarjeta del medio se resaltará en verde.',
    },
    {
      name: 'icon',
      title: 'Ruta del Icono SVG',
      type: 'text',
      description: 'Pega solo el contenido del atributo "d" (ej: M12 6v...).',
    },
  ],
}