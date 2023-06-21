import { FC } from 'react';

import * as S from './styles';
import { WrapperPageProps } from './types';

export const WrapperPage: FC<WrapperPageProps> = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};
