import type { Meta, StoryObj } from '@storybook/react';

import { CardsGrid } from '.';
import { cardsGridData } from './mockCardsGrid';

const meta: Meta<typeof CardsGrid> = {
  title: 'Generic/CardsGrid',
  component: CardsGrid,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof CardsGrid>;

export const Primary: Story = {
  args: {
    title: 'Encontre imóveis nas melhores localizações',
    cards: cardsGridData,
    buttonTitle: 'Encontrar meu imóvel'
  }
};
