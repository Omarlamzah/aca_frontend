import axios from 'axios';
import { backendUrl } from "../globalvar.js";
import { getCookie } from '../hooks/cookies.js';
import getCSRFToken from '../hooks/csrf.js';
export const logoutApiCall = async () => {
 


    const token = getCookie('token');  
    await getCSRFToken();

    if (!token) {
      throw new Error('No token found. User may not be authenticated.');
    }
  
    try {
        await getCSRFToken();
        axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
        const response = await axios.post(`${backendUrl}logout`, null, {
       
      });
  
      if (response.status !== 204) {
        throw new Error(`Logout failed with status ${response.status}`);
      }
  
      // Successful logout
      console.log('Logout successful');
    } catch (error) {
      console.error('Logout error:', error);
      throw error; // Rethrow the error to handle it elsewhere if needed
    }



};

 