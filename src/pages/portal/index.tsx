import Navbar from '@/components/Navbar';
import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Container,
  ButtonsContainer,
  ButtonItem,
  SearchBarTitle,
  SearchBar,
  SearchContainer
} from './styles';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const routes = [
    { name: 'Logística', path: '/logistica' },
    { name: 'Correspondência', path: '/correspondencia' },
    { name: 'Dinheiro', path: '/dinheiro' },
    { name: 'Marketing Direto', path: '/marketing-direto' },
    { name: 'Loja Online', path: '/loja-online' },
    { name: 'Correios Celular', path: '/correios-celular' }
  ];

  const filteredRoutes = routes.filter((route) =>
    route.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Navbar />
      <SearchBarTitle>
        Clique em um dos temas abaixo para acessar as informações.
      </SearchBarTitle>
      <SearchContainer>
        <SearchBar
          placeholder="Qual serviço ou produto você deseja encontrar?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchContainer>
      <ButtonsContainer>
        {filteredRoutes.length > 0 ? (
          filteredRoutes.map((route, index) => (
            <ButtonItem
              key={route.name}
              yellow={index >= filteredRoutes.length / 2}
              onClick={() => router.push(route.path)}
            >
              {route.name}
            </ButtonItem>
          ))
        ) : (
          <p>Nenhum resultado encontrado.</p>
        )}
      </ButtonsContainer>
    </Container>
  );
}
