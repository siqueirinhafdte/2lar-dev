import { useListings } from 'hooks';
import { SearchUI } from 'stories/components';
import * as S from 'styles/listingsPageStyles';

export default function Listings() {
  const { data } = useListings('Sua fantástica segunda casa', undefined, true);
  return (
    <S.Wrapper>
      <SearchUI {...data} />
    </S.Wrapper>
  );
}
