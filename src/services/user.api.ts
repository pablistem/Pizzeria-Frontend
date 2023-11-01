import { loginInterface } from "../types/types";
import {AxiosResponse} from "axios";
import Axios from '../services/axios.api'

const controller = new AbortController()

const login = (data:loginInterface) => {
    Axios.post("/auth/login", data, { signal: controller.signal })
    .then((res: AxiosResponse<any>) => {
        console.log(res)
    }).catch((err) => {
        console.log(err.message)
    })
}

export default login




