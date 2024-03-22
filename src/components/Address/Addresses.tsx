import { useState } from "react";
import { IAddress } from "../../types/types";
import AddressDetail from "./AddressDetail";
import useAddressDetail from "../../hooks/useAddressDetail";

const AddressesList = ({ className, addresses }) => {
  const [ openModal, setOpenModal ] = useState<boolean>(false)
  const { addressDetail, setAddresss } = useAddressDetail({ onSuccess: () => setOpenModal(true) });

  const getAddress = async (id: number) => {
    try {
      setAddresss(id)
    } catch (error) {
      console.error(error); 
    }
  }

  console.log(addresses);

  return (
    <div className={className}>
      {addresses.length === 0
        ? <p>No hay direcciones disponibles</p>
        : (addresses.map((address: IAddress) => (
          <>
            <ul>
              <li className="cursor-pointer" onClick={() => getAddress(address.id)} key={address.id}>
                {address.street} {address.height}, {address.city}
              </li>
            </ul>
            {addressDetail && 
              <AddressDetail setOpen={setOpenModal} open={openModal} data={addressDetail} />
            }
          </>
        )))
      }
    </div>
  )
}

export default AddressesList;