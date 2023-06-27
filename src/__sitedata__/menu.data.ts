export const menuData = [
  {
    id: '1',
    redirectLink: '/',
    label: 'Início'
  },
  {
    id: '2',
    redirectLink: '/listings',
    label: 'Imóveis'
  },
  {
    id: '3',
    redirectLink: '/how-it-works',
    label: 'Como funciona'
  },
  {
    id: '4',
    redirectLink: '/announce',
    label: 'Anunciar'
  },
  {
    id: '5',
    redirectLink: '/institutional/faq',
    label: 'Ajuda'
  }
];

export const footerData = {
  navLinks: [
    {
      title: 'Navegação',
      links: menuData
    },
    {
      title: 'Redes',
      links: [
        { id: '1', label: 'Instagram', redirectLink: '/' },
        { id: '2', label: 'Facebook', redirectLink: '/' },
        { id: '3', label: 'Twitter', redirectLink: '/' },
        { id: '4', label: 'LinkedIn', redirectLink: '/' }
      ]
    }
  ],
  textLogo: 'Temos mais de 8599 imóveis disponíveis para você',
  horizontalLinks: [
    {
      label: 'Termos de uso',
      redirectLink: '/institutional/terms-of-use'
    },
    {
      label: 'Politíca de Privacidade',
      redirectLink: '/institutional/privacy-policy'
    }
  ]
};
