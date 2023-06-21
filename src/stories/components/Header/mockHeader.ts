import { MenuAnchor } from 'shared/enum';
import { Logger } from 'utils';

import { MenuProps } from '../Menu/types';

export const propsInputSearch = {
  placeholder: 'Buscar por jogo: Final fantasy',
  searchKey: 'search-feodmjyfmqinygyb4u1y254k',
  engineName: 'video-games',
  endpointBase: 'https://host-2376rb.api.swiftype.com',
  onChange: Logger.info
};

export const menuItems = [
  {
    id: '1',
    redirectLink: '/listings',
    label: 'Anúncios'
  },
  {
    id: '2',
    redirectLink: '/form',
    label: 'Formulário de coisa'
  },
  {
    id: '3',
    redirectLink: '/static-page',
    label: 'Página estática'
  },
  {
    id: '4',
    redirectLink: '/',
    label: 'Notificações'
  },
  {
    id: '5',
    redirectLink: '/table',
    label: 'Tabela'
  }
];

export const menuProps: MenuProps = {
  anchor: MenuAnchor.left,
  menuItems: menuItems,
  urlImgLogo: 'https://img.logoipsum.com/263.svg',
  username: 'gustavo.haramura@fdte.io'
};

export const links = [
  { label: 'Início', redirectLink: '/' },
  { label: 'Anúncios', redirectLink: '/listings', isSelected: true },
  { label: 'Cadastro', redirectLink: '/register' }
];

export const button = {
  label: 'Entrar',
  onClick: () => Logger.info('botão clicado')
};
