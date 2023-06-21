import { styled } from '@mui/material/styles';

export const MainContentWrapper = styled('div')`
  //height screen - height header - height footer
  min-height: calc(100vh - 4.625rem - 33.3125rem);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
