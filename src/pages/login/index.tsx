import { LoginEmail } from 'components/login/LoginEmail';
import { LoginPhoneNumber } from 'components/login/LoginPhoneNumber';
import { Tabs } from 'components/Tabs';
import { GetServerSideProps } from 'next';
import { tokenService } from 'services/tokenService';
import { ImageComponent } from 'stories/components';
import * as S from 'styles/loginPageStyles';

export default function Login() {
  return (
    <S.Main>
      <S.Wrapper>
        <S.WrapperTabs>
          <Tabs
            tabs={[{ label: 'E-mail' }, { label: 'Celular' }]}
            tabPanels={[
              { component: <LoginEmail />, id: '1' },
              { component: <LoginPhoneNumber />, id: '2' }
            ]}
          />
        </S.WrapperTabs>
        <ImageComponent
          width={332}
          height={498}
          src="/img/couple-relaxing-hammock-by-beach.png"
          alt="logo"
          className="imageLogin"
        />
      </S.Wrapper>
    </S.Main>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = tokenService.get(ctx);

  if (token) {
    return {
      redirect: {
        permanent: false,
        destination: '/'
      }
    };
  }

  return {
    props: {
      login: true
    }
  };
};
