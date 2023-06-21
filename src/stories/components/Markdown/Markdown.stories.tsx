import type { Meta, StoryFn } from '@storybook/react';
import { Logger } from 'utils';

import { Footer } from '../Footer';
import { navLinks } from '../Footer/mockFooter';
import { Header } from '../Header';
import { MainContent } from '../MainContent';
import { Markdown } from './';
import { mdx } from './mockResult';

const meta: Meta<typeof Markdown> = {
  title: 'Markdown',
  component: Markdown,
  tags: ['autodocs']
};

export default meta;

export const Standard: StoryFn<typeof Markdown> = () => {
  return (
    <div>
      <Markdown children={mdx} />
    </div>
  );
};

export const Demo: StoryFn<typeof Markdown> = () => {
  return (
    <div>
      <Header
        button={{
          label: 'Entrar',
          onClick: function (): void {
            throw new Error('Function not implemented.');
          }
        }}
        showComponent={{
          buttonHeader: true,
          inputSearch: true,
          menuDrawer: true,
          navLinks: false
        }}
      />
      <MainContent>
        <Markdown children={mdx} />;
      </MainContent>
      <Footer
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
    </div>
  );
};
