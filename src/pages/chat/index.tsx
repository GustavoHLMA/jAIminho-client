import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { sendMessageToChatbot } from '@/services/api'; // Importar a função de API
import {
  Container,
  Sidebar,
  ChatArea,
  ChatInputArea,
  SendButton,
  InputField,
  NavContainer,
  ClipButton,
  MessageContainer,
  MessageBox,
  BotAvatar
} from './styles';
import Navbar from '@/components/Navbar';
import { Logo, Clipe, SendIcon, Jaiminho } from '@/assets';

function ChatPage() {
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>(
    []
  ); // Armazenar mensagens
  const [input, setInput] = useState(''); // Gerenciar campo de entrada de mensagem
  const [loading, setLoading] = useState(false); // Adicionar estado de carregamento para bloquear múltiplos envios

  const messagesEndRef = useRef<HTMLDivElement>(null); // Referência para a rolagem automática

  // Função para rolar automaticamente até o fim
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // UseEffect para rolar automaticamente quando novas mensagens forem adicionadas
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (input.trim() === '') return; // Não enviar mensagem vazia

    // Adicionar mensagem do usuário à lista de mensagens
    const newMessages = [...messages, { text: input, sender: 'user' }];
    setMessages(newMessages);
    setInput(''); // Limpar o campo de entrada
    setLoading(true); // Mostrar estado de carregamento

    try {
      // Enviar mensagem para o backend e receber resposta do chatbot
      const botResponse = await sendMessageToChatbot({ message: input });

      // Adicionar a resposta do bot à lista de mensagens
      setMessages([...newMessages, { text: botResponse, sender: 'bot' }]);
    } catch (error) {
      console.error('Erro ao enviar a mensagem:', error);
      // Opcional: Adicionar uma mensagem de erro na interface se falhar
      setMessages([
        ...newMessages,
        { text: 'Erro ao comunicar-se com o chatbot.', sender: 'bot' }
      ]);
    } finally {
      setLoading(false); // Remover estado de carregamento após a resposta
    }
  };

  return (
    <>
      <NavContainer>
        <Navbar />
      </NavContainer>

      <Container>
        <Sidebar>
          <h6
            style={{
              marginBottom: '2vh',
              fontSize: '1.2vw',
              fontFamily: 'Poppins, sans-serif',
              color: '#5C5C5C'
            }}
          >
            Dias anteriores
          </h6>
        </Sidebar>

        <ChatArea>
          <Image src={Logo} alt="Logo Jaiminho" width={200} height={50} />

          {/* Exibir as mensagens */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              padding: '20px',
              width: '100%',
              alignItems: 'center'
            }}
          >
            {messages.map((message, index) => (
              <MessageContainer
                key={index}
                sender={message.sender as 'user' | 'bot'}
              >
                {message.sender === 'bot' && (
                  <BotAvatar>
                    <Image
                      src={Jaiminho}
                      alt="Bot"
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                      priority={true}
                      style={{ borderRadius: '50%' }}
                    />
                  </BotAvatar>
                )}
                <MessageBox sender={message.sender as 'user' | 'bot'}>
                  {message.text}
                </MessageBox>
              </MessageContainer>
            ))}
            {/* Referência para rolar até o final */}
            <div ref={messagesEndRef} />
          </div>

          {/* Área de input */}
          <ChatInputArea>
            <ClipButton>
              <Image
                src={Clipe}
                alt="Attach"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority={true}
              />
            </ClipButton>

            <InputField
              placeholder="Escreva sua dúvida para o Jaiminho"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) =>
                e.key === 'Enter' && !loading ? sendMessage() : null
              } // Enviar ao pressionar Enter
              disabled={loading} // Desabilitar enquanto o chatbot está respondendo
            />

            <SendButton onClick={sendMessage} disabled={loading}>
              <Image
                src={SendIcon}
                alt="Send"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority={true}
              />
            </SendButton>
          </ChatInputArea>
        </ChatArea>
      </Container>
    </>
  );
}

export default ChatPage;
