import { configApi } from 'config';
import { ConsentType, TConsentType } from 'shared/enum';
import { Consent } from 'shared/types/api/consent';
import { Logger } from 'utils';

import api from '../httpClient';

export const getConsent = async (pageName: TConsentType | string): Promise<Consent | undefined> => {
  const consentType = ConsentType[pageName as TConsentType];

  if (!consentType) {
    return { name: 'Not Found', text: '# Página institucional não encontrada', label: 'Not Found' };
  }

  try {
    api.setBaseUrl(configApi.baseUrl);
    const result = await api.get<Consent[]>(`/consents?document=${consentType}`);
    if (!result.data) {
      Logger.info(result.statusText);
      return undefined;
    }

    const consent = result.data.find((consent: Consent) => consent.name === consentType);
    return consent ?? undefined;
  } catch (error) {
    Logger.error('Erro na requisição', error);
    return undefined;
  }
};
