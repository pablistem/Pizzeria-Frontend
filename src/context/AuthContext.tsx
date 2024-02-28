import { createContext, useState, Dispatch, SetStateAction } from 'react';
import useRefresh from '../hooks/useRefresh';
import { useNavigate } from 'react-router-dom';
import { setSession } from '../services/user.api';

export type AccessToken = {
  accessToken: string;
}

export interface AuthContextInterface {
  accessToken: {},
  setAccessToken: Dispatch<SetStateAction<AccessToken>>
}

const defaultState = {
  accessToken: '',
  setAccessToken: () => {}
} as AuthContextInterface;

export const AuthContext = createContext<AuthContextInterface>(defaultState);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [ accessToken, setAccessToken ] = useState<AccessToken>({ accessToken: '' });
  const navigate = useNavigate();

  useRefresh({ onSuccess: () => navigate('/'), setToken: (token: string) => setAccessToken({ accessToken: token }) });
  setSession(accessToken)

  return (
    <AuthContext.Provider value={{ 
      accessToken, 
      setAccessToken
      }}>
      {children}
    </AuthContext.Provider>
  );
};
