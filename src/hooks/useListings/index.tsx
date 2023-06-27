import type { SearchDriverOptions, FacetConfiguration } from '@elastic/search-ui';
import AppSearchAPIConnector from '@elastic/search-ui-app-search-connector';
import SearchUIConnector from 'services/searchUI';
import { useResponsive } from 'shared/hooks';
import { FilterOptions } from 'shared/types/api/filterOptions';
import { ImageComponent } from 'stories/components';
import { FacetField, SearchUIProps } from 'stories/components/ElasticSearch/SearchUI/types';
import {
  categoriesCarousel,
  configFieldsElasticSearch,
  filtersElastic,
  sortOptionsDefault
} from 'utils';

import { FacetByFilters, UseListingsProps } from './types';

export const useListings = ({ titlePage, searchTerm, showCarousel }: UseListingsProps) => {
  const { facets, facetsFields } = getFacetsByFilters();
  const congigSearchUI = getCongigSearchUI(searchTerm, facets);
  const dataCarousel = getDataCarousel();
  const { isMobile, isTablet } = useResponsive();

  const title =
    categoriesCarousel.find((item) => item.categoryId === titlePage)?.label ?? titlePage;

  const data: SearchUIProps = {
    title,
    config: congigSearchUI,
    configFields: configFieldsElasticSearch,
    sortOptions: sortOptionsDefault,
    facetsFields,
    carouselItems: showCarousel
      ? {
          data: dataCarousel,
          slidesPerView: getSlidesPerViewByScreenSize(isMobile, isTablet)
        }
      : undefined
  };

  return data;
};

const reduceFilters = (
  filterField:
    | FilterOptions['attributes']
    | FilterOptions['locations']
    | FilterOptions['amenities'],
  facetsFields: FacetField[]
) => {
  return filterField.reduce((acc, curr) => {
    const { label, field, ...rest } = curr;
    facetsFields.push({
      field,
      label
    });

    return {
      ...acc,
      [field]: rest
    };
  }, {});
};

const getFacetsByFilters = (): FacetByFilters => {
  const facetsFields: FacetField[] = [];

  const filtersLocations = reduceFilters(filtersElastic.locations, facetsFields);

  const filtersAttributes = reduceFilters(filtersElastic.attributes, facetsFields);

  const filtersAmenities = reduceFilters(filtersElastic.amenities, facetsFields);

  const facets: Record<string, FacetConfiguration> = {
    ...filtersLocations,
    ...filtersAttributes,
    ...filtersAmenities
  };

  return {
    facets,
    facetsFields
  };
};

const getCongigSearchUI = (
  searchTerm?: string,
  facets?: Record<string, FacetConfiguration>
): SearchDriverOptions => {
  const connector = new SearchUIConnector();

  const congigSearchUI: SearchDriverOptions = {
    apiConnector: connector as AppSearchAPIConnector,
    initialState: {
      searchTerm: searchTerm ? searchTerm : ' '
    },
    searchQuery: {
      facets
    }
  };

  return congigSearchUI;
};

const getDataCarousel = () => {
  return categoriesCarousel.map((item) => ({
    ...item,
    icon: <ImageComponent src={item.iconPath} alt={item.label} width={32} height={32} />
  }));
};

const getSlidesPerViewByScreenSize = (isMobile: boolean, isTablet: boolean) => {
  if (isMobile) return 3;
  if (isTablet) return 5;
  return 11;
};
