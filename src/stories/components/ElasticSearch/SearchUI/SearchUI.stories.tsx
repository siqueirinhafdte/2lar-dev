import type { Meta, StoryObj } from '@storybook/react';
import { mockCategories } from 'stories/components/Carousel/mockResult';

import { SearchUI } from './';
import { configSearchUI, configFields, sortOptions } from './mock';

const meta: Meta<typeof SearchUI> = {
  title: 'Elastic/SearchUI',
  component: SearchUI,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof SearchUI>;

export const Primary: Story = {
  args: {
    title: 'Games',
    config: configSearchUI,
    sortOptions: sortOptions,
    configFields,
    carouselItems: {
      data: mockCategories,
      slidesPerView: 10
    }
  }
};
