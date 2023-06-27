import * as S from './styles';
import { AnnounceAvatarProps } from './types';

export function AnnounceAvatar({ email, name }: AnnounceAvatarProps) {
  return (
    <S.Wrapper>
      <S.AvatarImage src={email} alt="avatar do anunciante" />
      <S.AvatarInformation>
        <S.AnnounceText>Anunciante</S.AnnounceText>
        <S.AvatarName>{name}</S.AvatarName>
      </S.AvatarInformation>
    </S.Wrapper>
  );
}
