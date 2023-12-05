import { errorAlert, successAlert } from '../../services/alert';
import { signup } from '../../services/user.api';
import SubmitButton from '../Buttons/SubmitButton';
import { Formik, Form, ErrorMessage, FormikHelpers } from 'formik';
import { useNavigate } from 'react-router-dom';
import RegisterInput from './RegisterInput';
import { INPUTS_SIGNUP } from '../const/inputs.auth';
import { AxiosError } from 'axios';
import { IFormValues } from '../../types/types';
import { registerSchema } from '../../schemas/validates.schema';

const RegisterForm = () => {
  const navigate = useNavigate();

  const onSubmit = async (
    values: IFormValues,
    actions: FormikHelpers<IFormValues>,
  ) => {
    const payloadRegister = {
      name: values.name,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    };

    try {
      const response = await signup(payloadRegister);
      console.log(response);
      successAlert('Success', 'Usuario Registrado Exitosamente');
      navigate('/login');
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.data.statusCode === 409) {
          errorAlert(
            'Error',
            'Este usuario ya ha sido registrado. Por favor cree un nuevo usuario',
          );
        } else {
          errorAlert('Error', err.message);
        }
      }

      console.log(err);
    }

    actions.setSubmitting(false);
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <Formik
        initialValues={{
          name: '',
          lastName: '',
          email: '',
          password: '',
          password2: '',
        }}
        validationSchema={registerSchema}
        onSubmit={onSubmit}
      >
        <Form
          className="space-y-6"
          action="#"
          method="POST"
          data-cy="form-register"
        >
          <div>
            <div>
              <RegisterInput {...INPUTS_SIGNUP.name} />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>
          <div>
            <div>
              <RegisterInput {...INPUTS_SIGNUP.lastName} />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>
          <div>
            <div>
              <RegisterInput {...INPUTS_SIGNUP.email} />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>
          <div>
            <div>
              <RegisterInput {...INPUTS_SIGNUP.password} />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>
          <div>
            <div>
              <RegisterInput {...INPUTS_SIGNUP.password2} />
              <ErrorMessage
                name="password2"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <SubmitButton buttonText={'Registrarme'} />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
