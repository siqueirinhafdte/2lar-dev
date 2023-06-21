import React from 'react';

import { Meta, StoryFn } from '@storybook/react';
import { MenuAnchor, MenuVariant } from 'shared/enum';
import { Logger } from 'utils';

import { Menu } from '.';

const meta: Meta<typeof Menu> = {
  title: 'Header/Menu',
  component: Menu,
  tags: ['autodocs'],
  args: {
    anchor: MenuAnchor.left,
    variant: MenuVariant.persistent,
    menuItems: [
      {
        id: '1',
        redirectLink: '/anuncios',
        label: 'Anuncios'
      },
      {
        id: '2',
        redirectLink: '/locacoes',
        isSelected: true,
        label: 'Locações'
      },
      {
        id: '3',
        redirectLink: '/mensagens',
        label: 'Mensagens'
      },
      {
        id: '4',
        redirectLink: '/acessos',
        label: 'Acessos'
      }
    ],
    urlImgLogo: 'https://img.logoipsum.com/263.svg',
    username: 'gustavo.haramura@fdte.io',
    buttonFooterMenu: {
      onClick: () => Logger.info('entrar')
    }
  }
};

export default meta;

export const Standard: StoryFn<typeof Menu> = (args) => <Menu {...args} />;
