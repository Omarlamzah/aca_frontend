import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../hooks/cookies';
import { getUser, updateauthntiactiontofalse} from '../store/auth/loginslice';
import { deleteAccount, updateProfile } from '../store/profile/profileslice';
import Loader from '../component/loading/loading';
import 'toastr/build/toastr.min.css';  
import toastr from  "toastr";
import  Swal from "sweetalert2";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.loginslice);
  const {status,loading,error,msg} = useSelector((state) => state.profileslice);

  
  const [updatedUser, setUpdatedUser] = useState({ name: '', email: '' });
 

 

 


  const removeProfileClick = async () => {
    if (user) {

      Swal.fire({
        title: 'Are you sure?',
        text: 'You want to remove the account. It cannot be recovered, and you should create one again!',
        icon: 'warning',
         showCancelButton: true,
        confirmButtonText: "remove acount",
       }).then((result) => {
         if (result.isConfirmed) {
           dispatch(deleteAccount());
            dispatch( updateauthntiactiontofalse());
              } 
      });


     
    }
  };
  const updateProfileClick = () => {
    if (user) {
       dispatch(updateProfile(updatedUser));
     }
  };

  const handleInputChange = (e) => {
     setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value,
    });
  };


  useEffect(()=>{
    if(user){
        setUpdatedUser({ name:user.name,email:user.email })}
  },[user])

    

  return (

    <section>
        { loading ? ( <Loader/>) :(    <div className="container mx-auto mt-5 p-5">
      {user ? (


        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">User Profile</h2>
             <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            {/* Display other user information as needed */}
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">Update Profile</h2>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              value={updatedUser.name}
              onChange={handleInputChange}
            />
            <label className="block text-gray-700 text-sm font-bold mb-2 mt-3" htmlFor="email">
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              
              value={updatedUser.email}
              onChange={handleInputChange}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 rounded focus:outline-none focus:shadow-outline"
              onClick={updateProfileClick}
            >
              Update
            </button>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Remove Profile</h2>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={removeProfileClick}
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
         <Loader/>
      )}
    </div>)}
    </section>

    
 
  );
};

export default Profile;
