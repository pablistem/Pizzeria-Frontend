import { useEffect } from 'react';
import { refreshSessions } from '../services/user.api';

type options = {
  onSuccess?: () => void;
  onReject?: () => void;
  setToken: (token: string) => void;
};

const useRefresh = ({ onSuccess, onReject, setToken }: options) => {
  useEffect(() => {
    refreshSessions()
      .then(({ accessToken }) => {
        setToken(accessToken);
      })
      .then(() => {
        onSuccess?.();
      })
      .catch((error) => {
        console.log(error);
        onReject?.();
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useRefresh;
