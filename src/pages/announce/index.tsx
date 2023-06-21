import { AnnounceForm } from 'components/AnnounceForm';
import { AnnounceSimulator } from 'components/AnnounceSimulator';
import { CallWhatsapp } from 'components/CallWhatsApp';
import { Renting2LarFaster } from 'components/Renting2LarFaster';

export default function Announce() {
  return (
    <>
      <AnnounceForm />
      <Renting2LarFaster />
      <AnnounceSimulator />

      <CallWhatsapp urlImg={'/img/call-whatsapp.jpg'} redirectLink="/" />
    </>
  );
}
