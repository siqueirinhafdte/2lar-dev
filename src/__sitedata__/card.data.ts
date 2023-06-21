import { Mode } from 'stories/components/Generic/Card/types';
import { getCurrencyIntegerValue } from 'utils';

const bestPlaces = [
  {
    id: 'fd140ba3-9bef-451c-881c-a5e9b266d8f1',
    name: 'Alameda Dourado',
    type: 'Casa',
    address: {
      street: 'Jurerê Internacional',
      city: 'Florianópolis'
    },
    price: 858,
    attributes: {
      area: 587,
      bedrooms: 1,
      baths: 4
    },
    images: 'https://a0.muscache.com/im/pictures/67869304/c74c22df_original.jpg?im_w=1200'
  },
  {
    id: 'fa832cf5-fd2b-4aae-910d-63c74630a324',
    name: 'Alameda Dourado',
    type: 'Prédio Inteiro',
    address: {
      street: 'Ilha',
      city: 'Rio de Janeiro'
    },
    price: 858,
    attributes: {
      area: 587,
      bedrooms: 1,
      baths: 4
    },
    images:
      'https://a0.muscache.com/im/pictures/prohost-api/Hosting-26420648/original/2103da03-cf63-4c79-a3c5-a976ddc8e760.jpeg?im_w=1440'
  },
  {
    id: 'eb8e29a6-11a7-4b0b-a47d-0b38a1186b96',
    name: 'Alameda Dourado',
    type: 'Casa',
    address: {
      street: 'Jurerê Internacional',
      city: 'Florianópolis'
    },
    price: 858,
    attributes: {
      area: 587,
      bedrooms: 1,
      baths: 4
    },
    images:
      'https://a0.muscache.com/im/pictures/miso/Hosting-574462715333483320/original/c46e3888-5adc-4373-8bde-45bbf171ac13.jpeg?im_w=1200'
  },
  {
    id: '7fc1cb5c-cecd-42b0-be67-972d7a931a12',
    name: 'Alameda Dourado',
    type: 'Casa',
    address: {
      street: 'Jurerê Internacional',
      city: 'Florianópolis'
    },
    price: 858,
    attributes: {
      area: 587,
      bedrooms: 1,
      baths: 4
    },
    images:
      'https://a0.muscache.com/im/pictures/prohost-api/Hosting-26420648/original/2103da03-cf63-4c79-a3c5-a976ddc8e760.jpeg?im_w=1440'
  }
];

export const cardData = bestPlaces.map((place) => ({
  id: place.id,
  title: place.name,
  type: place.type,
  urlImg: place.images,
  description: `${place.address.street}, ${place.address.city}`,
  attributes: [
    {
      name: 'Quartos',
      value: place.attributes.bedrooms
    },
    {
      name: 'Banheiros',
      value: place.attributes.baths
    },
    {
      name: 'm² de área',
      value: place.attributes.area
    }
  ],
  price: {
    value: getCurrencyIntegerValue(place.price),
    description: 'p/ período'
  },
  mode: 'vertical' as Mode
}));
