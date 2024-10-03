import axios from "axios";
import { getCookie } from "../hooks/cookies";
import { backendUrl } from "../globalvar";
import getCSRFToken from "../hooks/csrf";

 

export const fetchpoinmentApi =async ()=>{
    
const token = getCookie("token");
if (token) {
   // await getCSRFToken();

  axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
}
const response = await axios.get(`${backendUrl}api/admin/points`);
return response;
}


// submet 
export const Submepointtapi =async (data)=>{
    
  const token = getCookie("token");
  if (token) {
      await getCSRFToken();
  
    axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
  }
  const response = await axios.post(`${backendUrl}api/admin/points`,data);
  return response;
  }