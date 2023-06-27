import MUIIconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { spacing } from 'theme/spacing';

export const Wrapper = styled('div')`
  width: 25rem;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100vw;
  }
`;

export const HeaderModal = styled('div')`
  display: flex;
  justify-content: space-between;
  border-bottom: ${spacing.S1} solid ${({ theme }) => theme.palette.secondary.main};
  padding-bottom: ${spacing.S10};
`;

export const TitleModal = styled(Typography)`
  width: 100%;
  padding-left: 30%;
`;

export const WrapperFooterButtons = styled('div')`
  display: flex;
  justify-content: space-between;
  margin: ${spacing.S20} 0;
`;

export const IconButton = styled(MUIIconButton)`
  color: ${({ theme }) => theme.palette.primary.dark};
`;
