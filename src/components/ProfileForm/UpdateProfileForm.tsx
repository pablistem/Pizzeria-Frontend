import { useState } from 'react'
import Modal from '../Modal/Modal';
import { updateProfile } from '../../services/user.api';
import { IProfile } from '../../types/types';
import { FormikHelpers, Formik } from 'formik';
import { AxiosError } from 'axios';
import { errorAlert } from '../../services/alert';
import { updateProfileSchema } from '../../schemas/validates.schema';
import UploadImage from '../UploadImage/UploadImage';
import { INPUTS_PROFILE } from '../const/inputs.profile';

function UpdateProfile() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const onSubmit = async (
    values: IProfile,
    actions: FormikHelpers<IProfile>,
  ) => {
    const payloadUpdateProfile = {
      id: values.id,
      avatar: values.avatar,
      name: values.name,
      lastName: values.lastName,
      age: values.age,
      phone: values.phone,
    };

    try {
      await updateProfile(payloadUpdateProfile)
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error?.response?.data.statusCode === 404) {
          errorAlert('Error', 'Perfil no encontrado!')
        } else {
          errorAlert('Error', error.message)
        }
      }
    }
    actions.setSubmitting(false);
  }

  return (
    <>
      <div className="justify-self-end cursor-pointer">
        <svg
          className="h-6 w-6 "
          data-slot="icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          onClick={() => setOpenModal(!openModal)}
        >
          <path d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"></path>
        </svg>
      </div>
      <Modal open={openModal} >
        <Formik 
          initialValues={{
            id: 1,
            avatar: 'image',
            name: 'user',
            lastName: 'user',
            age: 30,
            phone: 2610000000,
            }} 
            validationSchema={updateProfileSchema} 
            onSubmit={onSubmit}>
          <form>
            <main className="bg-white p-6 rounded-xl w-96">
              <div className="grid w-full min-h-full flex-col mt-50 justify-center">
                <h1 className="font-semibold text-center text-2xl">Editar perfil</h1>
                <div className="relative top-start w-32 justify-self-center">
                  <UploadImage />
                </div>
                <div className='w-80 p-6'>
                  <div className="relative mb-2 mt-5">
                    <input {...INPUTS_PROFILE.name} />
                    <label 
                      htmlFor="name"
                      className="absolute top-0 left-0 h-full px-3 py-5 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-7 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">Nombre</label>
                  </div>
                  <div className="relative">
                    <input {...INPUTS_PROFILE.lastName} />
                    <label
                      htmlFor="last-name"
                      className="absolute top-0 left-0 h-full px-3 py-5 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">Altura</label>
                  </div>
                  <div className="relative">
                    <input {...INPUTS_PROFILE.age} />
                    <label
                      htmlFor="age"
                      className="absolute top-0 left-0 h-full px-3 py-5 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">Edad</label>
                  </div>
                  <div className="relative">
                    <input {...INPUTS_PROFILE.phone} />
                    <label
                      htmlFor="phone"
                      className="absolute top-0 left-0 h-full px-3 py-5 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">Teléfono</label>
                  </div>
                  <button
                    id="open-modal-button"
                    type="submit"
                    className="flex w-full text-white justify-center rounded-full bg-logo-orange mb-2 px-3 py-1.5 font-semibold shadow-sm hover:bg-red-error">
                      Guardar
                  </button>
                  <div id='close-modal-button' className="text-center font-bold text-logo-orange cursor-pointer" onClick={() => setOpenModal(!openModal)}>Cancelar</div>
                </div>
              </div>
            </main>
          </form>
        </Formik>
      </Modal>
    </>
  )
}

export default UpdateProfile