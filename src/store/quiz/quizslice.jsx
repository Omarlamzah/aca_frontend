// quizSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
 import { startquizApi } from "../../api/quiz/startquizApi";
import { submetQuizApi } from "../../api/quiz/submetQuizApi";
import 'toastr/build/toastr.min.css';  
import toastr from  "toastr";

 export const startQuiz = createAsyncThunk('quiz/startQuiz', async (identify,{rejectWithValue}) => {
  try {
    const response = await startquizApi(identify); // Replace with your Laravel API endpoint
    return response.data;
  } catch (error) {
    return rejectWithValue( error.response.data);
  }
});

// Async Thunk for submitting quiz answers
export const submitQuizAnswers = createAsyncThunk('quiz/submitAnswers', async (answers) => {
  try {
    const response = await submetQuizApi(answers)
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

// Redux Slice
const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    nextQuizPart: null,
    questions: [],
    totalScore: 0,
    userResponses: {},
    loading: false,
    error: null,
    gamestatus:"",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(startQuiz.fulfilled, (state, action) => {
        state.nextQuizPart = action.payload.nextQuizPart;
        state.questions = action.payload.questions;
        state.totalScore = 0;
        state.userResponses = {};
        state.loading = false;
        state.error = null;
        })
      .addCase(startQuiz.pending, (state) => {
        state.loading = true;
      })
      .addCase(startQuiz.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.totalScore=action.payload.totalScore
        //  toastr.error(action.payload.error)
        state.gamestatus=action.payload.gamestatus
      })
      .addCase(submitQuizAnswers.fulfilled, (state, action) => {
        state.nextQuizPart = action.payload.quizPartWithQuestions;
        state.questions = action.payload.quizPartWithQuestions.questions;
        state.totalScore = action.payload.totalScore;
        state.userResponses = action.payload.userResponses;
        state.loading = false;
        state.error = null;
      })
      .addCase(submitQuizAnswers.pending, (state) => {
        state.loading = true;
      })
      .addCase(submitQuizAnswers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default quizSlice.reducer;
