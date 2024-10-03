import axios from "axios";
import { backendUrl } from "../globalvar";
import getCSRFToken from "../hooks/csrf";

export const registerApi =async (userData)=>{
     await getCSRFToken();
    const response = await axios.post(`${backendUrl}register`, userData);
    return response;
    }
