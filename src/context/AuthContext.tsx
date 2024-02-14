import { createContext, useState } from 'react';
import useRefresh from '../hooks/useRefresh';
import { useNavigate } from 'react-router-dom';

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
