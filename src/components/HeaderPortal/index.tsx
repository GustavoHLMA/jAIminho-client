import { useRouter } from 'next/router';
import {
  Container,
  BackButtonContainer,
  SectionTitle,
  RowContainer
} from './styles';
import { Previous } from '@/assets';
import Image from 'next/image';

interface HeaderPortalProps {
  Title: string;
}

export default function HeaderPortal({ Title }: HeaderPortalProps) {
  const router = useRouter();

  return (
    <Container>
      <RowContainer>
        <BackButtonContainer onClick={() => router.back()}>
          <Image src={Previous} alt="Voltar" layout="fill" objectFit="cover" />
        </BackButtonContainer>
        <SectionTitle>{Title}</SectionTitle>
      </RowContainer>
    </Container>
  );
}
