import { createContext, useState } from 'react';

export const AuthContext = createContext({});

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuth, setIsAuth] = useState(true);
  const [token, setToken] = useState('');

  const saveToken = (tokenParam: string) => {
    setToken(tokenParam);
  };

  const setAuth = (bool: boolean) => {
    setIsAuth(bool);
    console.log('isAuth: ', isAuth);
    localStorage.setItem('auth', JSON.stringify(isAuth));
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, setIsAuth, token, saveToken, setAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
