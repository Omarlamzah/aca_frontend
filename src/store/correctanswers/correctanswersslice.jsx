// quizCrudSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getanswersApi } from "../../api/admin/quiz/answers/getanswersApi";
import { submitanswerApi } from "../../api/admin/quiz/answers/submitanswerApi";
import 'toastr/build/toastr.min.css';  
import toastr from  "toastr";
import { deleteanswerApi } from "../../api/admin/quiz/answers/deleteanswerApi";


// Async Thunk for fetching quizzes
export const getanswers = createAsyncThunk('answers/getanswers', async () => {
  try {
    const response = await getanswersApi(); 
     return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

// Async Thunk for creating a quiz
export const submitanswer = createAsyncThunk('answers/submitanswer', async (answerdata) => {
  try {
     
     const response = await submitanswerApi(answerdata); // Replace with your Laravel API endpoint
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});




// Async Thunk for creating a quiz
export const deleteanswer = createAsyncThunk('answers/deleteanswer', async (id) => {
  try {
     const response = await deleteanswerApi(id); // Replace with your Laravel API endpoint
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});





// Redux Slice
const correctanswersslice = createSlice({
  name: 'quizCrud',
  initialState: {
    quizzesanswers: [],
    loading: false,
    error: null,
    msg:"",
  
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getanswers.fulfilled, (state, action) => {
        state.quizzesanswers = action.payload.quizzesanswers;
        console.log(action.payload)

        state.loading = false;
        state.error = null;
      })
      .addCase(getanswers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getanswers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // submit
      .addCase(submitanswer.fulfilled, (state, action) => {
        state.quizzesanswers = action.payload.quizzesanswers
        toastr.options = {"closeButton": true, "progressBar": true,"positionClass": "toast-top-center", "showDuration": "1000", "hideDuration": "1000",  "timeOut": "8000", };
        toastr.success(action.payload.message,"updated");
        state.loading = false;
        state.error = null;
      })
      .addCase(submitanswer.pending, (state) => {
        state.loading = true;
      })
      .addCase(submitanswer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })


          // delete
          .addCase(deleteanswer.fulfilled, (state, action) => {
            state.quizzesanswers = action.payload.quizzesanswers
            toastr.options = {"closeButton": true, "progressBar": true,"positionClass": "toast-top-center", "showDuration": "1000", "hideDuration": "1000",  "timeOut": "8000", };
            toastr.success(action.payload.message,"deleted");
            state.loading = false;
            state.error = null;
          })
          .addCase(deleteanswer.pending, (state) => {
            state.loading = true;
          })
          .addCase(deleteanswer.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })

  },
});

export default correctanswersslice.reducer;
