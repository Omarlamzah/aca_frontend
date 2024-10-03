import axios from "axios";
import { backendUrl } from "../globalvar";
import { getCookie } from "../hooks/cookies";
import getCSRFToken from "../hooks/csrf";


export const getuserApi =async ()=>{
    
const token = getCookie("token");
if (token) {

  axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
  axios.defaults.withCredentials=true

}
   // await getCSRFToken();

const response = await axios.get(`${backendUrl}api/user`);
return response;
}