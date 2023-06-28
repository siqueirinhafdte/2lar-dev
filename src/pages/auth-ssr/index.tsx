import { withSession } from 'decorators/session';
import { User } from 'shared/types/api/user';
import { CustomNextPageContext } from 'shared/types/pages';

interface AuthServerSideRenderingProps {
  session: User;
}

export default function AuthServerSideRendering({ session }: AuthServerSideRenderingProps) {
  return (
    <div style={{ width: '75rem', margin: '2rem' }}>
      <h1>Página autenticada</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}

export const getServerSideProps = withSession((ctx: CustomNextPageContext) => {
  return {
    props: {
      session: ctx?.session
    }
  };
});
