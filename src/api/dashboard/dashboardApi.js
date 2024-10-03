import axios from "axios";
import { backendUrl } from "../../globalvar.js";
import { getCookie } from "../../hooks/cookies.js";
import getCSRFToken from "../../hooks/csrf.js";

export const dashboardApi = async (credentials)=>{
    const token = getCookie("token");

    if (token) {
        await getCSRFToken();

      axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
    }
    const response = await axios.get(`${backendUrl}api/user/dashboard`);
    return response;
}
