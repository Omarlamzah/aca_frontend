import axios from "axios";
import { getCookie } from "../../../../hooks/cookies";
import getCSRFToken from "../../../../hooks/csrf";
import { backendUrl } from "../../../../globalvar";

 


export const updatequestionApi =async ({questionid, QuestionText, IsBest})=>{
 const token = getCookie("token");
if (token) {
  await getCSRFToken();
  axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
}
 
const response = await axios.put(`${backendUrl}api/admin/questions/${questionid}`,{ QuestionText, IsBest});
return response;
}