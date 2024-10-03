// questionSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
 import { getquestionApi } from "../../api/admin/quiz/question/getquestionApi";
import { createquestionApi } from "../../api/admin/quiz/question/createquestionApi";
import { updatequestionApi } from "../../api/admin/quiz/question/updatequestionApi";
import { deletequestionApi } from "../../api/admin/quiz/question/deletequestionApi";
import 'toastr/build/toastr.min.css';  
import toastr from  "toastr";

// Async Thunk for fetching questions
export const fetchQuestions = createAsyncThunk('question/fetchQuestions', async () => {
  try {
    const response = await getquestionApi(); // Replace with your Laravel API endpoint
    return response.data.questions;
  } catch (error) {
    throw error.response.data;
  }
});

// Async Thunk for creating a question
export const createQuestion = createAsyncThunk('question/createQuestion', async (questionData) => {
  try {
    const response = await createquestionApi(questionData); // Replace with your Laravel API endpoint
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

// Async Thunk for updating a question
export const updateQuestion = createAsyncThunk('question/updateQuestion', async ( questionData) => {
  try {
    const response = await updatequestionApi(questionData); // Replace with your Laravel API endpoint
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

// Async Thunk for deleting a question
export const deleteQuestion = createAsyncThunk('question/deleteQuestion', async (questionId) => {
  try {
    const response = await deletequestionApi(questionId); // Replace with your Laravel API endpoint
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

// Redux Slice
const questionSlice = createSlice({
  name: 'question',
  initialState: {
    questions: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.questions = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;

      })
      .addCase(createQuestion.fulfilled, (state, action) => {
        state.questions=action.payload.questions;
        state.loading = false;
        state.error = null;
        toastr.options = {"closeButton": true, "progressBar": true,"positionClass": "toast-top-center", "showDuration": "1000", "hideDuration": "1000",  "timeOut": "8000", };
        toastr.success(action.payload.message,"created");
    
      })
      .addCase(createQuestion.pending, (state) => {
        state.loading = true;
      })
      .addCase(createQuestion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateQuestion.fulfilled, (state, action) => {
        state.questions=action.payload.questions;
        state.loading = false;
        state.error = null;
        toastr.options = {"closeButton": true, "progressBar": true,"positionClass": "toast-top-center", "showDuration": "1000", "hideDuration": "1000",  "timeOut": "8000", };
        toastr.success(action.payload.message,"updated");
    
      })
      .addCase(updateQuestion.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateQuestion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteQuestion.fulfilled, (state, action) => {
        state.questions=action.payload.questions;
        state.loading = false;
        state.error = null;
        toastr.options = {"closeButton": true, "progressBar": true,"positionClass": "toast-top-center", "showDuration": "1000", "hideDuration": "1000",  "timeOut": "8000", };
        toastr.success(action.payload.message,"deleted");
    
      })
      .addCase(deleteQuestion.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteQuestion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default questionSlice.reducer;
