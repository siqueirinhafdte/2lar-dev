import { faqData } from '__sitedata__/faq.data';
import { CallWhatsapp } from 'components/CallWhatsApp';
import { FaqAccordion } from 'components/FaqAccordion';
import * as S from 'styles/faqStyles';

export default function Faq() {
  return (
    <S.Wrapper>
      <S.AccordionWrapper>
        <FaqAccordion faqs={faqData} />
      </S.AccordionWrapper>
      <CallWhatsapp urlImg={'/img/call-whatsapp.jpg'} redirectLink={'/'} />
    </S.Wrapper>
  );
}
