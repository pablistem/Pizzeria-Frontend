import { useState } from 'react'
import Modal from '../components/Modal/Modal';
import { createProfile } from '../services/user.api';
import { IProfile } from '../types/types';
import { FormikHelpers, Formik } from 'formik';
import { AxiosError } from 'axios';
import { errorAlert } from '../services/alert';
import { createProfileSchema } from '../schemas/validates.schema';
import UploadImage from '../components/UploadImage/UploadImage';

function CreateProfile () {
  const [ openModal, setOpenModal ] = useState<boolean>(false);

  const onSubmit = async (
    values: IProfile,
    actions: FormikHelpers<IProfile>,
  ) => {
    const payloadCreateProfile = {
      id: values.id,
      avatar: values.avatar,
      name: values.name,
      lastName: values.lastName,
      age: values.age,
      phone: values.phone,
    };

    try {
      await createProfile(payloadCreateProfile)
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
}

export default CreateProfile;