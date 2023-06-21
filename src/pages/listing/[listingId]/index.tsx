'use client';
import { WrapperPage } from 'components';
import { AmenitiesCard } from 'components/AmenitiesCard';
import { HeaderPost } from 'components/HeaderPost';
import { GetServerSideProps } from 'next';
import { getListingForListingPage } from 'services/listing';
import { ListingPageProps } from 'shared/types/pages/listing';

export default function Listing(data: ListingPageProps) {
  return (
    <WrapperPage>
      <HeaderPost {...data.headerListingProps} />
      <AmenitiesCard {...data.amenitiesProps} />
    </WrapperPage>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const data = await getListingForListingPage(String(query?.listingId));

  if (!data) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    };
  }

  return {
    props: {
      ...data
    }
  };
};
