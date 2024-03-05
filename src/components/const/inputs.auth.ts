export const INPUTS_SIGNUP = {
  name: {
    type: 'text',
    id: 'name',
    name: 'name',
    placeholder: 'Nombre',
    autoComplete: 'given-name',
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
    id: 'password',
    name: 'password',
    type: 'password',
    placeholder: 'Password',
  },
};

export const ADDRESS_INPUTS = {
  country: {
    id: 'country',
    name: 'country',
    type: 'text',
  },
  state: {
    id: 'state',
    name: 'state',
    type: 'text',
  },
  city: {
    id: 'city',
    name: 'city',
    type: 'text',
  },
  street: {
    id: 'street',
    name: 'street',
    type: 'text',
  },
  height: {
    id: 'height',
    name: 'height',
    type: 'text',
  },
  postalCode: {
    id: 'postal-code',
    name: 'postal-code',
    type: 'text',
  },
};
