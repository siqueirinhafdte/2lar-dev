import {
  bestDestinationsData,
  escpaRoutineData,
  homeMainBannerData,
  mediaList,
  mediaTitle,
  takeVacationData
} from '__sitedata__';
import {
  BestDestination,
  EscapeRoutine,
  HomeMainBanner,
  MediaList,
  TakeVacation
} from 'components';
import { useRouter } from 'next/router';
import { getBestPlacesForCardListComponent } from 'services/bestPlaces';
import { CardsGrid } from 'stories/components';
import { CardProps } from 'stories/components/Generic/Card/types';
import { Logger } from 'utils';

interface HomePageProps {
  cardListData?: CardProps[];
}

export default function Home({ cardListData }: HomePageProps) {
  const router = useRouter();

  return (
    <main>
      <HomeMainBanner {...homeMainBannerData} urlVideo="/video/my-video.mp4" />
      <MediaList title={mediaTitle} items={mediaList} />
      <EscapeRoutine {...escpaRoutineData} />

      {cardListData && (
        <CardsGrid
          title={'Encontre imóveis nas melhores localizações'}
          cards={cardListData}
          buttonTitle={'Encontrar meu imóvel'}
        />
      )}
      <BestDestination {...bestDestinationsData} slidesPerView={1} />
      <TakeVacation {...takeVacationData} onClickHowItsWorksButton={() => router.push('sales')} />
    </main>
  );
}

export const getStaticProps = async () => {
  try {
    const cardListData = await getBestPlacesForCardListComponent();

    return {
      props: {
        cardListData: cardListData ? cardListData : []
      }
    };
  } catch (error) {
    Logger.error({ error });
    return {
      props: {
        cardListData: []
      }
    };
  }
};
