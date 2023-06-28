import { authService } from 'services/authService';
import { CustomNextPageContext } from 'shared/types/pages';

export function withSession(callback: CallableFunction) {
  return async (ctx: CustomNextPageContext) => {
    try {
      const session = await authService.getSession(ctx);

      if (session) {
        const modifiedCtx = {
          ...ctx,
          session
        };
        return callback(modifiedCtx);
      }
      return {
        redirect: {
          permanent: false,
          destination: '/login'
        }
      };
    } catch (error) {
      return {
        redirect: {
          permanent: false,
          destination: '/login'
        }
      };
    }
  };
}
