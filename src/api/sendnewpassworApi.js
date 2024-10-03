import axios from "axios";
import getCSRFToken from "../hooks/csrf.js";
 import { backendUrl } from "../globalvar.js";

export const sendnewpassworApi = async (data)=>{
    await getCSRFToken();
    const response = await axios.post(`${backendUrl}reset-password`, data);
    return  response;
}
