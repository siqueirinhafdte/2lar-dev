import { memo } from 'react';

import { Paging, SearchProvider, WithSearch } from '@elastic/react-search-ui';
import { Layout } from '@elastic/react-search-ui-views';
import { SearchUICustomProvider } from 'context/SearchUI';

import '@elastic/react-search-ui-views/lib/styles/styles.css';

import { BodyContent } from './BodyContent';
import { BodyHeader } from './BodyHeader';
import { CustomPagination } from './Custom/CustomPagination';
import { SideContent } from './SideContent';
import * as S from './styles';
import { SearchUIProps } from './types';

const SearcUIComponent = ({
  title,
  config,
  configFields,
  carouselItems,
  sortOptions,
  facetsFields
}: SearchUIProps) => {
  return (
    <SearchProvider config={config}>
      <SearchUICustomProvider
        configFields={configFields}
        carouselItems={carouselItems}
        sortOptions={sortOptions}
        facetsFields={facetsFields}
      >
        <WithSearch mapContextToProps={({ wasSearched }) => ({ wasSearched })}>
          {({ wasSearched }) => {
            return (
              <S.Wrapper>
                <Layout
                  bodyHeader={<BodyHeader title={title} />}
                  sideContent={<>{wasSearched && <SideContent />}</>}
                  bodyContent={<>{wasSearched && <BodyContent />}</>}
                  bodyFooter={<Paging view={CustomPagination} />}
                />
              </S.Wrapper>
            );
          }}
        </WithSearch>
      </SearchUICustomProvider>
    </SearchProvider>
  );
};

export const SearchUI = memo(SearcUIComponent);
