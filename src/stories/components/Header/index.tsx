import React from 'react';

import { Logo } from 'components';

import { InputSearchElastic } from '../ElasticSearch';
import { Menu } from '../Menu';
import * as S from './styles';
import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = ({
  urlImgLogo,
  urlImgLogoDarkBg,
  links,
  button,
  menu,
  search,
  color = 'inherit',
  showComponent
}) => {
  return (
    <S.Wrapper>
      <S.AppBar position="static" color={color}>
        <S.ToolbarHeader>
          <S.Main>
            {(urlImgLogo || urlImgLogoDarkBg) && (
              <S.WrapperLogo>
                <Logo
                  urlImg={color === 'primary' ? urlImgLogoDarkBg ?? '' : urlImgLogo ?? ''}
                  redirectLink="/"
                />
              </S.WrapperLogo>
            )}
            <S.Content>
              {showComponent.inputSearch && search && (
                <S.WrapperInputSearch>
                  <InputSearchElastic {...search} className="search-header" />
                </S.WrapperInputSearch>
              )}
              {showComponent.navLinks && links && (
                <S.ContainerNavLinks>
                  {links?.map((link) => (
                    <S.LinkHeader
                      key={link.label}
                      href={link.redirectLink}
                      isSelected={!!link.isSelected}
                      colorHeader={color}
                    >
                      {link.label}
                    </S.LinkHeader>
                  ))}
                </S.ContainerNavLinks>
              )}
              <S.WrapperButtons>
                {showComponent.buttonHeader && (
                  <S.WrapperButton>
                    <S.ButtonHeader
                      colorHeader={color}
                      variant="outlined"
                      size="large"
                      onClick={button.onClick}
                    >
                      {button.label}
                    </S.ButtonHeader>
                  </S.WrapperButton>
                )}
                {showComponent.menuDrawer && menu && (
                  <S.WrapperMenu>
                    <Menu {...menu} colorIcon={color === 'primary' ? 'disabled' : undefined} />
                  </S.WrapperMenu>
                )}
              </S.WrapperButtons>
            </S.Content>
          </S.Main>
        </S.ToolbarHeader>
      </S.AppBar>
    </S.Wrapper>
  );
};
