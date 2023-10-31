import { loginInterface } from "../types/types";
import {AxiosResponse} from "axios";
import axios from '../services/axios.api'

const controller = new AbortController()

const login = (data:loginInterface) => {
    axios.post("/auth/login", data, { signal: controller.signal })
    .then((res: AxiosResponse<any>) => {
        console.log(res)
    }).catch((err) => {
        console.log(err.message)
    })
}

export default login




