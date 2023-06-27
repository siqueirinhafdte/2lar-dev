import { useDispatch } from 'react-redux';

import { showSnackbar } from 'store/slices/snackbar';
import { getCurrencyIntegerValue } from 'utils';

import * as S from './styles';
import { ListingViewersProps } from './types';

export function ListingViewers({
  price,
  viewers,
  availablePeriod,
  redirectLink
}: ListingViewersProps) {
  const priceToBrl = `${getCurrencyIntegerValue(price)} p/ período`;

  const dispatch = useDispatch();
  return (
    <S.Wrapper>
      <S.ViewersDescription>
        {viewers} pessoas <span>viram esse anúncio nas últimas 24h</span>
      </S.ViewersDescription>
      <S.StyledDivider />
      <S.Price variant="h1">{priceToBrl}</S.Price>
      <S.AvailablePeriodDescription>
        {availablePeriod} períodos disponíveis{' '}
        <span> por uma temporada de 12 meses para este imóvel</span>
      </S.AvailablePeriodDescription>
      <S.ButtonLinkWrapper>
        <S.ButtonLink
          href={redirectLink}
          onClick={() => {
            dispatch(
              showSnackbar({ severity: 'info', message: 'Funcionalidade em desenvolvimento' })
            );
          }}
        >
          Escolher períodos
        </S.ButtonLink>
      </S.ButtonLinkWrapper>
    </S.Wrapper>
  );
}
