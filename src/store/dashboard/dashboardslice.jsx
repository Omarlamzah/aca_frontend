// dashboardSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
 import { dashboardApi } from "../../api/dashboard/dashboardApi";
 import { getmyscore } from "../profile/profileslice";

// Async Thunk
export const fetchDashboardData = createAsyncThunk('dashboard/fetchData', async (_,{dispatch}) => {
  try {
    const response = await dashboardApi()  
   // dispatch(getmyscore())
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

 // Redux Slice
const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    question: "",
    identify: "",
    totalScore: "",
    loading: false,
    error: "",
    quizPartsImgURL:"",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.question = action.payload.question;
        state.identify = action.payload.identify;
        state.totalScore = action.payload.totalScore;
        state.quizPartsImgURL = action.payload.quizPartsImgURL;
       
         state.loading = false;
        state.error = null;
      })
      .addCase(fetchDashboardData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dashboardSlice.reducer;
