import { useResponsive } from 'shared/hooks';
import { ImageComponent } from 'stories/components';

import * as S from './style';
import { CardIconProps } from './types';

export function CardIcon({ urlIcon, title, description }: CardIconProps) {
  const { isMobile } = useResponsive();

  const widthIcon = !isMobile ? 112 : 80;
  const heightIcon = !isMobile ? 112 : 80;
  return (
    <S.Wrapper>
      <S.IconContainer>
        <ImageComponent src={urlIcon} width={widthIcon} height={heightIcon} alt="" />
      </S.IconContainer>

      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  );
}
