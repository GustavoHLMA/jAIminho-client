import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext
} from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface AuthContextType {
  user: User | null;
  login: (cpf: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

interface User {
  id: string;
  cpf: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      axios.defaults.headers.Authorization = `Bearer ${token}`;
    }
    setLoading(false);
  }, []);

  const login = async (cpf: string, password: string) => {
    try {
      const response = await axios.post(
        'https://jaiminho-server.onrender.com/auth/login',
        {
          cpf,
          password
        }
      );
      const { accessToken, loggedUser } = response.data.data;

      localStorage.setItem('accessToken', accessToken);
      axios.defaults.headers.Authorization = `Bearer ${accessToken}`;

      setUser(loggedUser);
      router.push('/portal');
    } catch (error) {
      console.error('Login failed:', error);
      throw new Error('Login failed. Please check your credentials.');
    }
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    delete axios.defaults.headers.Authorization;
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
