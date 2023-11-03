import { loginInterface } from "../types/types";
import { AxiosError, AxiosResponse } from "axios";
import Axios from "../services/axios.api";

const controller = new AbortController();

const login = async (payload: loginInterface): Promise<unknown> => {
  try {
    const res: AxiosResponse<unknown> = await Axios.post(
      "/auth/login",
      payload,
      {
        signal: controller.signal,
      },
    );
    return res;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    }
  }
};

export default login;
