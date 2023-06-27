import * as S from './styles';
import { DescriptionListingProps } from './types';

export const DescriptionListing = ({ description }: DescriptionListingProps) => {
  return (
    <S.Wrapper>
      <S.Title variant="h4">Sobre este imóvel</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  );
};
