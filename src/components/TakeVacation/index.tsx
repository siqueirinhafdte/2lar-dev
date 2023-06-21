'use cliente';
import { useResponsive } from 'shared/hooks';

import { Button } from '../../stories/components/Forms';
import { ImageComponent } from '../../stories/components/Image';
import * as S from './styles';
import { TakeVacationProps } from './types';

export const TakeVacation = ({ title, cards, onClickHowItsWorksButton }: TakeVacationProps) => {
  const { isMobile } = useResponsive();

  const urlImgCTA = isMobile ? '/img/anunciar-1-mobile.png' : '/img/anunciar-1.png';

  const widthImgCTA = isMobile ? 375 : 340;
  const heightImgCTA = isMobile ? 150 : 304;

  return (
    <S.Wrapper>
      <S.Content>
        <S.Title variant="h3">{title}</S.Title>
        <S.WrapperCards>
          {cards.map((card) => (
            <S.Link key={card.title} href={card.redirectLink}>
              <S.TitleCard variant="h4">{card.title}</S.TitleCard>
              <ImageComponent alt={card.title} src={card.urlImg} width={355} height={192} />
            </S.Link>
          ))}
        </S.WrapperCards>
        <S.WrapperCardFooter>
          <ImageComponent alt="Chave" src={urlImgCTA} width={widthImgCTA} height={heightImgCTA} />
          <S.ContainerTextCardFooter>
            <S.ContentTextCardFooter>
              <S.TitleCardFooter variant="h5">
                Anuncie o seu imóvel sem burocracias
              </S.TitleCardFooter>
              <S.TextCardFooter>
                Alugue de seu imóvel de forma rápida, seguro e 100% online e consiga mais dinheiro
                no seu bolso
              </S.TextCardFooter>
              <Button onClick={() => onClickHowItsWorksButton()}>Como funciona</Button>
            </S.ContentTextCardFooter>
          </S.ContainerTextCardFooter>
        </S.WrapperCardFooter>
      </S.Content>
    </S.Wrapper>
  );
};
