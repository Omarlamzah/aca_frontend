import axios from "axios";
import { getCookie } from "../../../../hooks/cookies";
import getCSRFToken from "../../../../hooks/csrf";
import { backendUrl } from "../../../../globalvar";


export const getassociateApi =async ()=>{
    
const token = getCookie("token");
if (token) {
  await getCSRFToken();
  axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
}
const response = await axios.get(`${backendUrl}api/admin/associate`,);
return response;
}