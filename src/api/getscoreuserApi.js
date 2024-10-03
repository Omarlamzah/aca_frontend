import axios from "axios";
import { backendUrl } from "../globalvar";
import { getCookie } from "../hooks/cookies";


export const getscoreuserApi =async ()=>{
    
const token = getCookie("token");
if (token) {
  axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
}
const response = await axios.get(`${backendUrl}api/user/myscore`);
return response;
}