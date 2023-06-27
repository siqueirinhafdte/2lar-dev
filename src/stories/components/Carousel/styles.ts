import { styled } from '@mui/material';
import IconButtonMUI from '@mui/material/IconButton';
import { spacing } from 'theme/spacing';

export const Wrapper = styled('div')``;

export const Container = styled('div')`
  display: flex;
  gap: ${spacing.S16};
`;

export const ContainerSwiper = styled('div')`
  width: 90%;
`;

export const Content = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.S5};
  color: ${({ theme }) => theme.palette.text.primary};
  padding-bottom: ${spacing.S16};

  cursor: pointer;
  :hover {
    border-bottom: 0.0625rem solid ${({ theme }) => theme.palette.primary.light};
  }
`;

export const WrapperButton = styled('div')`
  display: flex;
  align-items: center;
  width: 5%;
`;

export const IconButton = styled(IconButtonMUI)`
  background-color: ${({ theme }) => theme.palette.secondary.light};
  border: ${({ theme }) => `${spacing.S1} solid ${theme.palette.secondary.main}`};
`;
