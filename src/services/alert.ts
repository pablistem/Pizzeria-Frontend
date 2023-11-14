import Swal from "sweetalert2";
import { IParamsAlert } from "../types/types";

export const alertModule = ({title, message,  btnConfirm = true, btnCancel = false , icon, toast = false}: IParamsAlert)=>{
        Swal.fire({
            title: title,
            text: message,
            icon: icon,
            showCancelButton: btnCancel,
            showConfirmButton: btnConfirm,
            toast: toast
        })
}