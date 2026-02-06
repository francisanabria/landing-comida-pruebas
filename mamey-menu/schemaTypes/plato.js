export default {
  name: 'plato',
  title: 'Plato',
  type: 'document',
  fields: [

   {
  name: 'order',
  title: 'Orden de aparición',
  type: 'number',
  description: 'Usa números (1 para el primero, 2 para el segundo, etc.)',
  initialValue: 0,
  }, 
 
  {
  name: 'countryIcon',
  title: 'Icono de País (Bandera)',
  type: 'image',
  options: {
    hotspot: true,
    },
  },

    {
      name: 'nombre',
      title: 'Nombre del plato',
      type: 'string',
    },
    {
      name: 'precio',
      title: 'Precio',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image',
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

    {
      name: 'vegetarianOption',
      title: '¿Es vegetariano?',
      type: 'boolean',
    },
  ],
}