import React, { createContext } from 'react';

import { CarouselProps } from 'stories/components/Carousel/types';
import {
  ConfigFields,
  FacetField,
  SortOptions
} from 'stories/components/ElasticSearch/SearchUI/types';
import { CardProps } from 'stories/components/Generic/Card/types';

interface SearchUIContextProps {
  configFields?: ConfigFields;
  carouselItems?: CarouselProps;
  modeView?: CardProps['mode'];
  sortOptions: SortOptions[];
  facetsFields: FacetField[];
}

const INITIAL_STATE: SearchUIContextProps = {
  configFields: undefined,
  sortOptions: [],
  facetsFields: []
};

export const SearchUICustonContext = createContext<SearchUIContextProps>(INITIAL_STATE);

interface SearchUIProviderProps {
  children: React.ReactNode;
  configFields: ConfigFields;
  carouselItems?: CarouselProps;
  modeView?: CardProps['mode'];
  sortOptions: SortOptions[];
  facetsFields: FacetField[];
}

export const SearchUICustomProvider = ({
  children,
  configFields,
  carouselItems,
  modeView,
  sortOptions,
  facetsFields
}: SearchUIProviderProps) => {
  return (
    <SearchUICustonContext.Provider
      value={{
        configFields,
        carouselItems,
        modeView,
        sortOptions,
        facetsFields
      }}
    >
      {children}
    </SearchUICustonContext.Provider>
  );
};
