import { AmenitiesProps } from 'components/AmenitiesCard/types';
import { AnnounceAvatarProps } from 'components/AnnounceAvatar/types';
import { AnnounceProximityProps } from 'components/AnnounceProximity/types';
import { AtributtesCardProps } from 'components/AtributtesCard/types';
import { HeaderPostProps } from 'components/HeaderPost/types';
import { ListingCarouselProps } from 'components/ListingCarousel/types';
import { ListingViewersProps } from 'components/ListingViewers/types';
import { RentSimulatorProps } from 'components/RentSimulator/types';

export interface ListingPageProps {
  listingId: string;
  headerListingProps: HeaderPostProps;
  listingCarouselProps: ListingCarouselProps;
  amenitiesProps: AmenitiesProps;
  listingViewersProps: ListingViewersProps;
  avatar: AnnounceAvatarProps;
  attributes: AtributtesCardProps[];
  description: string;
  announceProximityProps: AnnounceProximityProps[];
  listingRentSimulator?: ListingSimulatorData;
}
export interface ListingSimulatorData {
  listingId: string;
  rentSimulatorProps: RentSimulatorProps;
}
