export interface ILoginPayload {
  email: string;
  password: string;
}

export interface ISignUpPayload {
  email: string;
  password: string;
}

export interface IFormValues {
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface IProfile {
  id: number;
  avatar: string;
  name: string;
  lastName: string;
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
  street: string;
  height: number;
  postalCode: number;
}
