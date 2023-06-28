import React from 'react';

import 'swiper/css';
import 'swiper/css/navigation';

import { useResponsive } from 'shared/hooks';
import { ImageComponent } from 'stories/components';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as S from './styles';
import { ImageCarouselProps } from './types';

export default function ImagesCarousel({ data }: ImageCarouselProps) {
  const { isMobile } = useResponsive();

  const widthImg = isMobile ? 300 : 600;
  const heightImg = isMobile ? 150 : 350;

  const slidesPerView = isMobile ? 1.7 : 2.7;

  const duplicatedSlides = [...data.urlImg, ...data.urlImg];

  return (
    <S.Wrapper>
      <Swiper
        slidesPerView={slidesPerView}
        centeredSlides={true}
        mousewheel={true}
        autoplay={{ delay: 100, disableOnInteraction: false }}
        loop
      >
        {duplicatedSlides.map((url) => (
          <SwiperSlide key={url}>
            <S.WrapperImage>
              <S.ImageContainer>
                <ImageComponent
                  src={url}
                  alt={'Carrossel de imagens ilustrativas de casas para alugar'}
                  width={widthImg}
                  height={heightImg}
                />
              </S.ImageContainer>
            </S.WrapperImage>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Wrapper>
  );
}
