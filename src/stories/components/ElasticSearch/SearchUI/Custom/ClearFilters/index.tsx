import { withSearch } from '@elastic/react-search-ui';
import { Button } from 'stories/components/Forms';

import { ClearAllFiltersProps } from './types';

function ClearAllFilters({ clearFilters }: ClearAllFiltersProps) {
  return (
    <Button color="inherit" size="large" onClick={() => clearFilters()}>
      Limpar todos
    </Button>
  );
}

export default withSearch(({ filters, clearFilters }) => ({
  filters,
  clearFilters
}))(ClearAllFilters);
