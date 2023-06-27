import { useState, useEffect, useCallback } from 'react';

import { SelectCircleButton } from 'components/SelectCircleButton';
import { WrapperPage } from 'components/WrapperPage';
import { getSimulatorData } from 'services/listing';
import { Simulator } from 'shared/types/api/simulator';
import { InputNumber } from 'stories/components';
import { getCurrencyIntegerValue } from 'utils';

import * as S from './styles';
import { RentSimulatorProps, SimulatorComponent } from './types';

export const RentSimulator = ({ listingId }: RentSimulatorProps) => {
  const [rentSimulator, setRentSimulator] = useState<Simulator>({
    days: 1,
    total: 100,
    price: { day: 1, period: 1 }
  });
  const [simulator, setSimulator] = useState<SimulatorComponent>({ maxGuest: 1, maxPeriod: 1 });

  const handleChangeSimulator = useCallback(
    (payload: SimulatorComponent) => {
      getSimulatorData(listingId, payload?.maxGuest, payload?.maxPeriod).then((resp) => {
        if (resp) {
          setRentSimulator(resp);
        }
      });
    },
    [listingId]
  );

  const handleMaxGuestChange = (value: number) => {
    setSimulator((prevSimulator) => ({
      ...prevSimulator,
      maxGuest: value
    }));
  };

  const handleMaxPeriodChange = (value: number) => {
    setSimulator((prevSimulator) => ({
      ...prevSimulator,
      maxPeriod: value
    }));
  };

  useEffect(() => {
    handleChangeSimulator(simulator);
  }, [handleChangeSimulator, simulator]);

  const periodOptions = Array.from({ length: 8 }, (_, index) => ({
    label: `${index + 1}`,
    value: index + 1
  }));

  return (
    <WrapperPage>
      <S.Wrapper>
        <S.Title variant="h3">Simulador de aluguel</S.Title>
        <S.Subtitle variant="h6">
          Dividir o aluguel com seus familiares ou amigos é muito mais barato.
        </S.Subtitle>
        <S.Subtitle variant="h6">Preencha as informações para calcular.</S.Subtitle>
        <S.Container>
          <S.ContainerForm>
            <S.ContentBox>
              <S.QuestionDivideOne variant="h6">Você quer dividir</S.QuestionDivideOne>
              <S.QuestionDivideSecond variant="h6">entre quantas pessoas?</S.QuestionDivideSecond>
              <S.MaxGuestContainer>
                <InputNumber defaultValue={1} maxValue={8} onChange={handleMaxGuestChange} />
                <S.MaxGuestText>Máximo {simulator?.maxGuest}</S.MaxGuestText>
              </S.MaxGuestContainer>
            </S.ContentBox>
            <S.ContentBox>
              <S.Question variant="h6">Por quantos períodos você quer alugar?</S.Question>
              <SelectCircleButton
                showValuesSelected="previous-values"
                options={periodOptions}
                value={simulator?.maxPeriod}
                onChange={handleMaxPeriodChange}
              />
            </S.ContentBox>
          </S.ContainerForm>
          <S.ContainerResult>
            <S.BoxDays>
              <S.BoxText>Total de {rentSimulator?.days} dias</S.BoxText>
              <S.ValueResult>
                {getCurrencyIntegerValue(Number(rentSimulator.price?.day ?? 0))} por dia pra cada
              </S.ValueResult>
            </S.BoxDays>

            <S.BoxResult>
              <S.ValueResult>
                Apenas {getCurrencyIntegerValue(Number(rentSimulator?.total ?? 0))} por pessoa
              </S.ValueResult>
            </S.BoxResult>

            <S.BoxDescription>
              <S.SimulatorDescription>Estes valores são representativos.</S.SimulatorDescription>
              <S.SimulatorDescription>
                A divisão você deve fazer no meio de pagamento ou pessoalmente.
              </S.SimulatorDescription>
            </S.BoxDescription>
          </S.ContainerResult>
        </S.Container>
      </S.Wrapper>
    </WrapperPage>
  );
};
