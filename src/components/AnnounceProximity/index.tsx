import Typography from '@mui/material/Typography';
import { useResponsive } from 'shared/hooks';
import { ImageComponent } from 'stories/components';

import * as S from './styles';
import { AnnounceProximityProps } from './types';

export function AnnounceProximity({ iconUrl, name, description, places }: AnnounceProximityProps) {
  const { isMobile } = useResponsive();

  const widthIcon = isMobile ? 60 : 70;
  const heightIcon = isMobile ? 60 : 70;

  function placeHandler() {
    if (places.length === 0) return ' ';
    else if (places.length === 1) return 'fica nessa região';
    else return 'ficam nessa região';
  }

  return (
    <S.Wrapper>
      <ImageComponent
        src={iconUrl}
        alt={`Icone de um ${name}`}
        width={widthIcon}
        height={heightIcon}
      />
      <S.TextContainer>
        <Typography variant="h6">{description}</Typography>
        <S.TextPlaces>
          {places.map((place, index) => {
            if (places.length === 1) {
              return <S.UnderlineText key={place}>{`${place}`} </S.UnderlineText>;
            }
            if (index === places.length - 1) {
              return (
                <S.LastPlace key={place}>
                  <S.Separator>e</S.Separator>
                  <S.UnderlineText>{place}</S.UnderlineText>
                </S.LastPlace>
              );
            } else if (index === places.length - 2) {
              return <S.UnderlineText key={place}>{place} </S.UnderlineText>;
            } else {
              return <S.UnderlineText key={place}>{`${place},`} </S.UnderlineText>;
            }
          })}

          <S.Places>{placeHandler()}</S.Places>
        </S.TextPlaces>
      </S.TextContainer>
    </S.Wrapper>
  );
}
