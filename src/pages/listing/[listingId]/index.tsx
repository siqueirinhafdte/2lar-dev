'use client';
import { CallWhatsapp } from 'components';
import { AmenitiesCard } from 'components/AmenitiesCard';
import { AnnounceAvatar } from 'components/AnnounceAvatar';
import { AnnounceProximity } from 'components/AnnounceProximity';
import { AtributtesCard } from 'components/AtributtesCard';
import { DescriptionListing } from 'components/DescriptionListing';
import { HeaderPost } from 'components/HeaderPost';
import { ListingCarousel } from 'components/ListingCarousel';
import { ListingViewers } from 'components/ListingViewers';
import { RentSimulator } from 'components/RentSimulator';
import { GetServerSideProps } from 'next';
import { getListingForListingPage } from 'services/listing';
import { useResponsive } from 'shared/hooks';
import { ListingPageProps } from 'shared/types/pages/listing';
import { ImageComponent } from 'stories/components';
import * as S from 'styles/listingPageStyles';

export default function Listing(data: ListingPageProps) {
  const { isMobile } = useResponsive();

  return (
    <S.Wrapper>
      <HeaderPost {...data.headerListingProps} />
      <ListingCarousel {...data.listingCarouselProps} />

      <S.WrapperContainer>
        <S.Container>
          {isMobile ? (
            <>
              <S.BoxAttributes>
                {data.attributes.map((attr) => (
                  <AtributtesCard key={attr.urlIcon} {...attr} />
                ))}
                <S.ContainerMaps>
                  <ImageComponent
                    src="/img/google-maps-mock.png"
                    width={375}
                    height={256}
                    alt="google maps"
                  />
                </S.ContainerMaps>
                <AnnounceAvatar {...data.avatar} />
                <ListingViewers {...data.listingViewersProps} />
                <DescriptionListing description={data.description} />
              </S.BoxAttributes>
              <S.BoxViewersCTASimulator>
                <AmenitiesCard {...data.amenitiesProps} />
              </S.BoxViewersCTASimulator>
            </>
          ) : (
            <>
              <S.BoxAttributes>
                <AnnounceAvatar {...data.avatar} />
                {data.attributes.map((attr) => (
                  <AtributtesCard key={attr.urlIcon} {...attr} />
                ))}
                <DescriptionListing description={data.description} />
                <S.StyledDivider />
                <AmenitiesCard {...data.amenitiesProps} />
              </S.BoxAttributes>
              <S.BoxViewersCTASimulator>
                <ListingViewers {...data.listingViewersProps} />
              </S.BoxViewersCTASimulator>
            </>
          )}
        </S.Container>
        <S.StyledDivider />
        <S.BoxRentSimulator>
          <RentSimulator listingId={data.listingId} />
        </S.BoxRentSimulator>
        <S.BoxAnnounceProximity>
          {!data.announceProximityProps.length
            ? null
            : data.announceProximityProps.map((item) => (
                <AnnounceProximity key={item.name} {...item} />
              ))}
          <CallWhatsapp urlImg={'/img/call-whatsapp.jpg'} redirectLink="/" />
        </S.BoxAnnounceProximity>
      </S.WrapperContainer>
    </S.Wrapper>
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
