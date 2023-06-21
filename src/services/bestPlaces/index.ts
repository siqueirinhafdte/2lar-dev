import { configApi } from 'config';
import { BestPlace } from 'shared/types/api/bestPlaces';
import { CardProps } from 'stories/components/Generic/Card/types';
import { Logger, getCurrencyIntegerValue } from 'utils';

import api from '../httpClient';

export const getBestPlaces = async (): Promise<BestPlace | undefined> => {
  try {
    api.setBaseUrl(configApi.baseUrl);
    const result = await api.get<BestPlace>('/bestPlaces?page=1&size=4');

    if (!result.data) {
      Logger.info(result.statusText);
      return undefined;
    }
    return result.data;
  } catch (error) {
    Logger.error('Erro na requisição', error);
  }
};

export const getBestPlacesForCardListComponent = async (): Promise<CardProps[] | null> => {
  const result = await getBestPlaces();

  if (!result) {
    return null;
  }

  const cardData = result.listings.map<CardProps>((listing) => ({
    id: listing.id,
    title: listing.name,
    type: listing.type,
    urlImg: listing.images.length > 0 ? listing.images[0] : '',
    description: `${listing.address.street}, ${listing.address.city}`,
    urlRedirect: `/listing/${listing.id}`,
    attributes: [
      {
        name: 'Quartos',
        value: listing.attributes.bedrooms
      },
      {
        name: 'Banheiros',
        value: listing.attributes.baths
      },
      {
        name: 'm² de área',
        value: listing.attributes.area
      }
    ],
    price: {
      value: getCurrencyIntegerValue(listing.price),
      description: 'p/ período'
    }
  }));

  return cardData;
};
