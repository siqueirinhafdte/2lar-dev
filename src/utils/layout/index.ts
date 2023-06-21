import { VisualHeaderControl } from './type';

export function getVisualControlHeaderByPage(
  pathname: string,
  isMobile: boolean
): VisualHeaderControl {
  const initialState: VisualHeaderControl = {
    showComponent: {
      inputSearch: false,
      navLinks: isMobile ? false : true,
      buttonHeader: isMobile ? false : true,
      menuDrawer: isMobile
    },
    color: 'inherit'
  };

  const firtsLevel = pathname.split('/')[1];

  switch (firtsLevel) {
    case 'posts':
      return initialState;
    case 'how-it-works':
      return {
        showComponent: initialState.showComponent,
        color: 'primary'
      };
    case 'listings':
    case 'search':
      return {
        showComponent: {
          inputSearch: true,
          navLinks: false,
          buttonHeader: false,
          menuDrawer: true
        },
        color: 'inherit'
      };
    default:
      return initialState;
  }
}
