/* eslint-disable react/prop-types */
import { Form, Formik, FormikHelpers } from 'formik';
import Modal from '../Modal/Modal';
import { IUpdateAddress } from '../../types/types';
import { updateAddressSchema } from '../../schemas/validates.schema';
import { ADDRESS_INPUTS } from '../const/inputs.auth';
import { updateAddressData } from '../../services/user.api';
import { errorAlert, toastAlertSuccess } from '../../services/alert';
import { AxiosError } from 'axios';
import UpdateInputForm from '../InputForm/UpdateInputForm';
import useAuth from '../../hooks/useAuth';

const AddressDetail = ({ data, open, setOpen }) => {
  const { setLoading } = useAuth();

  const onSubmit = async (
    values: IUpdateAddress,
    actions: FormikHelpers<IUpdateAddress>,
  ) => {
    const payloadUpdateAddress = {
      country: values.country,
      state: values.state,
      city: values.city,
      street: values.street,
      height: values.height,
      postalCode: values.postalCode,
    };

    try {
      await updateAddressData(data.id, payloadUpdateAddress);
      toastAlertSuccess('Dirección actualizada satisfactoriamente');
      setOpen(false);
      setLoading(true);
    } catch (error) {
      if (error instanceof AxiosError)
        errorAlert('Error', error?.response?.data);
    }

    actions.setSubmitting(false);
  };

  return (
    <Modal open={open}>
      <main className="bg-white p-6 rounded-xl w-96">
        <div
          id="close-modal-button"
          className="text-right font-bold text-[24px] cursor-pointer hover:text-red-error"
          onClick={() => setOpen(false)}
        >
          X
        </div>
        <header className="text-[20px] mb-4 text-center font-bold bg-white">
          Datos de dirección:
        </header>
        <Formik
          initialValues={{
            country: data.country,
            state: data.state,
            city: data.city,
            street: data.street,
            height: data.height,
            postalCode: data.postalCode,
          }}
          validationSchema={updateAddressSchema}
          onSubmit={onSubmit}
        >
          {({ values, handleChange }) => (
            <Form>
              <div>
                <label>País</label>
                <UpdateInputForm {...ADDRESS_INPUTS.country} onChange={handleChange} />
              </div>
              <div>
                <label>Estado/Provincia</label>
                <UpdateInputForm {...ADDRESS_INPUTS.state} onChange={handleChange} />
              </div>
              <div>
                <label>Ciudad</label>
                <UpdateInputForm {...ADDRESS_INPUTS.city} onChange={handleChange} />
              </div>
              <div>
                <label>Calle</label>
                <UpdateInputForm {...ADDRESS_INPUTS.street} onChange={handleChange} />
              </div>
              <div>
                <label>Altura</label>
                <UpdateInputForm {...ADDRESS_INPUTS.height} onChange={handleChange} />
              </div>
              <div>
                <label>Código Postal</label>
                <UpdateInputForm {...ADDRESS_INPUTS.postalCode} onChange={handleChange} />
              </div>
              <button
                type="submit"
                className="flex w-32 mt-4 justify-center rounded-full bg-logo-orange px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed"
                disabled={
                 values.country === data.country &&
                  values.state === data.state &&
                  values.city === data.city &&
                  values.street === data.street &&
                  values.height === data.height &&
                  values.postalCode === data.postalCode
                }
              >
                Actualizar
              </button>
            </Form>
          )}
        </Formik>
      </main>
    </Modal>
  );
};

export default AddressDetail;
