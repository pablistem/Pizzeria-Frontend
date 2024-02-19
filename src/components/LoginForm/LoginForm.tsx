import { Link, useNavigate } from 'react-router-dom';
import { INPUTS_LOGIN } from '../const/inputs.auth';
import { login } from '../../services/user.api';
import { errorAlert, toastAlertSuccess } from '../../services/alert';
import { ErrorMessage, Formik, Form } from 'formik';
import { ILoginPayload } from '../../types/types';
import { loginSchema } from '../../schemas/validates.schema';
import './Login.css';
import InputForm from '../InputForm/InputForm';

export const LoginForm = () => {
  const navigate = useNavigate();

  const onSubmit = async (values: ILoginPayload) => {
    const loginPayload = {
      email: values.email,
      password: values.password,
    };

    try {
      await login(loginPayload);
      toastAlertSuccess('Logeado satisfactoriamente');
      navigate('/', { replace: true });
    } catch (error) {
      errorAlert('Error', (error as Error).message);
    }
  };
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        <Form className="space-y-6" method="POST" data-cy="login-form">
          <div className="text-3xl max-sm:hidden max-lg:hidden lg:text-3xl">
            <p className=" justify-center">Hace tu pedido</p>
            <p className="justify-center">en pocos minutos</p>
          </div>

          <div className="">
            <InputForm {...INPUTS_LOGIN.email} />
            <ErrorMessage
              name="email"
              render={(msg) => <p style={{ color: '#ae3232' }}>{msg}</p>}
            />
          </div>
          <div className="">
            <InputForm {...INPUTS_LOGIN.password} />
            <ErrorMessage
              name="password"
              render={(msg) => <p style={{ color: '#ae3232' }}>{msg}</p>}
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="flex w-32 justify-center rounded-full bg-logo-orange px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Iniciar sesión
            </button>
          </div>

          <div className="font-semibold text-sm text-slate-500 text-center md:text-left flex justify-center text-logo-orange mt-9">
            No tienes una cuenta?{' '}
            <Link
              className="text-logo-orange hover:underline hover:underline-offset-4"
              to="/register"
            >
              Registrate
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
