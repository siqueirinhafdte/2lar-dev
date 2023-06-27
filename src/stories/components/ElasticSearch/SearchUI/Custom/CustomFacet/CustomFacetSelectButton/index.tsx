import { SelectCircleButton } from 'components/SelectCircleButton';

import * as S from '../styles';
import { FacetViewProps } from '../types';
import { useCustomFacet } from '../useCustomFacet';

export function CustomFacetSelectButton({
  label,
  options,
  onRemove,
  onSelect,
  onChange
}: FacetViewProps) {
  const { getTextOption } = useCustomFacet();

  const optionsSelectButton = options.map((item) => {
    const text = getTextOption(item.value);
    return {
      label: text,
      value: item.value,
      valueText: text
    };
  });

  const selectedOptionValue = options.find((item) => item.selected)?.value;

  return (
    <S.Wrapper>
      <S.TitleFacet>{label}</S.TitleFacet>

      <S.WrapperOptions>
        <SelectCircleButton
          options={optionsSelectButton}
          value={selectedOptionValue}
          valueText={selectedOptionValue ? getTextOption(selectedOptionValue) : ''}
          color="inherit"
          onChange={(value) => {
            onChange(value);
            if (selectedOptionValue === value) {
              onRemove(value);
            } else {
              onSelect(value);
            }
          }}
        />
      </S.WrapperOptions>
    </S.Wrapper>
  );
}
