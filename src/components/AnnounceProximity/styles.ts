import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const Wrapper = styled('div')`
  width: 60%;
  display: flex;

  justify-content: flex-start;
  align-items: center;
  padding: ${spacing.S16};
  gap: ${spacing.S10};
  background-color: ${({ theme }) => theme.palette.customColors?.backgroundLight};
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
    align-items: flex-start;
  }
`;

export const TextContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${spacing.S5};
`;

export const TextPlaces = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;
export const Places = styled(Typography)`
  display: flex;
  font-size: ${fontSizes.F18};

  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-wrap: wrap;
    font-size: ${fontSizes.F16};
  }
`;

export const Separator = styled(Typography)`
  padding-right: ${spacing.S4};
  font-size: ${fontSizes.F18};
  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${fontSizes.F16};
  }
`;
export const LastPlace = styled('div')`
  display: flex;
  font-size: ${fontSizes.F18};
`;
export const UnderlineText = styled(Typography)`
  display: flex;
  padding-right: ${spacing.S4};
  text-decoration: underline;

  font-size: ${fontSizes.F18};
  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${fontSizes.F16};
  }
`;
