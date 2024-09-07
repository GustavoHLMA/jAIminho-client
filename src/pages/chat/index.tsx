import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {
  Container,
  Sidebar,
  ChatArea,
  ChatInputArea,
  SendButton,
  InputField,
  NavContainer,
  ClipButton
} from './styles';
import Navbar from '@/components/Navbar';
import { Logo } from '@/assets';

function ChatPage() {
  const messages: string[] = ['', '', ''];

  return (
    <>
      <NavContainer>
        <Navbar />
      </NavContainer>

      <Container>
        <Sidebar>
          <Typography
            variant="h6"
            style={{
              marginBottom: '20px',
              fontSize: '12px',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            Dias anteriores
          </Typography>

          <Box>
            {messages.map((message, index) => (
              <Typography key={index}>{message}</Typography>
            ))}
          </Box>
        </Sidebar>

        <ChatArea>
          <Box>
            <Image src={Logo} alt="Logo Jaiminho" width={200} height={50} />
          </Box>

          <ChatInputArea>
            <ClipButton>
              <AttachFileIcon />
            </ClipButton>

            <InputField
              variant="outlined"
              placeholder="Escreva sua dúvida para o Jaiminho"
              fullWidth
            />
            <SendButton color="primary">
              <ArrowUpwardIcon />
            </SendButton>
          </ChatInputArea>
        </ChatArea>
      </Container>
    </>
  );
}

export default ChatPage;
