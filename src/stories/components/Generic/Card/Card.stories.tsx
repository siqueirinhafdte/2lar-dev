import type { Meta, StoryObj } from '@storybook/react';
import { getCurrencyIntegerValue } from 'utils';

import { Card } from './';

const meta: Meta<typeof Card> = {
  title: 'Generic/Card',
  component: Card,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    title: 'Alameda Dourado',
    type: 'Casa',
    // urlImg: 'https://a0.muscache.com/im/pictures/67869304/c74c22df_original.jpg',
    images: [
      'https://a0.muscache.com/im/pictures/67869304/c74c22df_original.jpg',
      'https://a0.muscache.com/im/pictures/67869304/c74c22df_original.jpg'
    ],
    description: 'Jurerê internacional, Florianópolis',
    urlRedirect: 'https://google.com.br',
    price: {
      value: getCurrencyIntegerValue(852),
      description: 'p/ período'
    },
    mode: 'vertical',
    attributes: [
      {
        name: 'quartos',
        value: 1
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
};
