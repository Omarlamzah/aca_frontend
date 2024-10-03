import React, { useState } from 'react';
import { useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { sendnewpassworApi } from '../../api/sendnewpassworApi';
import 'toastr/build/toastr.min.css';
import toastr from "toastr";

const PasswordReset = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const { token } = useParams();
  const email = searchParams.get('email');

  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');

  const handleReset = async () => {
    try {
      const response = await sendnewpassworApi({ token, email, password, password_confirmation: passwordConfirmation });
      toastr.success(response.data.message);
      navigate('/login'); // Redirect to login page after successful password reset
    } catch (err) {
      setError(err.response.data.message);
      toastr.error(err.response.data.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white border rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Password Reset</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Confirm Password:</label>
        <input
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      {error && <div className="text-red-500 mb-4">{JSON.stringify(error)}</div>}
      <button
        onClick={handleReset}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Reset Password
      </button>
    </div>
  );
};

export default PasswordReset;
