import React from 'react';

import { Card } from '../Card';
import * as S from './styles';
import { CardGridProps } from './types';

export const CardsGrid = ({ cards, title, buttonTitle }: CardGridProps) => {
  return (
    <S.WrapperComponent>
      <S.Container>
        <S.TitleWrapper>
          <S.Title>{title}</S.Title>
        </S.TitleWrapper>
        <S.Wrapper>
          {cards.map((card, index) => {
            return (
              <S.StyledCard index={index} key={card.title}>
                <Card {...card} />
              </S.StyledCard>
            );
          })}
        </S.Wrapper>
        <S.ButtonLinkWrapper>
          <S.ButtonLink href={'/listings'}>{buttonTitle}</S.ButtonLink>
        </S.ButtonLinkWrapper>
      </S.Container>
    </S.WrapperComponent>
  );
};
