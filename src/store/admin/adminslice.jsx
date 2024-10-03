// adminSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
 import { fetchAllUsersApi } from "../../api/admin/fetchAllUsersApi";
 import 'toastr/build/toastr.min.css';  
import toastr from  "toastr";
import { adminateuserApi } from "../../api/admin/adminateuserApi";
import { activateuserApi } from "../../api/admin/activateuserApi";
import { fetchUserScoresApi } from "../../api/admin/fetchUserScoresApi";
import { getuserscoresApi } from "../../api/getuserscoresApi";
 
// Async Thunks
export const fetchAllUsers = createAsyncThunk('admin/fetchAllUsers', async (_,{rejectWithValue}) => {
  try {
    const response = await fetchAllUsersApi(); // Replace with your Laravel API endpoint
    console.log(response.data)
    return response.data;
  } catch (error) {
    return  rejectWithValue(error.response.data) ;
  }
});

export const fetchUserScores = createAsyncThunk('admin/fetchUserScores', async () => {
  try {
    const response = await fetchUserScoresApi();
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});


export const activateuser = createAsyncThunk('admin/activateuser', async (id) => {
  try {
    const response = await activateuserApi(id);
  
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

export const adminateuser = createAsyncThunk('admin/adminateuser', async (id) => {
  try {
    const response = await adminateuserApi(id);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

export const getscoreuser = createAsyncThunk('admin/getscoreuser', async (id) => {
  try {
    const response = await getuserscoresApi();
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

// Redux Slice
const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    users: [],
    userScores: [],
    loading: false,
    error: null,
    msg:""
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setUserScores: (state, action) => {
      state.userScores = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.users = action.payload.users;
        state.loading = false;
        state.error = null;
        state.msg=action.payload
       })
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false;
         state.error = action.payload.error;
        console.log(state.error)
      })



      .addCase(fetchUserScores.fulfilled, (state, action) => {
        state.userScores = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUserScores.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserScores.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      
      
      .addCase(activateuser.fulfilled, (state, action) => {
        state.msg = action.payload.message;
        state.users = action.payload.users;
        state.loading = false;
        state.error = null;
        console.log(action)
      })
      .addCase(activateuser.pending, (state) => {
        state.loading = true;
      })
      .addCase(activateuser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      



      .addCase(adminateuser.fulfilled, (state, action) => {
        state.msg = action.payload.message;
        state.users = action.payload.users;
        state.loading = false;
        state.error = null;
        console.log(action)
      })
      .addCase(adminateuser.pending, (state) => {
        state.loading = true;
      })
      .addCase(adminateuser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      

      // get user 
      .addCase(getscoreuser.fulfilled, (state, action) => {
        state.msg = action.payload.message;
        state.userScores = action.payload;
        state.loading = false;
       
        console.log(action)
      })
      .addCase(getscoreuser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getscoreuser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      
      
      
      ;
  },
});

//export const { setUsers, setUserScores, setLoading, setError } = adminSlice.actions;
export default adminSlice.reducer;
