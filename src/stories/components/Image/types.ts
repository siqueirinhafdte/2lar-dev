export interface ImageProps {
  src: string;
  alt: string;
  redirectLink?: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
}
