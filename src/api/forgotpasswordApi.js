import axios from "axios";
import getCSRFToken from "../hooks/csrf.js";
 import { backendUrl } from "../globalvar.js";

export const forgotpasswordApi = async (credentials)=>{
    await getCSRFToken();
    const response = await axios.post(`${backendUrl}forgot-password`, credentials);
    return  response;
}
