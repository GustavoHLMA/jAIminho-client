import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001'
});

export default api;

interface UserParams {
  name: string;
  email: string;
  password: string;
  cpf: string;
}

export const createUser = async ({
  name,
  email,
  password,
  cpf
}: UserParams) => {
  try {
    const response = await api.post('/userTest', {
      name,
      email,
      password,
      cpf
    });

    return response.data;
  } catch (error) {
    console.error('Error creating user', error);
    throw new Error();
  }
};

interface ChatParams {
  message: string;
}

export const sendMessageToChatbot = async ({ message }: ChatParams) => {
  try {
    const response = await api.post('/chat', {
      message
    });

    return response.data.response;
  } catch (error) {
    console.error('Error sending message to chatbot', error);
    throw new Error();
  }
};
