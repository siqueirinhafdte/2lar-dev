import { Meta, StoryFn } from '@storybook/react';
import { Logger } from 'utils';

import { MainContent } from '.';
import { Footer } from '../Footer';
import { navLinks } from '../Footer/mockFooter';
import { Header } from '../Header';

const meta: Meta<typeof MainContent> = {
  title: 'Generic/MainContent',
  component: MainContent
};

export default meta;

export const Standard: StoryFn<typeof MainContent> = (args) => {
  return (
    <>
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
      <MainContent {...args}>
        {' '}
        <h1>Content Here</h1>
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
    </>
  );
};
