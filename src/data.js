export const restaurant = {
  name: 'La Oriental Sushi',
  phone: '+52 33 3807 9519',
  whatsappNumber: '523338079519',
  address: 'Guardia Nacional 2536-interior J, Santa Ana, 45066 Guadalajara, Jal.',
  mapsUrl:
    'https://www.google.com/maps/place/La+Oriental+Sushi/@20.6250287,-103.4649417,17z/data=!3m1!4b1!4m6!3m5!1s0x8428abd4aed48569:0x4d0a6226bd6b8958!8m2!3d20.6250287!4d-103.4649417!16s%2Fg%2F11vm4s8b0l?authuser=0&entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D',
  rating: '4.5',
  reviews: '0',
  hours: 'Horario de atención',
};

export const whatsappUrl = `https://wa.me/${restaurant.whatsappNumber}?text=${encodeURIComponent(
  'Hola, quiero pedir o reservar en La Oriental Sushi.'
)}`;

export const menuItems = [
  {
    title: 'Roll Oriental Flame',
    description: 'Rollo empanizado con kanikama, queso crema, aguacate y salsa spicy de la casa.',
    price: '$149',
    tag: 'Favorito',
  },
  {
    title: 'Yakimeshi Especial',
    description: 'Arroz salteado estilo oriental con verduras, proteína y toque de ajonjolí.',
    price: '$129',
    tag: 'Clásico',
  },
  {
    title: 'Combo Tokyo Duo',
    description: 'Selección para compartir: rollo, entrada caliente y dos bebidas.',
    price: '$289',
    tag: 'Para 2',
  },
  {
    title: 'Gyozas Doradas',
    description: 'Entrada crujiente con relleno jugoso y salsa ponzu cítrica.',
    price: '$95',
    tag: 'Entrada',
  },
];

export const specialties = [
  'Sushi preparado al momento',
  'Sabores orientales para llevar',
  'Pedidos rápidos por WhatsApp',
  'Ubicación fácil en Santa Ana',
];
