import { object, string, ObjectSchema, mixed, number } from 'yup';
import { ILoginPayload } from '../types/types';

export const loginSchema: ObjectSchema<ILoginPayload> = object({
  email: string()
    .required('Tenés que ingresar el email')
    .email('Email inválido'),
  password: string().required('Tenés que ingresar la contraseña'),
});

export const registerSchema = object().shape({
  name: string().required('El nombre es obligatorio'),
  lastName: string().required('El apellido es obligatorio'),
  email: string().email('Email inválido').required('El email es obligatorio'),
  password: string().required('La contraseña es obligatoria'),
  password2: string()
    .required('Debes confirmar la contraseña')
    .test('match', 'Los campos tienen que coincidir', function (value) {
      return value === this?.parent.password;
    }),
});

export const updateProfile = object().shape({
  avatar: mixed().test('fileSize', 'El archivo es demasiado grande', (value) => value && value.size <= 1000000 ),
  street: string(),
  height: string(),
  postalCode: number(),
  age: number(),
  phone: number(),
})

export const addressSchema = object().shape({
  country: string().required(),
  state: string().required(),
  city: string().required(),
  address: string().required(),
})
