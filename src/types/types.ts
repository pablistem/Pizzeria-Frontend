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
  username: string;
  name: string;
  lastName: string;
  age: number;
  phone: number;
  addresses: [{
    id: number;
    country: string;
    state: string;
    city: string;
    street: string;
    height: number;
    postalCode: number;
  }]
}

export interface ICreateProfile {
  avatar: string;
  username: string;
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
  id: number;
  country: string;
  state: string;
  city: string;
  street: string;
  height: number;
  postalCode: number;
}

export interface ICreateAddress {
  country: string;
  state: string;
  city: string;
  street: string;
  height: number;
  postalCode: number;
  profile: number;
}
