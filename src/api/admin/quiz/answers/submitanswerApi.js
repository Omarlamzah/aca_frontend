import axios from "axios";
import { getCookie } from "../../../../hooks/cookies";
import getCSRFToken from "../../../../hooks/csrf";
import { backendUrl } from "../../../../globalvar";

 


export const submitanswerApi =async ({answerupdateid, answerupdatetext, answerupdatetiscorrect})=>{
 
const token = getCookie("token");
if (token) {
  await getCSRFToken();
  axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
}
const response = await axios.put(`${backendUrl}api/admin/updateanswer/${answerupdateid}`,{ answerupdatetext, answerupdatetiscorrect});
return response;
}