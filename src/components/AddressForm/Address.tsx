import { useState } from "react"; 
import { Formik, Form, ErrorMessage } from "formik";
import { errorAlert, toastAlertSuccess } from '../../services/alert';
import { addressSchema } from "../../schemas/validates.schema";
import { IAddress } from "../../types/types";
import Modal from "../Modal/Modal";
import InputForm from "../InputForm/InputForm";
import { addAddressData } from "../../services/user.api";
import { ADDRESS_INPUTS } from "../const/inputs.auth";

export const AddressForm = ({ profile }) => {
    const [ openModal, setOpenModal ] = useState<boolean>(false);

    const onSubmit = async (values: IAddress) => {
      const addressData = {
        country: values.country,
        state: values.state,
        city: values.city,
        address: values.address,
        profile: profile,
      };

      try {
        await addAddressData(addressData);
        toastAlertSuccess('Logeado satisfactoriamente');
        setOpenModal(false);
      } catch (error) {
        errorAlert('Error', (error as Error).message);
      }
    }

  return (
    <>
      <button
        id="open-modal-button"
        type="button"
        className="flex w-full text-white justify-center rounded-full bg-logo-orange mb-2 px-3 py-1.5 font-semibold shadow-sm hover:bg-red-error"
        onClick={() => setOpenModal(true)}>
          Añadir dirección
        </button>
      <Modal open={openModal}>
        <main className="bg-white p-6 rounded-xl w-96">
          <div id='close-modal-button' className="text-right font-bold text-[24px] cursor-pointer hover:text-red-error" onClick={() => setOpenModal(!openModal)}>X</div>
          <header className="text-[20px] mb-4 text-center font-bold bg-white">Ingresar datos:</header>
          <Formik 
            initialValues={{ 
              country: '',
              state: '',
              city: '',
              address: ''
            }}
            validationSchema={addressSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <div>
                <label>País</label>
                <InputForm {...ADDRESS_INPUTS.country}></InputForm>
                <ErrorMessage 
                  name="country"
                  render={(msg => <p style={{ color: '#ae3232' }}>{msg}</p>)}
                ></ErrorMessage>
              </div>
              <div>
                <label>Estado/Provincia</label>
                <InputForm {...ADDRESS_INPUTS.state}></InputForm>
                <ErrorMessage 
                  name="state"
                  render={(msg => <p style={{ color: '#ae3232' }}>{msg}</p>)}
                ></ErrorMessage>
              </div>
              <div>
                <label>Ciudad</label>
                <InputForm {...ADDRESS_INPUTS.city}></InputForm>
                <ErrorMessage 
                  name="city"
                  render={(msg => <p style={{ color: '#ae3232' }}>{msg}</p>)}
                ></ErrorMessage>
              </div>
              <div>
                <label>Domicilio</label>
                <InputForm {...ADDRESS_INPUTS.address}></InputForm>
                <ErrorMessage 
                  name="address"
                  render={(msg => <p style={{ color: '#ae3232' }}>{msg}</p>)}
                ></ErrorMessage>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="flex w-32 mt-4 justify-center rounded-full bg-logo-orange px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Añadir
                </button>
              </div>
            </Form>
          </Formik>
        </main>
      </Modal>
    </>
  )
}