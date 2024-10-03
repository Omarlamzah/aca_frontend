import axios from "axios";
import { getCookie } from "../../hooks/cookies";
import { backendUrl } from "../../globalvar";
import getCSRFToken from "../../hooks/csrf";

 

export const startquizvalidationApi =async (identify)=>{
    
const token = getCookie("token");
if (token) {
    await getCSRFToken();

  axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
}
const response = await axios.get(`${backendUrl}api/validation/next/${identify} `);
return response;
}