import { NextPageContext } from 'next';

import { User } from '../api/user';

export type CustomNextPageContext =
  | (NextPageContext & {
      session?: User;
    })
  | null;
