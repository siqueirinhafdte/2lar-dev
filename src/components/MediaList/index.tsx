import { WrapperPage } from 'components/WrapperPage';
import Link from 'next/link';

import * as S from './styles';
import { MediaListProps } from './types';

export function MediaList({ items, title }: MediaListProps) {
  return (
    <WrapperPage>
      <S.Wrapper>
        <S.TitleContainer>
          <S.Title>{title.titlefirst}</S.Title>
          <S.Title>{title.titlelast}</S.Title>
        </S.TitleContainer>
        <S.ContainerMedia>
          {items.map((item) => (
            <S.ImgContainer key={item.alt}>
              <Link href={item.redirectLink}>
                <S.Image src={item.url} alt={item.alt} />
              </Link>
            </S.ImgContainer>
          ))}
        </S.ContainerMedia>
      </S.Wrapper>
    </WrapperPage>
  );
}
