export interface ILoginPayload {
  email: string;
  password: string;
}

export interface ISignUpPayload {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IFormValues {
  name: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface IAuthContext {
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
  token: string;
  saveToken: (value: string) => void;
  setAuth: (value: boolean) => boolean;
}
