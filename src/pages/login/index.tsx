import {
  Container,
  LeftSide,
  RightSide,
  FormTitle,
  InputField,
  LoginButton,
  IconsContainer,
  InfoText,
  WhiteStripe,
  ImageContainer,
  CorreiosContainer,
  Subtitle,
  ShowPasswordButton
} from './styles';
import Image from 'next/image';
import { useState } from 'react';
import { Logo, Dados, Medalha, Bot, Correios, ShowPassword } from '@/assets';
import { useAuth } from '@/contexts/authContext';
import { useRouter } from 'next/router';

export default function Login() {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Impede que a página recarregue
    try {
      await login(cpf, password);
      router.push('/portal');
    } catch {
      alert('Login falhou. Reveja suas credenciais!.');
      console.log('Login failed. Please check your credentials.');
    }
  };

  return (
    <Container>
      <LeftSide>
        <WhiteStripe>
          <Image src={Logo} alt="Jaiminho Logo" layout="intrinsic" />
        </WhiteStripe>
        <IconsContainer>
          <ImageContainer>
            <Image
              src={Bot}
              alt="Chatbot Icon"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority={true}
            />
          </ImageContainer>
          <ImageContainer>
            <Image
              src={Dados}
              alt="Data Icon"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority={true}
            />
          </ImageContainer>
          <ImageContainer>
            <Image
              src={Medalha}
              alt="Award Icon"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority={true}
            />
          </ImageContainer>
        </IconsContainer>
        <InfoText>
          Tecnologia <strong>Dados</strong> Agilidade
        </InfoText>
      </LeftSide>
      <RightSide>
        <CorreiosContainer>
          <Image
            src={Correios}
            alt="Correios Logo"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority={true}
          />
        </CorreiosContainer>
        <FormTitle>Faça seu login</FormTitle>
        <Subtitle>
          É funcionário dos <strong>Correios</strong> e ainda não tem conta?
          Fale com seu <strong>gestor</strong> ou{' '}
          <strong
            onClick={() => router.push('/cadastro')}
            style={{
              cursor: 'pointer',
              color: '#034381'
            }}
          >
            cadastre-se.
          </strong>
        </Subtitle>
        <form onSubmit={handleSubmit}>
          <InputField
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <div style={{ position: 'relative' }}>
            <InputField
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              onClick={togglePasswordVisibility}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer'
              }}
            >
              <ShowPasswordButton>
                <Image
                  src={ShowPassword} // Aqui substituímos o emoji pela imagem de "mostrar senha"
                  alt="Mostrar senha"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  priority={true}
                />
              </ShowPasswordButton>
            </span>
          </div>
          <LoginButton type="submit">Entrar</LoginButton>
        </form>
      </RightSide>
    </Container>
  );
}
