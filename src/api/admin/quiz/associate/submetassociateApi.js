import axios from "axios";
import { getCookie } from "../../../../hooks/cookies";
import getCSRFToken from "../../../../hooks/csrf";
import { backendUrl } from "../../../../globalvar";

 


export const submetassociateApi =async (data)=>{
    
const token = getCookie("token");
if (token) {
  await getCSRFToken();
  axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
}
const response = await axios.post(`${backendUrl}api/admin/submetassociate`,data);
return response;
}