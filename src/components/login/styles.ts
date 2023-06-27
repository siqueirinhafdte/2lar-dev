import { styled } from '@mui/material';
import { InputText as InputTextComponent } from 'stories/components';
import { Button } from 'stories/components/Forms/Button';
import { spacing } from 'theme/spacing';

export const Container = styled('div')``;

export const ButtonComponent = styled(Button)`
  width: 100%;
  margin-top: ${spacing.S30};
  padding: ${spacing.S14};
`;

export const ContainerPhoneNumber = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 0 ${spacing.S10};
  gap: ${spacing.S24};
`;

export const ContainerEmail = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 0 ${spacing.S10};
  gap: ${spacing.S26};
`;

export const InputText = styled(InputTextComponent)`
  input {
    outline: none;
    padding: ${spacing.S8} 0 ${spacing.S8} ${spacing.S5};
  }
`;
