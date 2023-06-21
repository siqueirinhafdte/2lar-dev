'use client';

import { description, heroBannerData, listCardIcon } from '__sitedata__';
import { imagesCarouselData } from '__sitedata__/imagesCarousel.data';
import { Description } from 'components/Description';
import { HeroBanner } from 'components/HeroBanner';
import ImagesCarousel from 'components/ImagesCarousel';
import { ListCardIcon } from 'components/ListCardsIcon';

export default function HowItWorks() {
  return (
    <main>
      <HeroBanner {...heroBannerData} />
      <ListCardIcon listCardsIcon={listCardIcon} />
      <Description {...description} />
      <ImagesCarousel data={imagesCarouselData} />
    </main>
  );
}
