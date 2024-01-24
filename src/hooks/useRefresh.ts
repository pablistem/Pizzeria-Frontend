import { useEffect } from 'react';
import { refreshSessions, setSession } from '../services/user.api';

type options = {
  onSuccess?: () => void;
  onReject?: () => void;
};

const useRefresh = ({ onSuccess, onReject }: options) => {
  useEffect(() => {
    refreshSessions()
      .then(({ accessToken }) => {
        setSession(accessToken);
      })
      .then(() => {
        onSuccess?.();
      })
      .catch((error) => {
        console.log(error);
        onReject?.();
      });
  }, []);
};

export default useRefresh;
