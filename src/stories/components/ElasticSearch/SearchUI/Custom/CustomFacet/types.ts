import { FacetValue, FieldValue } from '@elastic/search-ui';

export type FacetViewProps = {
  className?: string;
  label: string;
  options: FacetValue[];
  showMore: boolean;
  onMoreClick: () => void;
  onRemove: (value: FieldValue) => void;
  onChange: (value: FieldValue) => void;
  onSelect: (value: FieldValue) => void;
};
