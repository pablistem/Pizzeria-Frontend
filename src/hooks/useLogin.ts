import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ILoginPayload } from '../types/types';
import { login } from '../services/user.api';

type options = {
  onSuccess?: () => void;
  // eslint-disable-next-line no-unused-vars
  onReject?: (e: Error) => void;
};

const useLogin = ({ onSuccess, onReject }: options) => {
  const { setAccessToken } = useContext(AuthContext);

  const setLogin = (payload: ILoginPayload) => {
    login(payload)
      .then((res) => {
        setAccessToken(res.accessToken);
      })
      .then(() => {
        onSuccess?.();
      })
      .catch((error) => {
        onReject?.(error);
      });
  };

  return { setLogin };
};

export default useLogin;
