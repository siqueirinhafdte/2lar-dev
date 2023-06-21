import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { WrapperPage } from 'components';
import { useResponsive } from 'shared/hooks';
import { showSnackbar } from 'store/slices/snackbar';
import { ImageComponent, InputText } from 'stories/components';

import * as S from './styles';

export function AnnounceForm() {
  const { isTablet } = useResponsive();
  const dispatch = useDispatch();

  const propsImg = useMemo(() => {
    if (isTablet) {
      return {
        urlImg: '/img/anunciar-1-mobile.png',
        widthImg: 375,
        heightImg: 150
      };
    }

    return {
      urlImg: '/img/anunciar-1.png',
      widthImg: 274,
      heightImg: 306
    };
  }, [isTablet]);

  return (
    <S.Wrapper>
      <WrapperPage>
        <S.Title variant="h2">Anuncie o seu imóvel sem burocracias</S.Title>

        <S.ContainerForm>
          <S.WrapperBoxForm>
            <S.BoxImage>
              <S.TitleBoxForm variant="h5">
                Alugue de forma rápida, segura e 100% online.
              </S.TitleBoxForm>
              <ImageComponent
                src={propsImg.urlImg}
                width={propsImg.widthImg}
                height={propsImg.heightImg}
                alt="Uma pessoa entregando as chaves para outra pessoa"
              />
            </S.BoxImage>
            <S.DescriptionBoxForm>
              E o melhor, o ano inteiro, fazendo você ter mais dinheiro no bolso
            </S.DescriptionBoxForm>
          </S.WrapperBoxForm>
          <S.WrapperForm>
            <S.TitleForm variant="h5">Comece por aqui</S.TitleForm>
            <S.Form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(
                  showSnackbar({ severity: 'info', message: 'Funcionalidade em desenvolvimento' })
                );
              }}
            >
              <InputText label="Nome" />
              <InputText label="E-mail" />
              <S.SubmitForm type="submit">Quero anunciar meu imóvel</S.SubmitForm>
            </S.Form>
          </S.WrapperForm>
        </S.ContainerForm>
      </WrapperPage>
    </S.Wrapper>
  );
}
