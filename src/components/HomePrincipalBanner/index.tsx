import { useRef, useState } from 'react';

import { WrapperPage } from 'components/WrapperPage';

import * as S from './style';
import { HomeMainBannerProps } from './types';

export function HomeMainBanner({
  title,
  textButton,
  urlVideo,
  shortDescription,
  subTitle,
  description
}: HomeMainBannerProps) {
  const [playerState, setPlayerState] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  function HandlePlayerState() {
    const video = videoRef.current;

    if (video) {
      if (video.paused) {
        video
          .play()
          .then(() => setPlayerState(true))
          .catch((error) => console.error('Ocorreu um erro ao reproduzir o vídeo:', error));
      } else {
        video.pause();
        setPlayerState(false);
      }
    }
  }

  return (
    <WrapperPage>
      <S.Wrapper>
        <S.WrapperBanner>
          <S.TittleContainer>
            <S.Title>
              <p>{title.titleFirst}</p>
              <p>{title.titleSec}</p>
              <S.TitleHighlight>{` ${title.highTitle}`}</S.TitleHighlight>
            </S.Title>
          </S.TittleContainer>

          <S.Container>
            <S.ButtonContainer href={'/listings'} variant="contained">
              {textButton}
            </S.ButtonContainer>
            <S.ShortDescription>{shortDescription}</S.ShortDescription>
          </S.Container>
        </S.WrapperBanner>

        <S.ContainerVideo>
          <S.Video ref={videoRef}>
            <source src={urlVideo} type="video/mp4" />
          </S.Video>

          {!playerState && (
            <S.ButtonVideo onClick={HandlePlayerState}>
              {playerState ? <S.PauseButton /> : <S.PlayButton />}
            </S.ButtonVideo>
          )}
        </S.ContainerVideo>

        <div>
          <S.DescriptionContainer>
            <S.SubTitle>{subTitle}</S.SubTitle>
            <S.Description>{description.firstParagraph}</S.Description>
            <S.Description>{description.secondParagraph}</S.Description>
          </S.DescriptionContainer>
        </div>
      </S.Wrapper>
    </WrapperPage>
  );
}
