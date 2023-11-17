import Swal from "sweetalert2";


export const successAlert = (title: string, message: string)=>{
    Swal.fire(title, message, 'success')
}

export const errorAlert = (title: string, message: string)=>{
    Swal.fire(title, message, 'error')
}

export const warningAlert = (title: string, message: string, callback: Function)=>{
    Swal.fire({
        title: title,
        text: message,
        showCancelButton: true,
        showConfirmButton: true,
        icon: 'question'
    }).then(result => {
        if(result.isConfirmed){
            callback()
        }
    })
}

export const toastAlertSuccess = (title: string, message: string)=>{
    Swal.fire({
        title,
        text: message,
        icon: 'success',
        toast: true,
        timer: 1200,
        position: 'center-right'
    })
}

export const toastAlertError = (title: string, message: string)=>{
    Swal.fire({
        title,
        text: message,
        icon: 'error',
        toast: true,
        timer: 1200,
        position: 'center-right'
    })
}