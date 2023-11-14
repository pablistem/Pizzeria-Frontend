import { SweetAlertIcon } from "sweetalert2";


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

export interface IParamsAlert {
  title: string;
  message: string;
  btnConfirm?: boolean; 
  btnCancel?: boolean; 
  icon: SweetAlertIcon; 
  toast?: boolean;
}