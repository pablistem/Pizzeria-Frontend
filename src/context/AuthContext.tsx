import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRefresh from '../hooks/useRefresh';

export const AuthContext = createContext({});

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState(true);
  const navigate = useNavigate();

  useRefresh({ onSuccess: () => navigate('/') });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
