import React, { useEffect } from 'react';
import 'toastr/build/toastr.min.css';
import toastr from 'toastr';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers, activateuser, adminateuser } from '../../../store/admin/adminslice';
import Switch from '../../../component/switch/switch';
import Loadingv2 from '../../../component/loadingv2/loading';
 
const Usermanager = () => {
  const dispatch = useDispatch();
  const { users, userScores, loading, error, msg } = useSelector((state) => state.adminSlice);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  useEffect(() => {
    if (error) toastr.error(error);
  }, [error]);

  const handleActivateUser = (userId) => {
    dispatch(activateuser(userId));
  };

  const handleToggleAdminStatus = (userId) => {
    dispatch(adminateuser(userId));
  };

  const handleAdminSwitchChange = (userId, checked) => {
    // Handle admin switch change
    console.log(`Admin switch change for user ${userId}: ${checked}`);
    // You can dispatch an action or perform any other logic here
  };

  const handleActiveSwitchChange = (userId, checked) => {
    // Handle active switch change
    console.log(`Active switch change for user ${userId}: ${checked}`);
    // You can dispatch an action or perform any other logic here
  };
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div>
         {loading ? (<Loadingv2/>):  users && (
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">create date</th>
              <th className="border p-2">Is Admin</th>
              <th className="border p-2">Is Active</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="text-center">
                <td className="border p-2">{user.id}</td>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td>{formatDate(user.created_at)}</td>

                <td className="border p-2">
                  <Switch
                    checked={user.isadmin === '1'}
                    onChange={(e) => handleAdminSwitchChange(user.id, e.target.checked)}
                  />
                </td>
                <td className="border p-2">
                  <Switch
                    checked={user.isactive === '1'}
                    onChange={(e) => handleActiveSwitchChange(user.id, e.target.checked)}
                  />
                </td>
                <td className="border p-2">
                  <button
                    onClick={() => handleActivateUser(user.id)}
                    className={`${
                      user.isactive === '1' ? 'bg-red-500' : 'bg-green-500'
                    } text-white py-1 px-2 rounded`}
                  >
                    {user.isactive === '1' ? 'Deactivate' : 'Activate'}
                  </button>
                  <button
                    onClick={() => handleToggleAdminStatus(user.id)}
                    className={`${
                      user.isadmin === '1' ? 'bg-red-500' : 'bg-green-500'
                    } text-white py-1 px-2 rounded ml-2`}
                  >
                    {user.isadmin === '1' ? 'Deadmin' : 'Adminate'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
   
    </div>
  );
};

export default Usermanager;