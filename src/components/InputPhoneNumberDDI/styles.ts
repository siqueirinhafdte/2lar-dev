import { Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import { InputText } from 'stories/components';
import { spacing } from 'theme/spacing';

export const Container = styled('div')`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 2.5rem;
  margin-top: ${spacing.S36};

  label {
    color: ${({ theme }) => theme.palette.secondary.dark};
  }
`;

export const OptionContainer = styled(MenuItem)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageFlag = styled(Image)`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  margin-right: ${spacing.S10};
  display: block;
`;

export const TextSelect = styled('span')`
  height: 1.25rem;
`;

export const InputTextPhone = styled(InputText)`
  input {
    outline: none;
    padding: ${spacing.S8} 0 ${spacing.S8} ${spacing.S5};
  }
`;

export const SelectDDI = styled(Select)`
  height: 2.75rem;
  width: 8rem;
  border-radius: 0;

  padding: ${spacing.S10} 0 ${spacing.S10} 0;

  select {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    position: absolute;
  }

  span {
    margin-left: ${spacing.S26};
  }
`;
