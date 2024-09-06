import React from 'react';
import { useRouter } from 'next/router';
import {
  Container,
  RowContainer,
  ItemsContainer,
  MenuItem,
  LogoContainer,
  Title
} from './styles';
import Image from 'next/image';
import { Logo } from '@/assets';

const Navbar = () => {
  const router = useRouter();

  // Definir quais rotas usar
  const routes = [
    { name: 'PORTAL', path: '/portal' },
    { name: 'CHAT', path: '/chat' },
    { name: 'DASHBOARD', path: '/dashboard' },
    { name: 'CAPACIT.AI', path: '/capacitai' },
    { name: 'CARTERINHA', path: '/carterinha' }
  ];

  return (
    <Container>
      <RowContainer>
        <Title>Bem vindo!</Title>
        <LogoContainer>
          <Image
            src={Logo}
            alt="Jaiminho Logo"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority={true}
          />
        </LogoContainer>
      </RowContainer>
      <ItemsContainer>
        <RowContainer>
          {/* Mapear os itens de menu */}
          {routes.map((route) => (
            <MenuItem
              key={route.name}
              onClick={() => router.push(route.path)}
              isActive={router.pathname === route.path}
            >
              {route.name}
            </MenuItem>
          ))}
        </RowContainer>
      </ItemsContainer>
    </Container>
  );
};

export default Navbar;
