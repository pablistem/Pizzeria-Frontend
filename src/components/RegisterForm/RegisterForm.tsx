/* eslint-disable prettier/prettier */
import SubmitButton from '../Buttons/SubmitButton';
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';

interface FormValues {
  name: string;
  lastName: string;
  email: string;
  password: string;
  password2: string;
}

const RegisterForm = () => {
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

  const onSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    console.log(values);
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
        <Form className="space-y-6" action="#" method="POST">
          <div>
            <div>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Nombre"
                autoComplete="given-name"
                className="block w-full rounded-xl border-1 py-3 text-gray-900 shadow-md ring-1 p-3 ring-inset ring-input-grey placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>
          <div>
            <div>
              <Field
                id="lastName"
                name="lastName"
                type="Text"
                placeholder="Apellido"
                required
                autoComplete="family-name"
                className="block w-full rounded-xl border-1 py-3 text-gray-900 shadow-md ring-1 p-3 ring-inset ring-input-grey placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>
          <div>
            <div>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Correo electrónico"
                required
                autoComplete="email"
                className="block w-full rounded-xl border-1 py-3 text-gray-900 shadow-md ring-1 p-3 ring-inset ring-input-grey placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>
          <div>
            <div>
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="Contraseña"
                required
                className="block w-full rounded-xl border-1 py-3 text-gray-900 shadow-md ring-1 p-3 ring-inset ring-input-grey placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>
          <div>
            <div>
              <Field
                id="password2"
                name="password2"
                type="password"
                placeholder="Repetir Contraseña"
                required
                className="block w-full rounded-xl border-1 py-3 text-gray-900 shadow-md ring-1 p-3 ring-inset ring-input-grey placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
              />
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
