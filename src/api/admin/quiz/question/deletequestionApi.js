import axios from "axios";
import { getCookie } from "../../../../hooks/cookies";
import getCSRFToken from "../../../../hooks/csrf";
import { backendUrl } from "../../../../globalvar";

 


export const deletequestionApi =async (id)=>{
    
const token = getCookie("token");
if (token) {
  await getCSRFToken();
  axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
}
const response = await axios.delete(`${backendUrl}api/admin/questions/${id}`);
return response;
}