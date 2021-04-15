const Images = [
  {image: require('../assets/banners/food-banner1.jpg')},
  {image: require('../assets/banners/food-banner2.jpg')},
  {image: require('../assets/banners/food-banner3.jpg')},
  {image: require('../assets/banners/food-banner4.jpg')},
  {image: require('../assets/banners/food-banner5.jpg')},
  {image: require('../assets/banners/food-banner6.jpg')},
];

export const data = [
    {
      id: '1',
      coordinate: {
        latitude: 22.6292757,
        longitude: 88.444781,
      },
      title: 'ร้านชาคุมะ',
      description: `ภายใน 30 นาที`,
      image: Images[4].image,
      rating: 4,
      reviews: 178,
      categories: ['Restaurant'],
    }
    ,
  {
    id: '2',
    coordinate: {
      latitude: 22.6345648,
      longitude: 88.4377279,
    },
    title: 'ข้าวแกงปักใต้',
    description: `ภายใน 30 นาที`,
    image: Images[1].image,
    rating: 5,
    reviews: 102,
    categories: ['Restaurant'],
  },
  {
    id: '3',
    coordinate: {
      latitude: 22.6281662,
      longitude: 88.4410113,
    },
    title: 'ชาบู จิ้บจิ้บ บาร์',
    description: `ภายใน 30 นาที`,
    image: Images[2].image,
    rating: 3,
    reviews: 220,
    categories: ['Restaurant'],
  },
  {
    id: '4',
    coordinate: {
      latitude: 22.6341137,
      longitude: 88.4497463,
    },
    title: 'ก๋วยเตี๋ยวทนาย',
    description: `ภายใน 30 นาที`,
    image: Images[3].image,
    rating: 4,
    reviews: 48,
    categories: ['Restaurant'],
  },
  {
    id: '5',
    coordinate: {
      latitude: 22.6293867,
      longitude: 88.4354486,
    },
    title: 'ชาเด็กช่าง',
    description: `ภายใน 30 นาที`,
    image: Images[5].image,
    rating: 4,
    reviews: 99,
    categories: ['Restaurant'],
  },
  {
    id: '6',
    coordinate: {
      latitude: 22.6293867,
      longitude: 88.4354486,
    },
    title: 'อาหารตามสั่ง',
    description: `ภายใน 30 นาที`,
    image: Images[0].image,
    rating: 4,
    reviews: 99,
    categories: ['Restaurant'],
  },
  {
    id: '7',
    coordinate: {
      latitude: 22.6345648,
      longitude: 88.4377279,
    },
    title: 'ข้าวแกงคนใต้',
    description: `ภายใน 30 นาที`,
    image: Images[1].image,
    rating: 5,
    reviews: 102,
    categories: ['Restaurant'],
  },
];
