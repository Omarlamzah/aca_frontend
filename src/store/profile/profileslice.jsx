// profileSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { removeProfileApi } from "../../api/profile/removeprofileApi";
import { removeCookie } from "../../hooks/cookies";
import { updateprofileApi } from "../../api/profile/updateprofileApi";
import 'toastr/build/toastr.min.css';  
import toastr from  "toastr";
import { myscoreApi } from "../../api/myscoreApi";
import { updateuserlogin } from "../auth/loginslice";
 
   

 export const updateProfile = createAsyncThunk('profile/updateProfile', async (profileData,{rejectWithValue}) => {
  try {
    const response = await updateprofileApi(profileData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data) ;
  }
});

// Async Thunk for deleting user account
export const deleteAccount = createAsyncThunk('profile/deleteAccount', async () => {
  try {
  //delete
  const response = await removeProfileApi()
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});
// Async Thunk for deleting user account
export const getmyscore = createAsyncThunk('profile/getmyscore', async () => {
  try {
  //delete
  const response = await myscoreApi()
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});


 

// Redux Slice
const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    user: null,
    loading: false,
    error: null,
    status:"",
    msg:"",
    score:"",
    myuser_score:0,
    scoredif:0,
    quiztokenstatus:""
  },
  reducers: { },
  extraReducers: (builder) => {
    builder
      
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
        state.user= action.payload.user
        location.reload()
        
         updateuserlogin(action.payload.user)
        toastr.success("profile updated ") 
      })
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error?.['updatedUser.email']?.[0];
        toastr.error(action.payload?.error?.['updatedUser.email']?.[0]) 

       })
      .addCase(deleteAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.user = null;
        toastr.success("acount removed") 
        state.status="removed"
        removeCookie("token"),
        removeCookie("isAuthenticated")
      })
      .addCase(deleteAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toastr.error(action.error.message) 

      })
      
      
      // user score 
      .addCase(getmyscore.fulfilled, (state, action) => {
        state.loading = false;
        state.myuser_score = action.payload.user_score;
        state.scoredif=action.payload.scoredif
        state.quiztokenstatus=action.payload.quiztokenstatus                                                      
        
       
      })
      .addCase(getmyscore.pending, (state) => {
        state.loading = true;
      })
      .addCase(getmyscore.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
       // toastr.error(action.error.message) 

      })
      
      
      
      
      ;
  },
});

export default profileSlice.reducer;
