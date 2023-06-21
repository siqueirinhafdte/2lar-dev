import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Header } from './index';
import { button, links, menuProps, propsInputSearch } from './mockHeader';

const header: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
  args: {
    urlImgLogo: 'https://img.logoipsum.com/263.svg',
    username: 'gustavo.haramura@fdte.io',
    links: links,
    menu: menuProps,
    button: button,
    search: propsInputSearch,
    showComponent: {
      buttonHeader: true,
      inputSearch: true,
      menuDrawer: true,
      navLinks: false
    }
  }
};

export default header;

export const Standard: StoryFn<typeof Header> = (args) => <Header {...args} />;
