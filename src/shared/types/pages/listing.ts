import { AmenitiesProps } from 'components/AmenitiesCard/types';
import { HeaderPostProps } from 'components/HeaderPost/types';

export interface ListingPageProps {
  listingId: string;
  headerListingProps: HeaderPostProps;
  amenitiesProps: AmenitiesProps;
}
