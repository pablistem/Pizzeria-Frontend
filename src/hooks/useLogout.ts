import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { logout } from '../services/user.api';

type options = {
    onSuccess?: () => void;
    onReject?: () => void;
};

const useLogout = ({ onSuccess, onReject }: options) => {
  const { accessToken, setAccessToken } = useContext(AuthContext)

  const setLogout = () => {
    logout(accessToken)
      .then(() => 
        setAccessToken(null)
      ).then(() =>
        onSuccess?.(),
      ).catch((error) => {
        console.error(error);
        onReject?.();
      })
    }
    return { setLogout };
  }

export default useLogout;