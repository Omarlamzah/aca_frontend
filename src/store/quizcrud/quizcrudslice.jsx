// quizCrudSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { fetchAllquizApi } from "../../api/admin/quiz/fetchAllquizApi";
import { createquizApi } from "../../api/admin/quiz/createquizApi";
import { updateQuizApi } from "../../api/admin/quiz/updateQuizApi";
import { removequizApi } from "../../api/admin/quiz/removequizApi";
import { getassociateApi } from "../../api/admin/quiz/associate/getassociateApi";
import { submetassociateApi } from "../../api/admin/quiz/associate/submetassociateApi";
import { Submepointtapi, fetchpoinmentApi } from "../../api/fetchpoinmentApi";

// Async Thunk for fetching quizzes
export const fetchQuizzes = createAsyncThunk('quizCrud/fetchQuizzes', async () => {
  try {
    const response = await fetchAllquizApi(); // Replace with your Laravel API endpoint
    return response.data.quizzes;
  } catch (error) {
    throw error.response.data;
  }
});

// Async Thunk for creating a quiz
export const createQuiz = createAsyncThunk('quizCrud/createQuiz', async (quizData) => {
  try {
    const response = await createquizApi(quizData); // Replace with your Laravel API endpoint
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

// Async Thunk for updating a quiz
export const updateQuiz = createAsyncThunk('quizCrud/updateQuiz', async (data ) => {
  try {
 
          const { quizIdToUpdate, formData }  =data 
          const response = await updateQuizApi(quizIdToUpdate, formData);
         return response.data;

   } catch (error) {
    throw error.response.data;
  }
});

// Async Thunk for deleting a quiz
export const deleteQuiz = createAsyncThunk('quizCrud/deleteQuiz', async (quizId) => {
  try {
     const response = await removequizApi(quizId)  ; // Replace with your Laravel API endpoint
     return response.data;
  } catch (error) {
    throw error.response.data;
  }
});


// Async Thunk for getassociate a quiz
export const getassociate = createAsyncThunk('quizCrud/getassociate', async () => {
  try {
     const response = await getassociateApi()  ; // Replace with your Laravel API endpoint
     return response.data;
  } catch (error) {
    throw error.response.data;
  }
});
// Async Thunk forsubmet  associate a quiz

export const submetassociate = createAsyncThunk('quizCrud/submetassociate', async (data) => {
  try {
     const response = await submetassociateApi(data)  ; // Replace with your Laravel API endpoint
     return response.data;
  } catch (error) {
    throw error.response.data;
  }
});


// Async fetch poimnet forsubmet  associate a quiz

export const fetchpoinment = createAsyncThunk('quizCrud/fetchpoinment', async () => {
  try {
     const response = await fetchpoinmentApi()  ; // Replace with your Laravel API endpoint
     return response.data;
  } catch (error) {
    throw error.response.data;
  }
});
export const Submepoint = createAsyncThunk('quizCrud/Submepointt', async (data) => {
  try {
     const response = await Submepointtapi(data)  ; // Replace with your Laravel API endpoint
     return response.data;
  } catch (error) {
    throw error.response.data;
  }
});
// Redux Slice
const quizCrudSlice = createSlice({
  name: 'quizCrud',
  initialState: {
    quizzes: [],
    questions:null,
    loading: false,
    error: null,
    msg:"",
    pointemnt:{}

  
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizzes.fulfilled, (state, action) => {
        state.quizzes = action.payload;
        console.log(action.payload)

        state.loading = false;
        state.error = null;
      })
      .addCase(fetchQuizzes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuizzes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createQuiz.fulfilled, (state, action) => {
        state.quizzes = action.payload.quizzes
        state.msg = action.payload.message
        state.loading = false;
        state.error = null;
      })
      .addCase(createQuiz.pending, (state) => {
        state.loading = true;
      })
      .addCase(createQuiz.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateQuiz.fulfilled, (state, action) => {
        state.quizzes = action.payload.quizzes
        state.msg = action.payload.message
        state.loading = false;
        state.error = null;
      })
      .addCase(updateQuiz.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateQuiz.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteQuiz.fulfilled, (state, action) => {
        state.quizzes = action.payload.quizzes
        state.msg = action.payload.message
        state.loading = false;
        state.error = null;
        console.log(action.payload)
      })
      .addCase(deleteQuiz.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteQuiz.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;

      })
      
       // for get quiz and questions associate
      .addCase(getassociate.fulfilled, (state, action) => {
        state.quizzes = action.payload.quizzes
        state.questions=action.payload.questions
        state.loading = false;
        state.error = null;
        console.log(action.payload)
      })
      .addCase(getassociate.pending, (state) => {
        state.loading = true;
      })
      .addCase(getassociate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;

      }) 
      
      // for get quiz and submet questions associate
      .addCase(submetassociate.fulfilled, (state, action) => {
        state.msg = action.payload.message
         state.loading = false;
        state.error = null;
       })
      .addCase(submetassociate.pending, (state) => {
        state.loading = true;
      })
      .addCase(submetassociate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;

      })
      
      
      

         // for get point and questions associate
         .addCase(fetchpoinment.fulfilled, (state, action) => {
          state.pointemnt=action.payload
          state.loading = false;
          state.error = null;
          console.log(action.payload)
          console.log( state.pointemnt)
        })
        .addCase(fetchpoinment.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchpoinment.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
  
        }) 
        
         // for submit point and questions associate
         .addCase(Submepoint.fulfilled, (state, action) => {
          state.pointemnt=action.payload
          state.loading = false;
          state.error = null;
          console.log(action.payload)
        })
        .addCase(Submepoint.pending, (state) => {
          state.loading = true;
        })
        .addCase(Submepoint.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
  
        }) 
      
      
      
      
      ;
  },
});

export default quizCrudSlice.reducer;
