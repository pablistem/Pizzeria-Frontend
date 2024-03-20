import { useState } from "react";
import { getAddressData } from "../services/user.api";
import { IAddress } from "../types/types";

type options = {
  onSuccess?: () => void;
  onReject?: () => void;
}

const useAddressDetail = ({ onSuccess, onReject }: options) => {
  const [ addressDetail, setAddressDetail ] = useState<IAddress | null>(null);
  const [ loading, setLoading ] = useState<boolean>(false);

  const setAddresss = async (id: number) => {
    getAddressData(id)
      .then((data: IAddress) => {
        setAddressDetail(data)
      }).then(() => {
        onSuccess?.()
      }).catch(() => {
        onReject?.()
      }).finally(() => {
        setLoading(false)
      })
    }
    
  return { setAddresss, loading, addressDetail }
}

export default useAddressDetail;