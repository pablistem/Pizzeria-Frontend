import { useEffect, useState, useContext} from 'react';
import { getProfile } from '../services/user.api';
import { IProfile } from '../types/types';
import { AuthContext } from '../context/AuthContext';

const useUser = () => {
  const { accessToken } = useContext(AuthContext)
  const [userData, setUserData] = useState<IProfile | null>({
    id: 1,
    avatar: 'image',
    name: 'Facundo',
    lastName: 'Castro',
    age: 32,
    phone: 1154953811,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (accessToken) {
      const fetchData = async () => {
        try {
          const result = await getProfile();
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
