import React, { ReactElement } from 'react';

import { useResponsive } from 'shared/hooks';
import { ImageComponent } from 'stories/components';

import * as S from './styles';
import { EscapeRoutineProps } from './types';

export const EscapeRoutine = ({ dataTimeLine, urlImg }: EscapeRoutineProps): ReactElement => {
  const { isMobile } = useResponsive();

  const widthImg = !isMobile ? 525 : 365;
  const heightImg = !isMobile ? 730 : 542;

  return (
    <S.Wrapper>
      <S.Content>
        {isMobile && <S.Title variant="h2">Fuja da rotina em 3 passos</S.Title>}
        <S.WrapperImage>
          <ImageComponent alt="casa" width={widthImg} height={heightImg} src={urlImg} />
        </S.WrapperImage>
        <S.WrapperTimeLine>
          {!isMobile && <S.Title variant="h2">Fuja da rotina em 3 passos</S.Title>}

          <ul>
            {dataTimeLine.map((item, index) => (
              <S.TimeLineItemWrapper key={item.title} contentNumber={index + 1}>
                <S.TimeLineItemTitle variant="h3">{item.title}</S.TimeLineItemTitle>
                <S.TimeLineItemDescription>{item.description}</S.TimeLineItemDescription>
              </S.TimeLineItemWrapper>
            ))}
          </ul>
        </S.WrapperTimeLine>
      </S.Content>
    </S.Wrapper>
  );
};
