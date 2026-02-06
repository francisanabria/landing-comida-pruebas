export default {
  name: 'galeria',
  title: 'Galería (Slider)',
  type: 'document',
  fields: [
    {
      name: 'order',
      title: 'Orden de aparición',
      type: 'number',
      initialValue: 0,
      description: 'Usa números (1, 2, 3...) para ordenar las fotos.',
    },
    {
      name: 'imagen',
      title: 'Imagen',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'alt',
      title: 'Descripción (Alt Text)',
      type: 'string',
      description: 'Breve descripción de la imagen (opcional).',
    },
  ],
}