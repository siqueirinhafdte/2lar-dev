export interface VisualHeaderControl {
  showComponent: {
    inputSearch: boolean;
    navLinks: boolean;
    buttonHeader: boolean;
    menuDrawer: boolean;
  };
  color: 'inherit' | 'primary' | 'secondary' | 'default';
}
