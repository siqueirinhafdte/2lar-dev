import { getCurrencyIntegerValue } from 'utils';

import { Mode } from '../Card/types';

export const cardsGridData = [
  {
    id: 'fd140ba3-9bef-451c-881c-a5e9b266d8f1',
    title: 'Alameda Dourado',
    type: 'Casa',
    urlImg: 'https://a0.muscache.com/im/pictures/67869304/c74c22df_original.jpg?im_w=1200',
    description: 'Jurerê internacional, Florianópolis',
    urlRedirect: 'https://google.com.br',
    price: {
      value: getCurrencyIntegerValue(852),
      description: 'p/ período'
    },
    mode: 'vertical' as Mode,
    attributes: [
      {
        name: 'quartos',
        value: 5
      },
      {
        name: 'm² de área',
        value: 587
      },
      {
        name: 'banheiros',
        value: 3
      }
    ]
  },
  {
    id: 'fa832cf5-fd2b-4aae-910d-63c74630a324',
    title: 'Angra dos Reis',
    type: 'Casa',
    urlImg:
      'https://a0.muscache.com/im/pictures/97727276-2759-4926-8bae-e97f4787de65.jpg?im_w=1440',
    description: 'Ilha, Rio de Janeiro',
    urlRedirect: 'https://google.com.br',
    price: {
      value: getCurrencyIntegerValue(1500),
      description: 'p/ período'
    },
    mode: 'vertical' as Mode,
    attributes: [
      {
        name: 'quartos',
        value: 2
      },
      {
        name: 'm² de área',
        value: 587
      },
      {
        name: 'banheiros',
        value: 2
      }
    ]
  },
  {
    id: 'eb8e29a6-11a7-4b0b-a47d-0b38a1186b96',
    title: 'Monte Alto',
    type: 'Casa',
    urlImg:
      'https://a0.muscache.com/im/pictures/miso/Hosting-574462715333483320/original/c46e3888-5adc-4373-8bde-45bbf171ac13.jpeg?im_w=1200',
    description: 'Monte Alto, Rio de Janeiro',
    urlRedirect: 'https://google.com.br',
    price: {
      value: getCurrencyIntegerValue(1600),
      description: 'p/ período'
    },
    mode: 'vertical' as Mode,
    attributes: [
      {
        name: 'quartos',
        value: 3
      },
      {
        name: 'm² de área',
        value: 200
      },
      {
        name: 'banheiros',
        value: 2
      }
    ]
  },
  {
    id: '7fc1cb5c-cecd-42b0-be67-972d7a931a12',
    title: 'Copacabana',
    type: 'Apartamento',
    urlImg:
      'https://a0.muscache.com/im/pictures/prohost-api/Hosting-26420648/original/2103da03-cf63-4c79-a3c5-a976ddc8e760.jpeg?im_w=1440',
    description: 'Rua Ministro Viveiros de Castro, Rio de Janeiro',
    urlRedirect: 'https://google.com.br',
    price: {
      value: getCurrencyIntegerValue(2000),
      description: 'p/ período'
    },
    mode: 'vertical' as Mode,
    attributes: [
      {
        name: 'quartos',
        value: 2
      },
      {
        name: 'm² de área',
        value: 587
      },
      {
        name: 'banheiros',
        value: 2
      }
    ]
  }
];
