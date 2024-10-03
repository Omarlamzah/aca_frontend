import axios from "axios";
import getCSRFToken from "../hooks/csrf";
 import { backendUrl } from "../globalvar.js";

export const loginApi = async (credentials)=>{
    await getCSRFToken();
    const response = await axios.post(`${backendUrl}login`, credentials);
    return  response;
}
