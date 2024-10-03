import axios from "axios";
 import getCSRFToken from "../../../hooks/csrf";
import { getCookie } from "../../../hooks/cookies";
import { backendUrl } from "../../../globalvar";
 



export const createquizApi =async (quizData)=>{
     
const token = getCookie("token");
if (token) {
  await getCSRFToken();
  axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
}
const response = await axios.post(`${backendUrl}api/admin/quizzes`,quizData,{
  headers:{'Content-Type': 'multipart/form-data'}
});
return response;
}