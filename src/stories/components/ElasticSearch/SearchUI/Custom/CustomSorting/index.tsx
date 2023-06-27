import { useCallback } from 'react';

import { SortingViewProps } from '@elastic/react-search-ui-views';
import { Select } from 'stories/components/Forms';

import * as S from './styles';

export const CustomSorting = ({ options, onChange, value }: SortingViewProps) => {
  const handleChange = useCallback(
    (selectedValue: string) => {
      if (onChange) {
        onChange(selectedValue);
      }
    },
    [onChange]
  );

  return (
    <S.Wrapper>
      <Select
        classNameWrapperSelect="select-sort"
        options={options}
        hasBorderRadius
        value={value}
        size="small"
        onChange={(e) => handleChange(String(e.target.value))}
      />
    </S.Wrapper>
  );
};
