import React, { useState } from 'react';

import { Fullscreen, Close } from '@mui/icons-material';
import { useResponsive } from 'shared/hooks';
import { ImageComponent } from 'stories/components';
import SwiperCore, { Navigation, Pagination, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import * as S from './styles';
import { ListingCarouselProps } from './types';

SwiperCore.use([Navigation, Pagination, Keyboard]);

export const ListingCarousel = ({ data }: ListingCarouselProps) => {
  const [expanded, setExpanded] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const { isMobile } = useResponsive();

  const widthImg = isMobile ? 300 : 700;
  const heightImg = isMobile ? 225 : 450;

  return (
    <S.Wrapper>
      <S.ContainerSlide>
        <Swiper
          slidesPerView={1}
          loop
          pagination={{ clickable: true, type: 'fraction' }}
          keyboard={{ enabled: true, onlyInViewport: false }}
        >
          {data?.images?.map((image, index) => (
            <SwiperSlide key={image}>
              <S.WrapperItemSwiper>
                <S.TypeChip label={data.type} />
                <S.ExpandButton
                  onClick={() => {
                    setExpanded(true);
                    setCurrentImage(index);
                  }}
                >
                  <Fullscreen />
                </S.ExpandButton>

                <ImageComponent
                  src={image}
                  alt={`Imagem de ${data.type} para alugar`}
                  width={widthImg}
                  height={heightImg}
                />
              </S.WrapperItemSwiper>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.ContainerSlide>

      <S.ContainerMaps>
        <ImageComponent
          src="/img/google-maps-mock.png"
          width={widthImg}
          height={heightImg}
          alt="google maps"
        />
      </S.ContainerMaps>

      <S.StyledModal open={expanded} onClose={() => setExpanded(false)}>
        <S.Container>
          <Swiper
            navigation={true}
            pagination={{ clickable: true, type: 'fraction' }}
            keyboard={{ enabled: true, onlyInViewport: false }}
            initialSlide={currentImage}
            slidesPerView={1}
            loop
          >
            {data?.images?.map((image) => (
              <SwiperSlide key={image}>
                <S.SwiperBox>
                  <ImageComponent
                    src={image}
                    alt={`Imagem de ${data.type} para alugar`}
                    width={widthImg}
                    height={heightImg}
                  />
                  <S.ImageDescription variant="caption">
                    {`Imagem de ${data.type}`}
                  </S.ImageDescription>
                </S.SwiperBox>
              </SwiperSlide>
            ))}
          </Swiper>
          <S.CloseModalButton onClick={() => setExpanded(false)} disableRipple>
            <Close />
          </S.CloseModalButton>
        </S.Container>
      </S.StyledModal>
    </S.Wrapper>
  );
};
