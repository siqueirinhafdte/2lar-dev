import { FieldValue } from '@elastic/search-ui';
import { Button, Checkbox } from 'stories/components/Forms';

import * as S from '../styles';
import { FacetViewProps } from '../types';
import { useCustomFacet } from '../useCustomFacet';

export function CustomFacetCheckbox({
  label,
  options,
  showMore,
  onMoreClick,
  onRemove,
  onSelect,
  onChange
}: FacetViewProps) {
  const { getTextOption } = useCustomFacet();

  const title = label === 'Comodidades' ? '' : label;

  return (
    <S.Wrapper>
      <S.TitleFacet>{title}</S.TitleFacet>

      <S.WrapperOptions>
        {options.map((option) => {
          const checked = option.selected;
          const value = option.value as FieldValue;
          const textOption = getTextOption(option.value);
          return (
            <Checkbox
              key={textOption}
              label={textOption}
              checked={checked}
              name={label}
              id={label}
              onChange={() => {
                onChange(value);

                if (checked) {
                  onRemove(value);
                } else {
                  onSelect(value);
                }
              }}
            />
          );
        })}
      </S.WrapperOptions>

      {showMore && (
        <Button variant="text" onClick={onMoreClick} size="small">
          Ver mais
        </Button>
      )}
    </S.Wrapper>
  );
}
