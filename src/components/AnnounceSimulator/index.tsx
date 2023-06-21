import { WrapperPage } from 'components/WrapperPage';

import * as S from './styles';

export const AnnounceSimulator = () => {
  return (
    <WrapperPage>
      <S.Wrapper>
        <S.Title variant="h3">Simule quanto você vai receber com seu imóvel</S.Title>

        <S.Container>
          <S.ContainerForm>
            <S.TitleBox variant="h5">Objetivo</S.TitleBox>
            <S.ContentBox>
              <S.Question>Quanto você</S.Question>
              <S.Question>Quer ganhar por mês?</S.Question>
              <S.Field label="" placeholder="Ex: 800,00" variant="standard" mask="currency" />

              <S.DescriptionForm>Este valor já deve incluir despesas como:</S.DescriptionForm>
              <S.DescriptionForm>água, luz, condomínio, etc.</S.DescriptionForm>
            </S.ContentBox>
          </S.ContainerForm>
          <S.ContainerResult>
            <S.TitleBox variant="h5">Ganhos</S.TitleBox>

            <S.BoxResult>
              <S.ValueResult>R$ 0,00</S.ValueResult>
              <S.MonthResult>em 12 meses</S.MonthResult>
            </S.BoxResult>

            <S.BoxResult>
              <S.OcupantValue>R$ 0,00</S.OcupantValue>
              <S.OcupantDescription>O locatário pagará por período</S.OcupantDescription>
              <S.OcupantDescription>(são 8 ao total)</S.OcupantDescription>
            </S.BoxResult>
          </S.ContainerResult>
        </S.Container>
      </S.Wrapper>
    </WrapperPage>
  );
};
