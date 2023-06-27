import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Avatar } from 'stories/components';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const Wrapper = styled('div')`
  display: flex;
  width: 100%;
  margin-top: ${spacing.S80};

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-top: ${spacing.S32};
  }
`;

export const AvatarImage = styled(Avatar)`
  width: 3.75rem;
  height: 3.75rem;
  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 3.125rem;
    height: 3.125rem;
  }
`;

export const AvatarInformation = styled('div')`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-self: center;
`;

export const AnnounceText = styled(Typography)`
  font-size: ${fontSizes.F16};
  color: ${({ theme }) => theme.palette.text.secondary};

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${fontSizes.F14};
  }
`;

export const AvatarName = styled(Typography)`
  font-size: ${fontSizes.F20};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: ${fontSizes.F16};
  }
`;
