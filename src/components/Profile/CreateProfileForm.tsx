import Modal from '../Modal/Modal';
import { createProfile } from '../../services/user.api';
import { IProfile } from '../../types/types';
import { FormikHelpers, Formik, Form, Field, ErrorMessage } from 'formik';
import { AxiosError } from 'axios';
import { errorAlert } from '../../services/alert';
import { createProfileSchema } from '../../schemas/validates.schema';
import UploadImage from '../UploadImage/UploadImage';
import { INPUTS_PROFILE } from '../const/inputs.profile';

function CreateProfile ({ openModal, setOpenModal }) {

  const onSubmit = async (
    values: IProfile,
    actions: FormikHelpers<IProfile>,
  ) => {
    const payloadCreateProfile = {
      id: values.id,
      avatar: values.avatar,
      username: values.username,
      name: values.name,
      lastName: values.lastName,
      age: values.age,
      phone: values.phone,
    };

    try {
      await createProfile(payloadCreateProfile);
      setOpenModal(false);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error?.response?.data.statusCode === 409) {
          errorAlert('Error', 'El perfil ya ha sido creado');
        } else if (error?.response?.data.statusCode === 422) {
          errorAlert('Error', 'Archivo no compatible');
        }
      }
    }
    actions.setSubmitting(false);
  }

  return (
    <Modal open={openModal}>
      <Formik 
        initialValues={{
          id: 1,
          avatar: 'image',
          username: 'user',
          name: 'user',
          lastName: 'user',
          age: 30,
          phone: 2610000000,
        }}
        validationSchema={createProfileSchema}
        onSubmit={onSubmit}>
          <Form 
            action="#"
            method="POST"
            data-cy="form-register"
          >
            <main className="bg-white p-6 rounded-xl w-96">
              <div className="grid w-full min-h-full flex-col mt-50 justify-center">
                <h1 className="font-semibold text-center text-2xl">Completar perfil</h1>
                <div className="relative top-start w-32 justify-self-center">
                  <UploadImage />
                </div>
                <div className='w-80 p-6'>
                  <div className="relative mb-2 mt-5">
                    <Field {...INPUTS_PROFILE.username} />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="error-validate"
                    />
                    <label 
                      htmlFor="username"
                      className="absolute top-0 left-0 h-full px-3 py-5 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-7 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">Nombre</label>
                  </div>
                  <div className="relative mb-2 mt-5">
                    <Field {...INPUTS_PROFILE.name} />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error-validate"
                    />
                    <label 
                      htmlFor="name"
                      className="absolute top-0 left-0 h-full px-3 py-5 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-7 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">Nombre</label>
                  </div>
                  <div className="relative">
                    <Field {...INPUTS_PROFILE.lastName} />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="error-validate"
                    />
                    <label
                      htmlFor="last-name"
                      className="absolute top-0 left-0 h-full px-3 py-5 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">Apellido</label>
                  </div>
                  <div className="relative">
                    <Field {...INPUTS_PROFILE.age} />
                    <ErrorMessage
                      name="age"
                      component="div"
                      className="error-validate"
                    />
                    <label
                      htmlFor="age"
                      className="absolute top-0 left-0 h-full px-3 py-5 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">Edad</label>
                  </div>
                  <div className="relative">
                    <Field {...INPUTS_PROFILE.phone} />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="error-validate text-[14px]"
                    />
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
                </div>
              </div>
            </main>
          </Form>
      </Formik>
    </Modal>
  )
}

export default CreateProfile;