import { useState, useEffect } from 'react';
/* import { AuthContext } from '../context/AuthContext';
import { IAuthContext } from '../types/types'; */
/* import { AxiosAuth } from '../services/axios.api';
import { AxiosResponse } from 'axios'; */

const useRefresh = () => {
  /* const { isAuth } = useContext(AuthContext) as IAuthContext; */
  const [refreshToken, setRefreshToken] = useState('');
  const isAuth = localStorage.getItem('auth');
  useEffect(() => {
    const fecthRefresh = async () => {
      try {
        // const res: AxiosResponse = await AxiosAuth.get('/auth/session');
        const res = await fetch('http://localhost:9000/auth/session', {
          method: 'GET',
          credentials: 'include',
        }).then((response) => response.json());
        console.log(res);
        setRefreshToken(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fecthRefresh();
  }, [isAuth]);
  return refreshToken;
};

export default useRefresh;
