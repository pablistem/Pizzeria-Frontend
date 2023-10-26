
import { loginInterface } from "../types/types";
import axios, {AxiosResponse} from "axios";



const urlLogin = "http://localhost:9000/auth/login"

const controller = new AbortController()

const login = (data:loginInterface) => {
    axios.post(urlLogin, data, { signal: controller.signal })
    .then((res: AxiosResponse<any>) => {
        console.log(res)
    }).catch((err) => {
        console.log(err.message)
    })
}



export default login

