import { configApi } from 'config';
import { iconEnum } from 'shared/enum';
import { Listing } from 'shared/types/api/listing';
import { Simulator } from 'shared/types/api/simulator';
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
      description: result.description,
      headerListingProps: {
        city: result.address.city,
        district: result.address.district,
        name: result.name,
        isFavorite: result.isFavorite,
        price: result.price
      },
      avatar: {
        name: result.owner.name,
        email: 'default@test.com'
      },
      listingCarouselProps: {
        data: {
          images: result.images,
          type: result.type
        }
      },
      amenitiesProps: {
        amenities: result.amenities.map((item) => {
          return {
            ...item,
            icon: iconEnum[item.name]
          };
        })
      },
      attributes: [
        {
          altIcon: 'Régua redonda',
          primaryText: `${result.attributes.area}m²`,
          secondaryText: 'área total',
          urlIcon: '/icons/regua-redonda.svg'
        },
        {
          altIcon: 'Cama',
          primaryText: `${result.attributes.bedrooms} quartos`,
          secondaryText: `${result.attributes.suites} suites`,
          urlIcon: '/icons/cama.svg'
        },
        {
          altIcon: 'Chuveiro',
          primaryText: `${result.attributes.baths} banheiros`,
          secondaryText: '',
          urlIcon: '/icons/chuveiro.svg'
        },
        {
          altIcon: 'Carro',
          primaryText: `${result.attributes.parking} vagas`,
          secondaryText: '',
          urlIcon: '/icons/carro.svg'
        }
      ],
      listingViewersProps: {
        price: result.price,
        viewers: result.viewers,
        availablePeriod: result.availablePeriod
      },
      announceProximityProps: result.nearby.map((item) => ({
        ...item,
        iconUrl: iconEnum[item.name]
      }))
    };
  }

  return null;
};

export const getSimulatorData = async (listingId: string, people: number, periods: number) => {
  try {
    api.setBaseUrl(configApi.baseUrl);

    const requestBody = {
      listingId,
      people,
      periods
    };
    const result = await api.post<Simulator>('/listing/simulate', requestBody);
    return result.data;
  } catch (error) {
    Logger.error('Erro na requisição', error);
    return null;
  }
};
