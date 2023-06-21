import { FC } from 'react';

import Link from 'next/link';
import { MenuVariant } from 'shared/enum';

import { IconLink } from '../IconLink';
import * as S from './styles';
import { MenuProps } from './types';
import { useMenu } from './useMenu';

export const Menu: FC<MenuProps> = ({
  menuItems = [],
  anchor,
  variant,
  buttonFooterMenu,
  colorIcon
}) => {
  const { isOpen, handleOpen, handleClose } = useMenu();

  return (
    <S.GridHeader item xs={1}>
      <S.MenuButton variant="outlined" onClick={handleOpen} colorIcon={colorIcon}>
        <S.MenuIcon fontSize="small" color={colorIcon} />
      </S.MenuButton>
      <S.MenuDrawer
        variant={variant}
        anchor={anchor}
        open={isOpen}
        onOpen={handleOpen}
        onClose={handleClose}
        transitionDuration={300}
      >
        <S.DrawerGrid>
          <S.ButtonWrapper>
            {variant !== MenuVariant.permanent && (
              <S.CloseDrawerButton variant="outlined" onClick={handleClose}>
                <S.CloseDrawerIcon fontSize="small" />
              </S.CloseDrawerButton>
            )}
          </S.ButtonWrapper>
          <S.ContentGrid item xs={12}>
            <S.MenuList>
              {menuItems.map((item) => (
                <S.WrapperLinkIcon key={item.id} onClick={() => handleClose()}>
                  {item.icon && <IconLink {...item.icon} />}
                  <S.MenuItem key={item.id} disablePadding isSelected={!!item.isSelected}>
                    <Link href={item.redirectLink}>
                      <S.TitleCategory primary={item.label} isSelected={!!item.isSelected} />
                    </Link>
                  </S.MenuItem>
                </S.WrapperLinkIcon>
              ))}
            </S.MenuList>
            {buttonFooterMenu && (
              <S.ButtonLogin onClick={() => buttonFooterMenu.onClick()}>
                {buttonFooterMenu?.label ?? 'Entrar'}
              </S.ButtonLogin>
            )}
          </S.ContentGrid>
        </S.DrawerGrid>
      </S.MenuDrawer>
    </S.GridHeader>
  );
};
