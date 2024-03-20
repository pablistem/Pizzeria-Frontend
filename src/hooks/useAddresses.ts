import { useState, useEffect } from "react";
import { getAddressesList } from "../services/user.api";
import { IAddress } from "../types/types";

type options = {
  onSuccess?: () => void;
  onReject?: () => void;
}

const useAddresses = ({ onSuccess, onReject }: options) => {
  const [ addressesData, setAddressesData ] = useState<IAddress | null>(null);
  const [ loading, setLoading ] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      getAddressesList()
        .then((data: IAddress) => {
          setAddressesData(data);
        }).then(() => {
          onSuccess?.()
        }).catch(() => {
          onReject?.()
        }).finally(() => {
          setLoading(false)
        })
      }
    fetchData()
  }, [])

  return { addressesData, loading }
};

export default useAddresses;