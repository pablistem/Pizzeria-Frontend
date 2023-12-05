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
  password2: string;
}
