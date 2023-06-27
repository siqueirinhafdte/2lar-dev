import React, { useContext } from 'react';

import { Sorting } from '@elastic/react-search-ui';
import { SearchUICustonContext } from 'context/SearchUI';
import { Carousel } from 'stories/components/Carousel';

import { CustomSorting } from '../Custom/CustomSorting';
import { ModalFilters } from '../Custom/ModalFilters';
import * as S from './styles';
import { BodyHeaderProps } from './types';

export const BodyHeader = ({ title }: BodyHeaderProps) => {
  const { carouselItems, sortOptions } = useContext(SearchUICustonContext);

  return (
    <S.Wrapper>
      {carouselItems && (
        <S.WrapperCarousel>
          <Carousel {...carouselItems} />
        </S.WrapperCarousel>
      )}
      <S.WrapperHeader>
        <S.Title variant="h4">{title}</S.Title>
        <S.WrapperButtons>
          <Sorting sortOptions={sortOptions} view={CustomSorting} />
          <ModalFilters />
        </S.WrapperButtons>
      </S.WrapperHeader>
    </S.Wrapper>
  );
};
