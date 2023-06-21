import { amenitiesData, headerPostData } from '__sitedata__';
import { WrapperPage } from 'components';
import { AmenitiesCard } from 'components/AmenitiesCard';
import { HeaderPost } from 'components/HeaderPost';
export default function Posts() {
  return (
    <WrapperPage>
      <HeaderPost {...headerPostData} />
      <AmenitiesCard amenities={amenitiesData} />
    </WrapperPage>
  );
}
