import { ImageComponent } from 'stories/components';

import * as S from './styles';
import { AmenitiesProps } from './types';

export function AmenitiesCard({ amenities }: AmenitiesProps) {
  const widthIcon = 32;
  const heightIcon = 32;

  const amenitiesWithIcons = amenities.filter((amenity) => amenity.icon);
  const otherAmenities = amenities.filter((amenity) => !amenity.type);

  return (
    <S.Wrapper>
      <S.Title variant="h4">Destaques</S.Title>
      <S.CardGrid>
        {amenitiesWithIcons.map((amenity) => (
          <S.CardContainer key={amenity.name}>
            <S.IconContainer>
              <ImageComponent
                src={amenity.icon ?? ''}
                width={widthIcon}
                height={heightIcon}
                alt={`ícone de imagem ${amenity.name}`}
              />
            </S.IconContainer>
            <S.CardDescription>
              <S.CardTitle>{amenity.label}</S.CardTitle>
              <S.Description>{amenity.description}</S.Description>
            </S.CardDescription>
          </S.CardContainer>
        ))}
      </S.CardGrid>
      <S.Subtitle variant="h6">Outros</S.Subtitle>
      <S.SimpleAmenities>
        {otherAmenities.map((amenity) => (
          <S.ListContainer key={amenity.name}>{amenity.label}</S.ListContainer>
        ))}
      </S.SimpleAmenities>
    </S.Wrapper>
  );
}
