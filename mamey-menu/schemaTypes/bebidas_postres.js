export default {
  name: 'bebidaPostre',
  title: 'Bebidas y Postres',
  type: 'document',
  fields: [
    {
      name: 'order',
      title: 'Orden de aparición',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'nombre',
      title: 'Nombre',
      type: 'string',
    },
    {
      name: 'precio',
      title: 'Precio',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
    },
  ],
}