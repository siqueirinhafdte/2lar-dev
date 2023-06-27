import React from 'react';

/** Swiper Styles */
import 'utils/swiper/styles';

import Link from 'next/link';
import { KeyboardArrowLeftIcon, KeyboardArrowRightIcon } from 'shared/icons';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as S from './styles';
import { CarouselProps, ListIcon } from './types';

SwiperCore.use([Navigation]);

export const Carousel = ({ data, slidesPerView }: CarouselProps) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.WrapperButton>
          <S.IconButton className="swiper-prev">
            <KeyboardArrowLeftIcon />
          </S.IconButton>
        </S.WrapperButton>
        <S.ContainerSwiper>
          <Swiper
            navigation={{
              prevEl: '.swiper-prev',
              nextEl: '.swiper-next'
            }}
            slidesPerView={slidesPerView}
          >
            {data.map((item: ListIcon) => (
              <SwiperSlide key={`${item.label}-${item.icon}`}>
                {item && (
                  <Link href={{ pathname: item.pathname }}>
                    <S.Content>
                      {item.icon}
                      <span>{item.label}</span>
                    </S.Content>
                  </Link>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </S.ContainerSwiper>
        <S.WrapperButton>
          <S.IconButton className="swiper-next">
            <KeyboardArrowRightIcon />
          </S.IconButton>
        </S.WrapperButton>
      </S.Container>
    </S.Wrapper>
  );
};
