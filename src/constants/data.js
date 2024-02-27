import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | 750 ml',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | 500 ml',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Sprtiz',
    price: '$20',
    tags: 'Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Chocolate amargo | Slice of lime',
  },
  {
    title: 'Lemonade Mouth',
    price: '$10',
    tags: 'Citrico | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Distinción a la Excelencia Culinaria en Repostería Gourmet.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Premio a la Innovación Gastronómica en Postres Helados.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Galardón a la Maestría en Texturas y Sutilezas en Postres.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Reconocimiento a la Excelencia en Experiencia Sensorial en Alta Repostería.',
  },
];

export default { wines, cocktails, awards };
