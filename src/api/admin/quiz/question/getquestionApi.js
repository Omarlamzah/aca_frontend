import axios from "axios";
 import getCSRFToken from "../../../../hooks/csrf";
import { backendUrl } from "../../../../globalvar";
import { getCookie } from "../../../../hooks/cookies";


export const getquestionApi =async ()=>{
    
const token = getCookie("token");
if (token) {
  await getCSRFToken();
  axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
}
const response = await axios.get(`${backendUrl}api/admin/questions`,);
return response;
}