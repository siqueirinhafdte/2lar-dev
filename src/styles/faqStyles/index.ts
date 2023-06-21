import { styled } from '@mui/material/styles';
import { spacing } from 'theme/spacing';

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const AccordionWrapper = styled('div')`
  width: 100%;
  max-width: 45rem;
  padding: ${spacing.S10};
  padding-bottom: ${spacing.S64};
`;

export const WhatsAppWrapper = styled('div')`
  margin-bottom: ${spacing.S64};
`;
