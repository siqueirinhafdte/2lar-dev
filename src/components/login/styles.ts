import { styled } from '@mui/material';
import { Button } from 'stories/components/Forms/Button';
import { spacing } from 'theme/spacing';

export const Container = styled('div')``;

export const ButtonComponent = styled(Button)`
  width: 100%;
  margin-top: ${spacing.S30};
  padding: ${spacing.S14};
`;

export const FormPhoneNumber = styled('form')`
  display: flex;
  flex-direction: column;
  padding: 0 ${spacing.S10};
  gap: ${spacing.S24};
`;

export const FormEmail = styled('form')`
  display: flex;
  flex-direction: column;
  padding: 0 ${spacing.S10};
  gap: ${spacing.S26};
`;
