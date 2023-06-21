import { WrapperPage } from 'components/WrapperPage';
import { ImageComponent } from 'stories/components';

import * as S from './styles';

export const Renting2LarFaster = () => {
  return (
    <S.Wrapper>
      <WrapperPage>
        <S.WrapperCollumns>
          <S.CollumnLeft>
            <S.Title variant="h2">
              Alugar na 2lar é muito mais rápido e seu imóvel é visto por milhares de pessoas todos
              os dias.
            </S.Title>
            <ImageComponent
              alt="Um grupo de 5 pessoas cada um olhando para o próprio celular"
              src="/img/informacoes.jpg"
              width={548}
              height={337}
            />
          </S.CollumnLeft>
          <S.CollumnRight>
            <S.BoxTitleDescription>
              <S.Subtitle variant="h4">Inovação no sistema de aluguel de imóveis</S.Subtitle>
              <S.Description>
                É a maneira moderna e descomplicada de alugar e realizar o sonho da segunda casa
              </S.Description>
            </S.BoxTitleDescription>
            <S.BoxTitleDescription>
              <S.Subtitle variant="h4">Pagamento garantido todo dia 8 do mês</S.Subtitle>
              <S.Description>
                Imóveis com administração recebem todo dia 8, mesmo que o inquilino atrase
              </S.Description>
            </S.BoxTitleDescription>
          </S.CollumnRight>
        </S.WrapperCollumns>
      </WrapperPage>
    </S.Wrapper>
  );
};
