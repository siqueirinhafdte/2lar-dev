import React from 'react';

import { ImageComponent } from 'stories/components';

import { LogoProps } from './types';

export const Logo: React.FC<LogoProps> = ({ urlImg, redirectLink }) => {
  return (
    <ImageComponent src={urlImg} alt="Logo" width={158} height={40} redirectLink={redirectLink} />
  );
};
