import axios from "axios";
 import getCSRFToken from "../../../hooks/csrf";
import { getCookie } from "../../../hooks/cookies";
import { backendUrl } from "../../../globalvar";
 


export const fetchAllquizApi =async ()=>{
    
const token = getCookie("token");
if (token) {
  await getCSRFToken();
  axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
}
const response = await axios.get(`${backendUrl}api/admin/quizzes`);
return response;
}