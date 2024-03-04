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
  avatar: File;
  street: string;
  height: number;
  postalCode: number;
  age: number;
  phone: number;
}

export interface IProduct {
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface IAddress {
  country: string;
  state: string;
  city: string;
  address: string;
}
