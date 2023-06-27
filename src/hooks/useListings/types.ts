import type { FacetConfiguration } from '@elastic/search-ui';
import { FacetField } from 'stories/components/ElasticSearch/SearchUI/types';

export interface UseListingsProps {
  titlePage: string;
  searchTerm?: string;
  showCarousel?: boolean;
}

export interface FacetByFilters {
  facets: Record<string, FacetConfiguration>;
  facetsFields: FacetField[];
}
