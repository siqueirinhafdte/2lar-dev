import { LoginEmail } from 'components/login/LoginEmail';
import { LoginPhoneNumber } from 'components/login/LoginPhoneNumber';
import { Tabs } from 'components/Tabs';
import { useLogin } from 'hooks/useLoginPage';
import { ImageComponent } from 'stories/components';
import * as S from 'styles/loginPageStyles';

export default function Login() {
  const { formik } = useLogin();

  return (
    <S.Main>
      <S.Wrapper>
        <S.Form onSubmit={formik.handleSubmit}>
          <Tabs
            tabs={[{ label: 'E-mail' }, { label: 'Celular' }]}
            tabPanels={[
              { component: <LoginEmail />, id: '1' },
              { component: <LoginPhoneNumber />, id: '2' }
            ]}
          />
        </S.Form>
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
