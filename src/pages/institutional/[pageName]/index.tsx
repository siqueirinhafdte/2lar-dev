'use client';
import { GetStaticPropsContext } from 'next';
import { getConsent } from 'services/consents';
import { ConsentType } from 'shared/enum';
import { InstitutionalPageProps } from 'shared/types/pages/institutional';
import { Markdown } from 'stories/components/Markdown';
import * as S from 'styles/institutionalPageStyles';
import { Logger } from 'utils';

export default function InstitutionalPage({ consent }: InstitutionalPageProps) {
  return (
    <S.Wrapper>
      <Markdown children={consent?.text ?? ''} />
    </S.Wrapper>
  );
}

export const getStaticPaths = async () => {
  const paths = Object.keys(ConsentType).map((item) => {
    return {
      params: {
        pageName: item
      }
    };
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const pageName = String(context.params?.pageName);

  try {
    const consent = await getConsent(pageName);

    return {
      props: {
        consent
      }
    };
  } catch (error) {
    Logger.error(error);

    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    };
  }
};
