import { object, string, ObjectSchema } from 'yup';
import { ILoginPayload } from '../types/types';

export const loginSchema: ObjectSchema<ILoginPayload> = object({
  email: string().required('Este campo es requerido').email('Email inválido'),
  password: string().required('Este campo es requerido'),
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
