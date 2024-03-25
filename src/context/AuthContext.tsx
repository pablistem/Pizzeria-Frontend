import { createContext, useState, Dispatch, SetStateAction } from 'react';
import useRefresh from '../hooks/useRefresh';
import { useNavigate } from 'react-router-dom';
import { setSession } from '../services/user.api';

export type AccessToken = string | null;

export interface AuthContextInterface {
  accessToken: string | null;
  setAccessToken: Dispatch<SetStateAction<AccessToken>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const defaultState = {
  accessToken: null,
  setAccessToken: () => {},
  loading: false,
  setLoading: () => {}
} as AuthContextInterface;

export const AuthContext = createContext<AuthContextInterface>(defaultState);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [ accessToken, setAccessToken ] = useState<AccessToken>(null);
  const [ loading, setLoading ] = useState<boolean>(false);
  const navigate = useNavigate();

  useRefresh({
    onSuccess: () => navigate('/'),
    setToken: (token: string) => setAccessToken(token),
  });
  setSession(accessToken);

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        setAccessToken,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
