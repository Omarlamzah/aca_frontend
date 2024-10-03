import axios from 'axios';
import { backendUrl } from '../../globalvar';
import { getCookie } from '../../hooks/cookies';
import getCSRFToken from '../../hooks/csrf';

export const removeProfileApi = async () => {
  const token = getCookie('token');
  
  if (token) {
    await getCSRFToken();
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  try {
    const response = await axios.delete(`${backendUrl}api/user/remove`);
    
    // Check for a successful response
    if (response.status === 200) {
      // Handle success, e.g., show a success message
      console.log(response.data.message);
    } else {
      // Handle other status codes or error responses
      console.error('Failed to delete user account:', response.data);
    }

    return response;
  } catch (error) {
     console.error('Error deleting user account:', error.message);
    throw error;
  }
};
