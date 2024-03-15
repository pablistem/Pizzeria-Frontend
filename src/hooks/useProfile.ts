import { useEffect, useState } from 'react';
import { getProfile } from '../services/user.api';
import { IProfile } from '../types/types';

type options = {
  onSuccess?: () => void;
  onReject?: () => void;
};

const useProfile = ({ onReject }: options) => {
  const [ profileData, setProfileData] = useState<IProfile | null>(null);
  const [ loading, setLoading ] = useState<boolean>(false);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await getProfile();
          setProfileData(result);
        } catch (error) {
          onReject?.()
        } finally {
          setLoading(false);
        }
      };
      fetchData();
  }, []);

  return { profileData, loading };
};

export default useProfile;
