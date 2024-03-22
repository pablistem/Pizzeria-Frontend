import { useState } from "react";
import { IAddress } from "../../types/types";
import AddressDetail from "./AddressDetail";
import useAddressDetail from "../../hooks/useAddressDetail";

const AddressesList = ({ addresses }) => {
  const [ openModal, setOpenModal ] = useState<boolean>(false)
  const { setAddresss, addressDetail } = useAddressDetail({ onSuccess: () => setOpenModal(true) });

  const getAddress = async (id: number) => {
    try {
      setAddresss(id)
    } catch (error) {
      console.error(error); 
    }
  }

  return (
    (addresses = []
      ? <p>No hay direcciones disponibles</p>
      : (addresses.map((address: IAddress) => {
        <>
          <div className="cursor-pointer" onClick={() => getAddress(address.id)} key={address.id}>{address.id}</div>
          <AddressDetail open={openModal} data={addressDetail} />
        </>
      }))
    )
  )
}

export default AddressesList;