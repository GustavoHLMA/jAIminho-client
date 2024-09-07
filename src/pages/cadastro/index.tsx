import {
  Container,
  LeftSide,
  RightSide,
  FormTitle,
  IconsContainer,
  InfoText,
  WhiteStripe,
  ImageContainer,
  CorreiosContainer,
  InputField,
  Button,
  ShowPasswordButton,
  Subtitle
} from './styles';
import Image from 'next/image';
import { useState } from 'react';
import { Logo, Dados, Medalha, Bot, Correios, ShowPassword } from '@/assets';
import router from 'next/router';
import { createUser } from '@/services/api';

export default function Cadastro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }

    try {
      const newUser = await createUser({
        name,
        email,
        cpf,
        password
      });

      console.log('Usuário criado com sucesso:', newUser);
      router.push('/portal');
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
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
        <FormTitle>Cadastro</FormTitle>
        <Subtitle>
          Já possui uma conta?{' '}
          <strong onClick={() => router.push('/login')}> Login </strong>
        </Subtitle>
        <form onSubmit={handleSubmit}>
          <InputField
            type="text"
            placeholder="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div style={{ display: 'flex', gap: '1vw' }}>
            <InputField
              type="text"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              style={{ width: '50%', marginRight: '1rem' }}
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
                    src={ShowPassword}
                    alt="Mostrar senha"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority={true}
                  />
                </ShowPasswordButton>
              </span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '1vw',
              alignItems: 'stretch',
              marginTop: '2vh'
            }}
          >
            <div style={{ position: 'relative' }}>
              <InputField
                type={showPassword ? 'text' : 'password'}
                placeholder="Confirmar senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{ marginRight: '1.8rem' }}
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
                    src={ShowPassword}
                    alt="Mostrar senha"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority={true}
                  />
                </ShowPasswordButton>
              </span>
            </div>
            <Button type="submit">Cadastrar</Button>
          </div>
        </form>
      </RightSide>
    </Container>
  );
}
