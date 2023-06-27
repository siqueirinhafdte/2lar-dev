import { useDispatch } from 'react-redux';

import { useResponsive } from 'shared/hooks';
import { showSnackbar } from 'store/slices/snackbar';
import { ImageComponent } from 'stories/components';
import { getCurrencyIntegerValue } from 'utils';

import * as S from './styles';
import { HeaderPostProps } from './types';

export function HeaderPost({ name, district, city, price }: HeaderPostProps) {
  const priceBr = `${getCurrencyIntegerValue(price)} p/ período`;
  const Address = `${district}, ${city}`;

  const { isMobile } = useResponsive();

  const widthIcon = !isMobile ? 30 : 25;
  const heightIcon = !isMobile ? 30 : 25;

  const dispatch = useDispatch();

  return (
    <S.Wrapper>
      <S.BoxTitle>
        <S.Title variant="h1">{name}</S.Title>
        <S.AddressContainer>
          <S.Address>{Address}</S.Address>
          <S.Price>{priceBr}</S.Price>
        </S.AddressContainer>
      </S.BoxTitle>
      <S.InformationContainer>
        <S.ButtonsContainer>
          <S.FavoriteButtonContainer>
            <ImageComponent
              src="/icons/coracao-mini.svg"
              alt="pequeno coração"
              width={widthIcon}
              height={heightIcon}
            />

            <S.FavoriteButton
              href=""
              onClick={() => {
                dispatch(
                  showSnackbar({ severity: 'info', message: 'Funcionalidade em desenvolvimento' })
                );
              }}
            >
              Favoritar
            </S.FavoriteButton>
          </S.FavoriteButtonContainer>
          <S.ShareButtonContainer>
            <ImageComponent
              src="/icons/link-mini.svg"
              alt="pequeno simbolo de compartilhar"
              width={widthIcon}
              height={heightIcon}
            />
            <S.ShareButton
              href=""
              onClick={() => {
                dispatch(
                  showSnackbar({ severity: 'info', message: 'Funcionalidade em desenvolvimento' })
                );
              }}
            >
              Compartilhar
            </S.ShareButton>
          </S.ShareButtonContainer>
        </S.ButtonsContainer>
      </S.InformationContainer>
    </S.Wrapper>
  );
}
