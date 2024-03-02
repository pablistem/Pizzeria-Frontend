import { useEffect, useState } from 'react';
import { getUserData } from '../services/user.api';
import { IUser } from '../types/types';

const useUser = () => {
  const [userData, setUserData] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUserData();
        console.log(result);
        setUserData(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { userData, loading };
};

export default useUser;
