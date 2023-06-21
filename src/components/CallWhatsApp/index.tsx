'use cliente';
import { WhatsAppIcon } from 'shared';
import { useResponsive } from 'shared/hooks';

import { ImageComponent } from '../../stories/components/Image';
import * as S from './styles';
import { CallWhatsappProps } from './types';

export const CallWhatsapp = ({ urlImg, redirectLink }: CallWhatsappProps) => {
  const { isMobile } = useResponsive();

  const widthImg = isMobile ? 168 : 300;
  const heightImg = isMobile ? 140 : 225;

  const title = isMobile
    ? 'Ficou alguma dúvida sobre o imóvel?'
    : 'Ficou alguma dúvida? Fale com um de nossos especialistas';

  const buttonTitle = isMobile ? 'Falar com atendente' : 'Chamar no WhatsApp';

  return (
    <S.Content>
      <S.ContainerCard>
        <S.ContentCard>
          <S.TitleCard variant="h5">{title}</S.TitleCard>
          <S.ButtonLinkWrapper>
            <S.ButtonLink startIcon={<WhatsAppIcon />} href={redirectLink}>
              {buttonTitle}
            </S.ButtonLink>
          </S.ButtonLinkWrapper>
        </S.ContentCard>
        <S.WrapperImage>
          <ImageComponent
            alt="Mulher respondendo a mensagem no whatsapp"
            src={urlImg}
            width={widthImg}
            height={heightImg}
          />
        </S.WrapperImage>
      </S.ContainerCard>
    </S.Content>
  );
};
