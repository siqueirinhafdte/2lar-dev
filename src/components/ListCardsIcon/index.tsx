import { WrapperPage } from 'components/WrapperPage';

import { CardIcon } from './CardIcon';
import * as S from './styles';
import { ListCardsIconProps } from './types';

export function ListCardIcon({ listCardsIcon }: ListCardsIconProps) {
  return (
    <WrapperPage>
      <S.Wrapper>
        {listCardsIcon.map((cardIcon, index) =>
          index % 2 === 0 ? (
            <S.LeftCard key={cardIcon.description}>
              <CardIcon {...cardIcon} />
            </S.LeftCard>
          ) : (
            <S.RightCard key={cardIcon.description}>
              <CardIcon {...cardIcon} />
            </S.RightCard>
          )
        )}
      </S.Wrapper>
    </WrapperPage>
  );
}
