import { styled } from '@mui/material/styles';
import { fontSizes } from 'theme/fontSizes.theme';
import { spacing } from 'theme/spacing';

export const Main = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${spacing.S30} 0;
  margin: ${spacing.S30} 0;
  background-color: ${({ theme }) => theme.palette.customColors?.backgroundLight};
`;

export const Wrapper = styled('div')`
  width: 90%;
  max-width: 51rem;
  display: flex;
  align-items: center;
  height: calc(100% - 0.625rem);
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.secondary.light};

  ${({ theme }) => theme.breakpoints.down('md')} {
    justify-content: space-between;
  }

  .imageLogin {
    display: block;

    ${({ theme }) => theme.breakpoints.down('md')} {
      display: none;
    }
  }
`;

export const WrapperTabs = styled('div')`
  padding: ${spacing.S20} ${spacing.S10};
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 60%;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 100%;
    margin: 0 ${spacing.S20};
  }
`;

export const FooterForm = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-size: ${fontSizes.F14};
    color: ${({ theme }) => theme.palette.info.main};
  }
`;
