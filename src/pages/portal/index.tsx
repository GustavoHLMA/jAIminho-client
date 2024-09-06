import Navbar from '@/components/Navbar';
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Navbar />
      <h1
        style={{
          fontSize: '24px',
          display: 'flex',
          fontWeight: 700,
          marginTop: '5vh'
        }}
      >
        Home
      </h1>
    </Container>
  );
}
