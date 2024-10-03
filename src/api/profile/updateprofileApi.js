import axios from "axios";
import { backendUrl } from "../../globalvar";
import { getCookie } from "../../hooks/cookies";
import getCSRFToken from "../../hooks/csrf";
 

export const updateprofileApi =async (updatedUser)=>{
    
const token = getCookie("token");
if (token) {
  await getCSRFToken();
 
  axios.defaults.headers.common = { 'Authorization': `Bearer ${token}`,  };
}
const response = await axios.put(`${backendUrl}api/user/update`,{updatedUser});
return response;
}