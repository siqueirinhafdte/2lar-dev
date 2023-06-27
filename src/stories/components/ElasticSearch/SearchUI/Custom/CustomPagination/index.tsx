import { useCallback, useEffect, useState } from 'react';

import { PagingViewProps } from '@elastic/react-search-ui-views';

import * as S from './styles';

export function CustomPagination({ onChange, current, totalPages }: PagingViewProps) {
  const [page, setPage] = useState(current);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      if (onChange) {
        onChange(value);
        setPage(value);
      }
    },
    [onChange]
  );

  return <S.Pagination color="primary" count={totalPages} onChange={handleChange} page={page} />;
}
