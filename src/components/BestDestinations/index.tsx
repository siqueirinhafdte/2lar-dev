import React from 'react';

import { ImageComponent } from 'stories/components/Image';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import * as S from './styles';
import { BestDestinationProps } from './types';

export const BestDestination = ({ data, slidesPerView, title }: BestDestinationProps) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.TitleWrapper>
          <S.Title variant="h3">{title}</S.Title>
        </S.TitleWrapper>
        {data && (
          <S.SwiperWrapper>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar]}
              pagination={{
                clickable: true,
                type: 'fraction'
              }}
              scrollbar={{ draggable: true, dragSize: 70 }}
              slidesPerView={slidesPerView}
              loop
            >
              {data.map((item) => (
                <SwiperSlide key={item.title}>
                  <S.Content>
                    <S.WrapperImage>
                      <S.ImageContainer>
                        <ImageComponent
                          src={item.urlImg}
                          alt={item.title ?? ''}
                          width={500}
                          height={300}
                        />
                      </S.ImageContainer>
                    </S.WrapperImage>
                    <S.DescriptionContainer>
                      <S.Position>{item.position}</S.Position>
                      <S.Subtitle>{item.title}</S.Subtitle>
                      <S.Description>{item.description}</S.Description>
                    </S.DescriptionContainer>
                  </S.Content>
                </SwiperSlide>
              ))}
            </Swiper>
          </S.SwiperWrapper>
        )}
      </S.Container>
    </S.Wrapper>
  );
};
