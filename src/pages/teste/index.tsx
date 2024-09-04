import { Container } from './styles';
import SimpleButton from '@/components/SimpleButton';

export default function Teste() {
  return (
    <Container>
      <h1
        style={{
          color: 'green',
          fontSize: '34rem'
        }}
      >
        teste
      </h1>
      <SimpleButton value="Hello World" />
    </Container>
  );
}
