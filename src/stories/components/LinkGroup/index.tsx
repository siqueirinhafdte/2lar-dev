import React, { FC } from 'react';

import List from '@mui/material/List';
import Link from 'next/link';

import * as S from './styles';
import { LinkGroupsProps } from './types';

export const LinkGroup: FC<LinkGroupsProps> = ({ title = '', links = [] }) => {
  return (
    <S.Container item xs={6} sm={4} md={3} xl={3}>
      <S.Title>{title}</S.Title>
      <List>
        {links.map((link) => (
          <S.ListItem key={link.id} disableGutters>
            <Link href={link.redirectLink}>{link.label}</Link>
          </S.ListItem>
        ))}
      </List>
    </S.Container>
  );
};
