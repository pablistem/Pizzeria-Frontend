import icon from '../assets/icon_pizza_shop.jpg';
import { useState } from 'react'
import Modal from '../components/Modal/Modal';
import { fillProfileData } from '../services/user.api';
import { IUser } from '../types/types';
import { Form, FormikHelpers } from 'formik';
import { AxiosError } from 'axios';
import { errorAlert } from '../services/alert';

function UpdateProfile() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const onSubmit = async (
    values: IUser,
    actions: FormikHelpers<IUser>,
  ) => {
    const payloadUpdateProfile = {
      avatar: values.avatar,
      street: values.street,
      height: values.height,
      postalCode: values.postalCode,
      age: values.age,
      phone: values.phone,
    };

    try {
      await fillProfileData(payloadUpdateProfile)
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
          <Form>
            <main className="bg-white p-6 rounded-xl w-96">
            <div className="grid w-full min-h-full flex-col mt-50 justify-center">
              <h1 className="font-semibold text-center text-2xl">Editar perfil</h1>
              <div className="relative top-start w-32 justify-self-center">
                <img
                  src={icon}
                  alt="Pizzería Don Remolo Logo"
                  className="relative rounded-full opacity-50"
                />
                <div className='absolute bg-light-pink rounded-full start-11 top-11'>
                <svg
                  className="w-10 h-10 p-2 cursor-pointer"
                  data-slot="icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"></path>
                  <input type="file" name="avatar" id="avatar" />
                </svg>
              </div>
              
            </div>
            <div className='w-80 p-6'>
              <div className="relative mb-2 mt-5">
                <input 
                  type="text" 
                  id="street"
                  name="street"
                  className="w-full h-12 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-2xl peer focus:outline-none focus:border-gray-500 focus:shadow-sm"
                  placeholder="" 
                  autoComplete="off" />
                <label 
                  htmlFor="street"
                  className="absolute top-0 left-0 h-full px-3 py-5 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-7 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">Calle</label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="height"
                  name='height'
                  className="w-full mb-2 h-12 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-2xl peer focus:outline-none focus:border-gray-500 focus:shadow-sm"
                  placeholder=""
                  autoComplete="off" />
                <label
                  htmlFor="height"
                  className="absolute top-0 left-0 h-full px-3 py-5 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">Altura</label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="postal-code"
                  name="postal-code"
                  className="w-full mb-2 h-12 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-2xl peer focus:outline-none focus:border-gray-500 focus:shadow-sm"
                  placeholder=""
                  autoComplete="off" />
                <label
                  htmlFor="postal-code"
                  className="absolute top-0 left-0 h-full px-3 py-5 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">Código Postal</label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="age"
                  name="age"
                  className="w-full mb-2 h-12 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-2xl peer focus:outline-none focus:border-gray-500 focus:shadow-sm"
                  placeholder=""
                  autoComplete="off" />
                <label
                  htmlFor="age"
                  className="absolute top-0 left-0 h-full px-3 py-5 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">Edad</label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full mb-2 h-12 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-2xl peer focus:outline-none focus:border-gray-500 focus:shadow-sm"
                  placeholder=""
                  autoComplete="off" />
                <label
                  htmlFor="phone"
                  className="absolute top-0 left-0 h-full px-3 py-5 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">Teléfono</label>
              </div>
              <button
                id="open-modal-button"
                type="button"
                className="flex w-full text-white justify-center rounded-full bg-logo-orange mb-2 px-3 py-1.5 font-semibold shadow-sm hover:bg-red-error">
                    Guardar
              </button>
              <div id='close-modal-button' className="text-center font-bold text-logo-orange cursor-pointer" onClick={() => setOpenModal(!openModal)}>Cancelar</div>
            </div>
          </div>
        </main>
        </Form>
      </Modal>
    </>
  )
}

export default UpdateProfile