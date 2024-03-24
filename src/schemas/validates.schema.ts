import { object, string, ObjectSchema, mixed, number } from 'yup';
import { ILoginPayload } from '../types/types';

export const loginSchema: ObjectSchema<ILoginPayload> = object({
  email: string()
    .required('Tenés que ingresar el email')
    .email('Email inválido'),
  password: string().required('Tenés que ingresar la contraseña'),
});

export const registerSchema = object().shape({
  email: string().email('Email inválido').required('El email es obligatorio'),
  password: string().required('La contraseña es obligatoria'),
  password2: string()
    .required('Debes confirmar la contraseña')
    .test('match', 'Los campos tienen que coincidir', function (value) {
      return value === this?.parent.password;
    }),
});

export const createProfileSchema = object().shape({
  avatar: mixed(),
  username: string().required('Debes ingresar un nombre de usuario'),
  name: string().required('Debes ingresar un nombre'),
  lastName: string().required('Debes ingresar un apellido'),
  age: number().required('Debes ingresar una edad'),
  phone: number().required('Debes ingresar un número de teléfono'),
});

export const updateProfileSchema = object().shape({
  avatar: mixed(),
  username: string(),
  name: string(),
  lastName: string(),
  age: number(),
  phone: number(),
});

export const createAddressSchema = object().shape({
  country: string().required(),
  state: string().required(),
  city: string().required(),
  street: string().required(),
  height: number().required(),
  postalCode: number().required(),
});

export const updateAddressSchema = object().shape({
  country: string(),
  state: string(),
  city: string(),
  street: string(),
  height: number(),
  postalCode: number(),
});
