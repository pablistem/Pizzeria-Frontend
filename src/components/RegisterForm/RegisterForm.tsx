import { errorAlert, successAlert } from '../../services/alert';
import { signup } from '../../services/user.api';
import SubmitButton from '../Buttons/SubmitButton';
import { Formik, Form, ErrorMessage, FormikHelpers } from 'formik';
import { useNavigate } from 'react-router-dom';
import RegisterInput from './RegisterInput';
import { INPUTS_SIGNUP } from '../const/inputs.auth';
import { AxiosError } from 'axios';

// interface values form
interface FormValues {
  name: string;
  lastName: string;
  email: string;
  password: string;
  password2: string;
}

const RegisterForm = () => {
  const navigate = useNavigate();

  const validateForm = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    if (!values.name) {
      errors.name = 'El nombre es obligatorio';
    }

    if (!values.lastName) {
      errors.lastName = 'El apellido es obligatorio';
    }

    if (!values.email) {
      errors.email = 'El correo electrónico es obligatorio';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Correo electrónico no válido';
    }

    if (!values.password) {
      errors.password = 'La contraseña es obligatoria';
    }

    if (values.password !== values.password2) {
      errors.password2 = 'Las contraseñas deben coincidir';
    }

    return errors;
  };

  const onSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
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
      successAlert('Success', 'User registered successfully');
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
        validate={validateForm}
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
