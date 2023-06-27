import { FilterValueRange, FacetValue } from '@elastic/search-ui';

export const useCustomFacet = () => {
  const getTextOption = (value: FacetValue['value']): string => {
    if (typeof value === 'object') {
      const selectedValue = value as FilterValueRange;
      return selectedValue?.name;
    }
    return String(value);
  };

  return {
    getTextOption
  };
};
