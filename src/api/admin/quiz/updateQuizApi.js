import axios from "axios";
 import getCSRFToken from "../../../hooks/csrf";
import { getCookie } from "../../../hooks/cookies";
import { backendUrl } from "../../../globalvar";
 



export const updateQuizApi =async (quizId,formData)=>{
  
const token = getCookie("token");
if (token) {
  axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
}
const response = await axios.post(`${backendUrl}api/admin/quizzes/${quizId}`, formData,
{
  headers:{'Content-Type': 'multipart/form-data'}
});
 
return response;
}