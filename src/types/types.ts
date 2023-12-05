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

export interface IAttributesInput {
  id: React.HTMLInputTypeAttribute;
  name: React.HTMLInputTypeAttribute;
  type: React.HTMLInputTypeAttribute;
  placeholder: React.HTMLInputTypeAttribute;
}

export interface IFormValues {
  name: string;
  lastName: string;
  email: string;
  password: string;
  password2: string;
}
