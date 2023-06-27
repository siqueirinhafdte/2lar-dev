import { configApi } from 'config';
import { categoriesEnum } from 'shared/enum/categories.enum';
import { filterOptionsEnum } from 'shared/enum/filterOptions.enum';
import { FilterOptions, PayloadFilterOptions } from 'shared/types/api/filterOptions';
import { Logger } from 'utils';

import api from '../httpClient';

export const getFiltersCategories = async (
  payload?: PayloadFilterOptions
): Promise<FilterOptions | undefined> => {
  const newPayload: PayloadFilterOptions = payload
    ? payload
    : {
        categories: Object.keys(categoriesEnum).map((key) => key),
        requiredOptions: Object.keys(filterOptionsEnum).map((key) => key)
      };
  try {
    api.setBaseUrl(configApi.baseUrl);
    const result = await api.post<FilterOptions>(`/filterOptions`, newPayload);
    if (!result.data) {
      Logger.info(result.statusText);
      return undefined;
    }

    return result.data;
  } catch (error) {
    Logger.error('Erro na requisição', error);
    return undefined;
  }
};
