/* eslint-disable react/prop-types */
import { useState } from 'react';
import { IAddress } from '../../types/types';
import AddressDetail from './AddressDetail';
import useAddressDetail from '../../hooks/useAddressDetail';
import { removeAddress } from '../../services/user.api';
import useAuth from '../../hooks/useAuth';
import { AxiosError } from 'axios';
import { errorAlert } from '../../services/alert';

const AddressesList = ({ className, addresses }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { addressDetail, setAddresss } = useAddressDetail({
    onSuccess: () => setOpenModal(true),
  });
  const { setLoading } = useAuth();

  const getAddress = async (id: number) => {
    try {
      setAddresss(id);
    } catch (error) {
      if (error instanceof AxiosError)
        errorAlert('Error', error?.response?.data);
    }
  };

  const deleteAddress = async (id: number) => {
    try {
      await removeAddress(id);
      setLoading(true);
    } catch (error) {
      if (error instanceof AxiosError)
        errorAlert('Error', error?.response?.data);
    }
  }

  return (
    <div className={className}>
      {addresses.length === 0 ? (
        <p>No hay direcciones disponibles</p>
      ) : (
        addresses.map((address: IAddress) => (
          <>
            <ul>
              <li
                key={address.id}
                className='flex justify-between'
              >
                <p>{address.street} {address.height}, {address.city}</p>
                <div className='flex'>
                  <svg
                    className="h-4 w-4 cursor-pointer"
                    data-slot="icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    onClick={() => getAddress(address.id)}
                  >
                    <path d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"></path>
                  </svg>
                  <p className='h-4 w-4 font-bold cursor-pointer hover:text-red-error' onClick={() => deleteAddress(address.id)}>X</p>
                </div>
              </li>
            </ul>
            {addressDetail && (
              <AddressDetail
                setOpen={setOpenModal}
                open={openModal}
                data={addressDetail}
              />
            )}
          </>
        ))
      )}
    </div>
  );
};

export default AddressesList;
