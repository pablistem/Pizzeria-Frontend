export const INPUTS_SIGNUP = {
  name: {
    type: 'text',
    id: 'name',
    name: 'name',
    placeholder: 'Nombre',
    autoComplete: 'given-name',
    className:
      'block w-full rounded-xl border-1 py-3 text-gray-900 shadow-md ring-1 p-3 ring-inset ring-input-grey placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6',
  },
  lastName: {
    id: 'lastName',
    name: 'lastName',
    type: 'Text',
    placeholder: 'Apellido',
    autoComplete: 'family-name',
  },
  email: {
    id: 'email',
    name: 'email',
    type: 'email',
    placeholder: 'Correo electrónico',
    autoComplete: 'email',
  },
  password: {
    id: 'password',
    name: 'password',
    type: 'password',
    placeholder: 'Contraseña',
  },
  password2: {
    id: 'password2',
    name: 'password2',
    type: 'password',
    placeholder: 'Repetir Contraseña',
  },
};

export const INPUTS_LOGIN = {
  email: {
    id: 'email',
    name: 'email',
    type: 'Text',
    placeholder: 'Email direction',
  },
  password: {
    id: "password",
    name: "password",
    type: "password",
    placeholder:"Password"
  }
};
