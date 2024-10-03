import axios from "axios";
import { getCookie } from "../../hooks/cookies";
import { backendUrl } from "../../globalvar";
import getCSRFToken from "../../hooks/csrf";

 

export const submetQuizApi =async (useranswers)=>{
    
const token = getCookie("token");
if (token) {
    await getCSRFToken();

  axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
}
const response = await axios.post(`${backendUrl}api/quiz/submit`,{useranswers});
return response;
}