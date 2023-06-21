import { LinkGroupsProps } from '../LinkGroup/types';

export interface FooterProps {
  urlImg: string;
  textLogo: string;
  button?: {
    onClick: CallableFunction;
    label: string;
  };
  horizontalLinks?: {
    label: string;
    redirectLink: string;
  }[];
  navLinks?: LinkGroupsProps[];
}
