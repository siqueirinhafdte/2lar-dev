import { useResponsive } from 'shared/hooks';
import { ImageComponent } from 'stories/components';

import * as S from './styles';
import { AtributtesCardProps } from './types';

export function AtributtesCard({
  primaryText,
  secondaryText,
  urlIcon,
  altIcon
}: AtributtesCardProps) {
  const { isMobile } = useResponsive();

  const widthImg = !isMobile ? 40 : 30;
  const heightImg = !isMobile ? 40 : 30;

  return (
    <S.Background>
      <S.Wrapper>
        <ImageComponent src={urlIcon} width={widthImg} height={heightImg} alt={altIcon} />
        <S.TextContainer>
          <S.PrimaryText>{primaryText}</S.PrimaryText>
          {isMobile ? null : <S.SecondaryText>{secondaryText}</S.SecondaryText>}
        </S.TextContainer>
      </S.Wrapper>
    </S.Background>
  );
}
