import { Amplify, Auth } from 'aws-amplify';
import { amplifyConfig, configApi } from 'config';
import { tokenService } from 'services/tokenService';
import { User } from 'shared/types/api/user';
import { CustomNextPageContext } from 'shared/types/pages';
import { Logger } from 'utils';

import api from '../httpClient';
Amplify.configure(amplifyConfig);

export const authService = {
  async getSession(ctx: CustomNextPageContext = null): Promise<User | null> {
    const token = tokenService.get(ctx);

    api.setBaseUrl(configApi.baseUrl);
    api.setHeader({
      Authorization: `Bearer ${token}`
    });

    try {
      const result = await api.get('/profile');
      if (!result.data) {
        throw new Error('Not authorized');
      }

      return result.data;
    } catch (error) {
      try {
        const refreshTokenResponse = await this.refreshToken(ctx);
        if (refreshTokenResponse) {
          return refreshTokenResponse;
        }
        throw new Error('Not authorized');
      } catch (error) {
        Logger.error('getSession', { error });
        throw new Error('Not authorized');
      }
    }
  },
  async logOff() {
    api.setBaseUrl('');
    try {
      const response = await api.post('/api/signOut');
      return response;
    } catch (error) {
      Logger.error({ error });
    }
  },
  async refreshToken(ctx: CustomNextPageContext = null): Promise<User | null> {
    try {
      const sessionCognito = await Auth.currentSession();

      const user = sessionCognito.getIdToken();
      const idToken = user.getJwtToken();

      tokenService.save(idToken, ctx);

      return user.payload as User;
    } catch (error) {
      Logger.error('refreshToken', { error });
      return null;
    }
  }
};
