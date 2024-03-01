import { useEffect, useState, useContext} from 'react';
import { getUserData } from '../services/user.api';
import { IUser } from '../types/types';
import { AuthContext } from '../context/AuthContext';

const useUser = () => {
  const { accessToken } = useContext(AuthContext)
  const [userData, setUserData] = useState<IUser | null>({
    id: 1,
    name: 'facu',
    direction: '',
    email: 'email@gmail.com',
    telephone: 1154953811,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (accessToken) {
      const fetchData = async () => {
        try {
          const result = await getUserData();
          setUserData(result);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, []);

  return { userData, loading };
};

export default useUser;
