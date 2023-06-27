import { useCallback, useContext, useState } from 'react';

import { Facet, PagingInfo } from '@elastic/react-search-ui';
import { PagingInfoViewProps } from '@elastic/react-search-ui-views';
import CloseIcon from '@mui/icons-material/Close';
import { SearchUICustonContext } from 'context/SearchUI';
import { Button } from 'stories/components/Forms';
import { ImageComponent } from 'stories/components/Image';
import { Modal } from 'stories/components/Modal';

import ClearAllFilters from '../ClearFilters';
import { CustomFacetCheckbox, CustomFacetSelectButton } from '../CustomFacet';
import * as S from './styles';

export const ModalFilters = () => {
  const [open, setOpen] = useState(false);
  const { facetsFields } = useContext(SearchUICustonContext);

  const filterIcon = (
    <ImageComponent width={16} height={16} src="/icons/filtro_mobile.svg" alt="ícone de filtro" />
  );

  const ButtonPaginInfo = useCallback(
    (props: PagingInfoViewProps) => {
      return (
        <Button size="large" onClick={() => setOpen(false)}>
          Mostrar {props.totalResults}
        </Button>
      );
    },
    [setOpen]
  );

  return (
    <>
      <Button startIcon={filterIcon} color="inherit" onClick={() => setOpen(true)}>
        Filtros
      </Button>
      <Modal open={open} closeModal={() => setOpen(false)}>
        <S.Wrapper>
          <S.HeaderModal>
            <S.IconButton aria-label="close" onClick={() => setOpen(false)}>
              <CloseIcon />
            </S.IconButton>
            <S.TitleModal variant="h6">Filtros</S.TitleModal>
          </S.HeaderModal>

          {facetsFields.map((item) => {
            const component =
              item.field === 'bedrooms' || item.field === 'baths'
                ? CustomFacetSelectButton
                : CustomFacetCheckbox;
            return (
              <Facet key={item.field} field={item.field} label={item.label} view={component} />
            );
          })}

          <S.WrapperFooterButtons>
            <ClearAllFilters />

            <PagingInfo view={ButtonPaginInfo} />
          </S.WrapperFooterButtons>
        </S.Wrapper>
      </Modal>
    </>
  );
};
