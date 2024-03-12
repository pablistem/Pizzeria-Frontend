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

export interface IUser {
  name: string;
  direction: string;
  email: string;
  telephone: number;
}
export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  stock: number;
}
