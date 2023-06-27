import React from 'react';

import Link from 'next/link';
import { ImageComponent } from 'stories/components/Image';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as S from './styles';
import { CardProps } from './types';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export const Card = ({
  title,
  type,
  urlImg,
  images,
  description,
  urlRedirect,
  price,
  attributes,
  mode = 'vertical'
}: CardProps) => {
  const showCarousel = !!images?.length && images?.length > 1;
  const showOnlyOneImg = !showCarousel || !!urlImg;

  return (
    <Link href={urlRedirect ?? ''}>
      <S.Wrapper mode={mode}>
        {showCarousel && (
          <S.WrapperCarouselImage mode={mode}>
            {type && <S.StyledChip label={type} />}
            <Swiper pagination={true} modules={[Pagination]}>
              {images.map((item) => (
                <SwiperSlide key={item}>
                  <ImageComponent src={item} alt={''} width={100} height={100} />
                </SwiperSlide>
              ))}
            </Swiper>
          </S.WrapperCarouselImage>
        )}
        {showOnlyOneImg && (
          <S.CardMedia mode={mode} image={(urlImg || (images ?? [])[0]) ?? ''} title={title ?? ''}>
            {type && <S.StyledChip label={type} />}
          </S.CardMedia>
        )}
        <S.CardContentContainer>
          {Boolean(title) && (
            <S.Title gutterBottom variant="h6">
              {title}
            </S.Title>
          )}
          {Boolean(description) && <S.Description variant="body2">{description}</S.Description>}
          {Boolean(price) && (
            <S.Price variant="body2">
              {price?.value} {price?.description ?? ''}
            </S.Price>
          )}

          {(attributes ?? [])?.length > 0 && (
            <S.WrapperAttributes>
              {attributes?.map((attribute) => (
                <S.AttributeText key={attribute.name}>
                  {attribute.value} {attribute.name}
                </S.AttributeText>
              ))}
            </S.WrapperAttributes>
          )}
        </S.CardContentContainer>
      </S.Wrapper>
    </Link>
  );
};
