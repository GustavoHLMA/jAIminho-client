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
import { Logo, Dados, Medalha, Bot, Correios, ShowPassword } from '@/assets'; // Importando a imagem de mostrar senha

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
          Fale com seu <strong>gestor</strong>.
        </Subtitle>
        <form>
          <InputField type="text" placeholder="CPF" />
          <div style={{ position: 'relative' }}>
            <InputField
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
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
          <LoginButton>Entrar</LoginButton>
        </form>
      </RightSide>
    </Container>
  );
}
