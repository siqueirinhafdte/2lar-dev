import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  max-width: calc(100vw - 0.9375rem);
  width: 100%;
  position: relative;
  overflow: visible;
`;

export const ImageContainer = styled('div')`
  ${({ theme }) => theme.breakpoints.down('sm')} {
    img {
      width: 100%;
      height: 12.5rem;
      object-fit: cover;
    }
  }
`;

export const WrapperImage = styled('div')`
  width: 100%;
`;
