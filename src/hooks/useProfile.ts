import { useEffect, useState } from 'react';
import { getProfile } from '../services/user.api';
import { IProfile } from '../types/types';
import useAuth from './useAuth';

type options = {
  onSuccess?: () => void;
  onReject?: () => void;
};

const useProfile = ({ onReject }: options) => {
  const [ profileData, setProfileData] = useState<IProfile | null>(null);
  const [ loading, setLoading ] = useState<boolean>(false);
  const { accessToken } = useAuth();

  useEffect(() => {
    const fetchData = () => {
      getProfile()
        .then((data: IProfile) => {
          setLoading(true);
          setProfileData(data);
        }).catch(() => {
          onReject?.()
        }).finally(() => {
          setLoading(false);
        })
      };
    fetchData();
  }, [accessToken]);

  return { profileData, loading };
};

export default useProfile;
