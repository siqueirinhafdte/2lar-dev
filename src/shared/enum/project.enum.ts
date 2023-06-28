import { epilogue, inter } from 'assets/fonts';

export const ACCESS_TOKEN_KEY = '$2l_TOKEN';

export const project = {
  urlImgLogo: '/logo.png',
  urlImgLogoDarkBg: '/img/logo-completa-escura.png',
  urlImgLogoIcon: '/logo-icon.png',
  fontFamily: [
    inter.style.fontFamily,
    epilogue.style.fontFamily,
    'Arial',
    'Helvetica',
    'sans-serif'
  ].join(',')
};
