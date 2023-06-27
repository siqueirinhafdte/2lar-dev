import { styled } from '@mui/material';
import { spacing } from 'theme/spacing';

import { Button } from '../../stories/components/Forms';

export const Wrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.S10};
`;

export const ButtonOption = styled(Button, {
  shouldForwardProp: (prop) => !['isSelected'].includes(prop as string)
})<{ isSelected: boolean }>`
  min-width: 4rem;
  min-height: 4rem;
  padding: 0;
  margin: 0;
  border-radius: 50%;
  border: ${spacing.S1} solid
    ${({ theme, color }) => {
      if (!color || color === 'primary') return theme.palette.secondary.light;
      return 'none';
    }};
  opacity: ${({ isSelected }) => (isSelected ? '1' : '0.5')};
  background-color: ${({ theme, color, isSelected }) => {
    if (!isSelected) return;
    switch (color) {
      case 'inherit':
        return theme.palette.secondary.light;
      case 'primary':
        return theme.palette.primary.light;
      case 'secondary':
        return theme.palette.secondary.light;
      case 'success':
        return theme.palette.success.light;
      case 'warning':
        return theme.palette.warning.light;
      case 'error':
        return theme.palette.error.light;
      default:
        return theme.palette.primary.light;
    }
  }};
`;
