import { ILoginPayload } from "../types/types";
import {AxiosResponse, AxiosError } from "axios";
import Axios from '../services/axios.api'


const controller = new AbortController()

const login = async (payload:ILoginPayload): Promise<unknown> => {
    try {
        const res:AxiosResponse<any> = await Axios.post("/auth/login", payload, { signal: controller.signal })
        return res.data
    } catch (error) {
        if(error instanceof AxiosError){
            throw new Error(error.message)
        }
    }
}

export default login




