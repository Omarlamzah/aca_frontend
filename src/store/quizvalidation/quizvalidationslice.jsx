// quizSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import 'toastr/build/toastr.min.css';  
import toastr from  "toastr";
import { submetQuizvalidationApi } from "../../api/quizvalidation/submetQuizvalidationApi";
import { startquizvalidationApi } from "../../api/quizvalidation/startquizvalidationApi";

 export const startQuizvalidation = createAsyncThunk('quiz/startQuiz', async (identify,{rejectWithValue}) => {
  try {
    const response = await startquizvalidationApi(identify); // Replace with your Laravel API endpoint
    return response.data;
  } catch (error) {
    return rejectWithValue( error.response.data);
  }
});

// Async Thunk for submitting quiz answers
export const submitQuizAnswersvalidation = createAsyncThunk('quiz/submitAnswers', async (answers) => {
  try {
    const response = await submetQuizvalidationApi(answers)
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

// Redux Slice
const quizvalidationslice = createSlice({
  name: 'quiz',
  initialState: {
    nextQuizPartv: null,
    questions: [],
    totalScore: 0,
    userResponses: {},
    loading: false,
    error: null,
    gamestatus:""
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(startQuizvalidation.fulfilled, (state, action) => {
        state.nextQuizPartv = action.payload.nextQuizPart;
        state.questions = action.payload.questions;
        state.totalScore = 0;
        state.userResponses = {};
        state.loading = false;
        state.error = null;
       })
      .addCase(startQuizvalidation.pending, (state) => {
        state.loading = true;
      })
      .addCase(startQuizvalidation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.totalScore=action.payload.totalScore
       // toastr.info(action.payload.error)
        state.gamestatus=action.payload.gamestatus
      })
      .addCase(submitQuizAnswersvalidation.fulfilled, (state, action) => {
        state.nextQuizPartv = action.payload.quizPartWithQuestions;
        state.questions = action.payload.quizPartWithQuestions.questions;
        state.totalScore = action.payload.totalScore;
        state.userResponses = action.payload.userResponses;
        state.loading = false;
        state.error = null;
      })
      .addCase(submitQuizAnswersvalidation.pending, (state) => {
        state.loading = true;
      })
      .addCase(submitQuizAnswersvalidation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default quizvalidationslice.reducer;
