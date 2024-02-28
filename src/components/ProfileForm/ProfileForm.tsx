import { useState } from 'react';
import Modal from '../Modal/Modal';
import { AddressForm } from '../AddressForm/Address';

const ProfileForm = () => {
  const [ openModal, setOpenModal ] = useState<boolean>(false)

  return (
    <>
    <div>
      <AddressForm profile={1} />
    </div>
    <div 
        className="text-center mt-4 font-semibold text-logo-orange hover:text-red-error cursor-pointer" 
        onClick={() => setOpenModal(!openModal)}>
      Completar
    </div>
    <Modal open={openModal}>
        Ingrese sus datos
    </Modal>
    </>
  )
}

export default ProfileForm;