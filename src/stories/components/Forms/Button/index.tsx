import * as S from './styles';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({ variant = 'contained', ...props }) => {
  return <S.StyledButton {...props} variant={variant} />;
};
