import { useResponsive } from 'shared/hooks';
import { ImageComponent } from 'stories/components';

import * as S from './styles';
import { DescriptionProps } from './types';

export function Description({ title, topics, subTitle, infos }: DescriptionProps) {
  const { isMobile } = useResponsive();

  const widthIcon = !isMobile ? 56 : 48;
  const heightIcon = !isMobile ? 56 : 48;

  return (
    <S.Wrapper>
      <S.ContentContainer>
        <S.TopicContainer>
          <S.Title>{title}</S.Title>
          {topics.map((topic) => (
            <S.Topic key={topic.titleTopic}>
              <ImageComponent
                src={topic.urlImage}
                width={widthIcon}
                height={heightIcon}
                alt={topic.altText}
              />
              <S.TopicTitle>{topic.titleTopic}</S.TopicTitle>
            </S.Topic>
          ))}
        </S.TopicContainer>
        <S.TextContainer>
          <S.subTitle>{subTitle}</S.subTitle>
          <S.InfosContainer>
            {infos.map((info) => (
              <S.InfoContainer key={info.textFirst}>
                <S.InfoTitle>{info.title}</S.InfoTitle>
                <S.InfoText>{info.textFirst}</S.InfoText>
                <S.InfoText>{info.textSecond}</S.InfoText>
                <S.InfoLink href={info.urlLink}>{info.textLink}</S.InfoLink>
              </S.InfoContainer>
            ))}
          </S.InfosContainer>
        </S.TextContainer>
      </S.ContentContainer>
    </S.Wrapper>
  );
}
