import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ILoginPayload } from '../types/types';
import { login } from '../services/user.api';

type options = {
    onSuccess?: () => void;
    onReject?: () => void;
};

const useLogin = ({ onSuccess }: options) => {
  const { setAccessToken } = useContext(AuthContext);

  const setLogin = (payload: ILoginPayload) => {
    login(payload)
      .then(({accessToken}) => {
        setAccessToken(accessToken)
      }).then(() => {
        onSuccess?.()
      }).catch((error) => {
        console.error(error)
      })
  }

  return { setLogin };
}

export default useLogin;