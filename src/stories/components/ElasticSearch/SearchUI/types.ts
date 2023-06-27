import type { SearchDriverOptions } from '@elastic/search-ui';
import { CarouselProps } from 'stories/components/Carousel/types';
import { CardProps } from 'stories/components/Generic/Card/types';

export type WriteUrlProps = {
  replaceUrl: string;
};

export interface SearchUIProps {
  title: string;
  config: SearchDriverOptions;
  sortOptions: SortOptions[];
  configFields: ConfigFields;
  carouselItems?: CarouselProps;
  facetsFields: FacetField[];
}

export interface FieldsItemResult {
  namePropComponent: string;
  namePropElasticSearch: string;
  customValue?: string;
  isPropArrayComponent?: boolean;
}

export interface ConfigFields {
  fields: FieldsItemResult[];
  modeCard?: CardProps['mode'];
}

export interface SortOptions {
  name: string;
  value: string;
  direction: string;
}

export interface FacetField {
  field: string;
  label: string;
}
