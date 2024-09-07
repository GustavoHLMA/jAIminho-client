import styled from '@emotion/styled';

// Interface para as propriedades do container de mensagens
interface MessageContainerProps {
  sender: 'user' | 'bot';
}

// Container principal
export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #ffffff;
  padding-bottom: 30vh;
`;

// Nav container
export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4.5vh;
  padding-left: 5.5vw;
  margin-bottom: 2.6rem;
  padding-right: 4.69vw;
`;

// Sidebar (barra lateral)
export const Sidebar = styled.div`
  width: 20vw;
  height: 100vh;
  background-color: #f9f9f9;
  overflow-y: auto;
  padding: 2vh 2vw;
  scrollbar-width: thin;
  scrollbar-color: #ffcc00 transparent;

  &::-webkit-scrollbar {
    width: 0.8vw;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ffcc00;
    border-radius: 1vw;
  }
`;

export const ChatArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2vh 2vw;
  background-color: #ffffff;
  height: 92vh;
  position: relative;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

// Input do chat (rodapé)
export const ChatInputArea = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2vw;
  background-color: #fffbe3;
  border-radius: 3rem;
  border: 0.5px solid #ffdc02;
  width: 50vw;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 2vh;
  left: 60%;
  transform: translateX(-50%);
`;

// Campo de input de mensagens
export const InputField = styled.input`
  flex: 1;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 2vh;
  font-size: 1vw;
`;

// Botão de envio
export const SendButton = styled.button`
  position: relative;
  padding: 2.125vh;
  margin-left: 1vw;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;
`;

// Botão de anexar arquivo
export const ClipButton = styled.div`
  position: relative;
  padding: 2.5vh;
  margin-right: 2vw;
  border: none;
  cursor: pointer;
`;

// Container das mensagens
export const MessageContainer = styled.div<MessageContainerProps>`
  display: flex;
  justify-content: ${({ sender }) =>
    sender === 'user' ? 'flex-end' : 'flex-start'};
  padding: 2vh 0;
  width: 48vw;
`;

// Caixa de mensagens
export const MessageBox = styled.div<MessageContainerProps>`
  max-width: 30vw;
  padding: 1.5vh 2.5vw;
  border-radius: 1.5vw;
  background-color: ${({ sender }) =>
    sender === 'user' ? '#D1E8FF' : '#F1F0F0'};
  color: ${({ sender }) => (sender === 'user' ? '#004785' : '#333')};
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  display: inline-block;
  margin-left: ${({ sender }) => (sender === 'user' ? 'auto' : '0')};
`;

// Avatar do bot
export const BotAvatar = styled.div`
  position: relative;
  width: 4vw;
  height: 4vw;
  border-radius: 50rem;
  margin-right: 1vw;
  background-color: #ffd700;
  color: #004785;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2vw;
  margin-top: 0.5vh;
`;
