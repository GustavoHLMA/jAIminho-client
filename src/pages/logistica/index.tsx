import Navbar from '@/components/Navbar';
import HeaderPortal from '@/components/HeaderPortal';
import { LogisticaImage1, LogisticaImage2, LogisticaImage3 } from '@/assets';
import {
  Container,
  ImageContainer1,
  ImageContainer2,
  ImageContainer3
} from './styles';
import Image from 'next/image';

export default function LogisticaReversa() {
  return (
    <Container>
      <Navbar />
      <HeaderPortal Title="Logística Reversa" />
      <ImageContainer1>
        <Image
          src={LogisticaImage1}
          alt="LogisticaImage1"
          layout="fill"
          objectFit="contain"
          quality={100}
          priority={true}
        />
      </ImageContainer1>
      <ImageContainer2>
        <Image
          src={LogisticaImage2}
          alt="LogisticaImage2"
          layout="fill"
          objectFit="contain"
          quality={100}
          priority={true}
        />
      </ImageContainer2>
      <ImageContainer3>
        <Image
          src={LogisticaImage3}
          alt="LogisticaImage3"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority={true}
        />
      </ImageContainer3>
    </Container>
  );
}
