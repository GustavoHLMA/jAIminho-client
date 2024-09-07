import Navbar from '@/components/Navbar';
import {
  Container,
  HeaderTitle,
  SubTitle,
  HelpSection,
  HelpVideoContainer,
  HelpImageContainer,
  HelpText,
  TableContainer,
  StepContainer,
  StepCardsContainer,
  StepCard,
  StepCard2,
  StepTitle,
  StepDescription,
  StepDescription2,
  SearchContainer,
  SearchBar,
  ImageContainer,
  StepNumber,
  StepNumber2,
} from './styles';
import Image from 'next/image';
import Link from 'next/link';
import { HelpImage1, HelpImage2, Lupa } from '@/assets';

export default function HelpScreen() {
  return (
    <Container>
      <Navbar />
      <HeaderTitle>Me ajuda, time!</HeaderTitle>
      <SubTitle>
        Aqui é seu portal de acesso a vários conteúdos em vídeo explicando como usar diferentes plataformas e lidar com as mais diversas situações da sua jornada de trabalho.
      </SubTitle>

      <SearchContainer>
        <SearchBar
          placeholder="O que você deseja aprender hoje?"
        />
        <ImageContainer>
          <Image src={Lupa} alt="Lupa" layout="fill" objectFit="cover" />
        </ImageContainer>
      </SearchContainer>

      <HelpSection>
        <HelpVideoContainer>
            <HelpImageContainer>
            <Link href={'https://www.youtube.com/watch?v=vzb7H0lzoLk'}>
                <Image src={HelpImage1} alt="Video 1" layout="fill" objectFit="cover" />
            </Link>
            </HelpImageContainer>
            <HelpText>INICIANDO A CARREIRA COMO ATENDENTE: O QUE PRECISO SABER?</HelpText>
        </HelpVideoContainer>

        <HelpVideoContainer>
            <HelpImageContainer>
                <Link href={'https://www.youtube.com/watch?v=zbVGy0-Gj4k'}>
                    <Image src={HelpImage2} alt="Video 1" layout="fill" objectFit="cover" />
                </Link>
            </HelpImageContainer>
            <HelpText>QUAIS SÃO OS PRODUTOS E SERVIÇOS DOS CORREIOS</HelpText>
        </HelpVideoContainer>
      </HelpSection>

      <HeaderTitle>Quero te ajudar!</HeaderTitle>
      <SubTitle>
      Aqui você pode visualizar quais conteúdos ainda não foram gravados para ajudar o time Correios e fazer você mesmo. Ao gravar e compartilhar na plataforma, você poderá juntar pontos e trocar por prêmios incríveis, além de ajudar muitos funcionários.
      </SubTitle>      

      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Conteúdo</th>
              <th>Link do vídeo</th>
              <th>Nome + ID do Funcionário</th>
              <th>Aprovação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>INICIANDO A CARREIRA COMO ATENDENTE: O QUE PRECISO SABER?</td>
              <td>Link do Google Drive</td>
              <td>Fulaninho da Silva 123456789</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>QUAIS SÃO OS PRODUTOS E SERVIÇOS DOS CORREIOS</td>
              <td>Link do Google Drive</td>
              <td>Sicraninho Lima 987654321</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>COMO USAR A PLATAFORMA XYZ?</td>
              <td>Link do Google Drive</td>
              <td>Jeremias Santos 987654321</td>
              <td>✓</td>
            </tr>
          </tbody>
        </table>
      </TableContainer>

      <StepContainer>
        <StepTitle>Não entendeu? Veja o passo-a-passo</StepTitle>
        <StepCardsContainer>
            <StepCard>
                <StepNumber>
                    1
                </StepNumber>
                <StepDescription>Veja na coluna 1 da planilha o conteúdo que você mais domina e deseja gravar</StepDescription>
            </StepCard>
            <StepCard>
                <StepNumber>
                    2
                </StepNumber>
                <StepDescription>Grave o vídeo, faça o upload no Google Drive e compartilhe o link na coluna 2 da planilha</StepDescription>
            </StepCard>
            <StepCard>
                <StepNumber>
                    3
                </StepNumber>
                <StepDescription>Coloque seu nome completo e ID na coluna 3 da planilha</StepDescription>
            </StepCard>
            <StepCard>
                <StepNumber>
                    4
                </StepNumber>
                <StepDescription>Aguarde a aprovação do céu conteúdo na última coluna</StepDescription>
            </StepCard>
            <StepCard2>
                <StepNumber2>
                    5
                </StepNumber2>
                <StepDescription2>Se seu vídeo for aprovado, você receberá pontos na sua carteirinha</StepDescription2>
            </StepCard2>
            <StepCard2>
                <StepNumber2>
                    6
                </StepNumber2>
                <StepDescription2 style={{fontSize: '0.9vw'}}>Se seu vídeo não for aprovado, depois de 1 semana as colunas 2,3 e 4 serão limpadas para que outra pessoa possa se alocar ou até você de novo!</StepDescription2>
            </StepCard2>
        </StepCardsContainer>
      </StepContainer>
    </Container>
  );
}
