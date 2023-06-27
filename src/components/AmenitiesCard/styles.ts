import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import { filterColors } from 'theme/filterColors.theme';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: ${spacing.S70};
  color: ${({ theme }) => theme.palette.primary.dark};
  margin-bottom: ${spacing.S60};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-top: ${spacing.S5};
  }
`;

export const Title = styled(Typography)`
  margin-bottom: ${spacing.S64};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: ${spacing.S10};
    font-size: ${fontSizes.F24};
  }
`;

export const CardGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing.S32};
  margin-bottom: ${spacing.S64};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: flex;
    flex-direction: column;
    gap: ${spacing.S16};
  }
`;

export const CardContainer = styled('div')`
  display: flex;
  align-items: center;
  max-height: 6.25rem;
`;

export const IconContainer = styled('div')`
  background-color: ${({ theme }) => theme.palette.secondary.light};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.75rem;
  height: 3.75rem;
  overflow: hidden;

  img {
    filter: ${filterColors.pallet.primary.main};
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: ${spacing.S10};
  }
`;

export const CardDescription = styled('div')`
  display: flex;
  flex-direction: column;
  padding-left: ${spacing.S16};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding-left: ${spacing.S10};
  }
`;

export const CardTitle = styled(Typography)`
  font-size: ${fontSizes.F20};
  line-height: 2.5rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: ${fontSizes.F24};
    line-height: 2rem;
  }
`;

export const Description = styled(Typography)`
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: ${fontSizes.F20};
  line-height: 2rem;
  letter-spacing: 0;
  white-space: nowrap;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: auto;
    height: auto;
    font-size: ${fontSizes.F16};
    line-height: 1.5rem;
  }
`;

export const Subtitle = styled(Typography)`
  width: 100%;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  margin-bottom: ${spacing.S16};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: ${spacing.S10};
  }
`;

export const SimpleAmenities = styled('div')`
  flex-direction: column;
  display: grid;
  gap: ${spacing.S120};
  grid-template-columns: repeat(3, 1fr);

  ${({ theme }) => theme.breakpoints.down('sm')} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${spacing.S16};
    padding: ${spacing.S10};
  }
`;

export const ListContainer = styled('li')`
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  font-size: ${fontSizes.F20};
  line-height: 2rem;
  padding-right: ${spacing.S32};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: ${fontSizes.F14};
    line-height: 1.5rem;
  }
`;
