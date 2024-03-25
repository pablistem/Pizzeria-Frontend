import { useEffect, useState } from 'react';
import { getProfile } from '../services/user.api';
import { IProfile } from '../types/types';
import useAuth from './useAuth';

type options = {
  onSuccess?: () => void;
  onReject?: () => void;
};

const useProfile = ({ onReject }: options) => {
  const [ profileData, setProfileData ] = useState<IProfile | null>(null);
  const { accessToken, loading, setLoading } = useAuth();

  useEffect(() => {
    const fetchData = () => {
      if (accessToken) {
        getProfile()
          .then((data: IProfile) => {
            setProfileData(data);
          })
          .catch(() => {
            onReject?.();
          })
          .finally(() => {
            setLoading(false);
          });
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken, loading]);

  return { profileData, loading };
};

export default useProfile;
