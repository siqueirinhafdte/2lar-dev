/* eslint-disable @typescript-eslint/no-explicit-any */

import nookies from 'nookies';
import { ACCESS_TOKEN_KEY } from 'shared/enum';
import { ONE_HOUR } from 'utils';

export const tokenService = {
  save(token: string, ctx: any = null) {
    nookies.set(ctx, ACCESS_TOKEN_KEY, token, {
      maxAge: ONE_HOUR,
      path: '/'
    });
  },
  get(ctx: any = null) {
    const cookies = nookies.get(ctx);
    return cookies[ACCESS_TOKEN_KEY];
  },
  delete(ctx: any = null) {
    nookies.destroy(ctx, ACCESS_TOKEN_KEY);
  }
};
