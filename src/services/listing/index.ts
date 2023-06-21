import { configApi } from 'config';
import { Listing } from 'shared/types/api/listing';
import { ListingPageProps } from 'shared/types/pages/listing';
import { Logger } from 'utils';

import api from '../httpClient';

export const getListing = async (listingId: string): Promise<Listing | undefined> => {
  try {
    api.setBaseUrl(configApi.baseUrl);
    const result = await api.get<Listing>(`/listing/${listingId}`);
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

export const getListingForListingPage = async (
  listingId: string
): Promise<ListingPageProps | null> => {
  const result = await getListing(listingId);

  if (result) {
    return {
      listingId: result.id,
      headerListingProps: {
        city: result.address.city,
        district: result.address.district,
        name: result.name,
        isFavorite: result.isFavorite,
        price: result.price
      },
      amenitiesProps: {
        amenities: result.amenities
      }
    };
  }

  return null;
};
