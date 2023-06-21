import React from 'react';

import { Meta, StoryFn } from '@storybook/react';
import { Logger } from 'utils';

import { Footer } from '.';
import { navLinks } from './mockFooter';

const meta: Meta<typeof Footer> = {
  title: 'Layout/Footer',
  component: Footer,
  tags: ['autodocs']
};

export default meta;

export const Standard: StoryFn<typeof Footer> = (args) => {
  return (
    <Footer
      {...args}
      navLinks={navLinks}
      button={{
        label: 'Encontrar meu imóvel',
        onClick: () => Logger.info('encontrar')
      }}
      horizontalLinks={[
        {
          label: 'Termos de uso',
          redirectLink: '#'
        },
        {
          label: 'Politíca de Privacidade',
          redirectLink: '#'
        }
      ]}
      urlImg="https://img.logoipsum.com/263.svg"
      textLogo="Temos mais de 8599 imóveis disponíveis para você"
    />
  );
};
