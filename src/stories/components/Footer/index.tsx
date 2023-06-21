import React, { FC } from 'react';

import { ImageComponent } from '../Image';
import { LinkGroup } from '../LinkGroup';
import * as S from './styles';
import { FooterProps } from './types';

export const Footer: FC<FooterProps> = ({
  navLinks = [],
  urlImg,
  textLogo,
  button,
  horizontalLinks
}) => {
  return (
    <S.Container container>
      <S.Wrapper>
        <S.WrapperCallToAction>
          <S.WrapperLogo>
            <ImageComponent alt="Logo" width={48} height={48} src={urlImg} />
            <S.TextLogo>{textLogo}</S.TextLogo>
          </S.WrapperLogo>
          <S.WrapperButton>
            <S.TitleCallToAction variant="h4">
              Alugue seu imóvel sem complicação 100% online e sem fiador
            </S.TitleCallToAction>
            {button && (
              <S.ButtonCTA color="inherit" onClick={() => button.onClick()}>
                {button.label}
              </S.ButtonCTA>
            )}
          </S.WrapperButton>
        </S.WrapperCallToAction>
        <S.LinkWrapper container>
          {navLinks.map((group) => (
            <LinkGroup key={group.title} links={group.links} title={group.title} />
          ))}
        </S.LinkWrapper>
      </S.Wrapper>
      {horizontalLinks && (
        <S.WrapperHorizontalLinks>
          <S.ContainerHorizontalLinks>
            {horizontalLinks.map((link) => (
              <S.HorizontalLink key={link.label} href={link.redirectLink}>
                {link.label}
              </S.HorizontalLink>
            ))}
          </S.ContainerHorizontalLinks>
        </S.WrapperHorizontalLinks>
      )}
    </S.Container>
  );
};
