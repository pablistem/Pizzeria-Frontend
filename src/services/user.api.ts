import { IloginInterface } from "../types/types";
import {AxiosResponse } from "axios";
import Axios from '../services/axios.api'


const controller = new AbortController()

const login = async (payload:IloginInterface): Promise<any> => {
    try {
        const res:AxiosResponse<any> = await Axios.post("/auth/login", payload, { signal: controller.signal })
        return res
    } catch (error: any) {
        throw new Error(error.response.statusText)
    }
}

export default login




