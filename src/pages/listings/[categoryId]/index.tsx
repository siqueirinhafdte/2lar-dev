import { useListings } from 'hooks';
import { useSearchParams } from 'next/navigation';
import { SearchUI } from 'stories/components';
import * as S from 'styles/listingsPageStyles';

export default function CategoryId() {
  const searchParams = useSearchParams();

  const searchTerm = decodeURI(searchParams?.get('categoryId')?.toString() ?? '');

  const data = useListings({ titlePage: searchTerm ?? '', searchTerm, showCarousel: true });
  return (
    <S.Wrapper>
      <SearchUI {...data} />
    </S.Wrapper>
  );
}
