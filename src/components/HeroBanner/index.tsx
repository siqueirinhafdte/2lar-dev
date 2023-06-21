'use client';

import { useResponsive } from 'shared/hooks';
import { ImageComponent } from 'stories/components';

import * as S from './styles';
import { HeroBannerProps } from './types';

export function HeroBanner({ title, subTitle, description, urlImg }: HeroBannerProps) {
  const { isMobile } = useResponsive();

  const widthImg = !isMobile ? 528 : 300;
  const heightImg = !isMobile ? 752 : 427;

  return (
    <S.Wrapper>
      <S.Title variant="h1">{title}</S.Title>
      <S.Container>
        <S.DescriptionContainer>
          <S.IconContainer>
            <ImageComponent src="/img/sorriso-circulo.svg" alt="sorriso" width={64} height={64} />
          </S.IconContainer>
          <S.SubTitle>{subTitle}</S.SubTitle>
          <S.Description>{description}</S.Description>
        </S.DescriptionContainer>
        <S.ContainerImage>
          <S.Image src={urlImg} alt="" width={widthImg} height={heightImg} />
        </S.ContainerImage>
      </S.Container>
    </S.Wrapper>
  );
}
