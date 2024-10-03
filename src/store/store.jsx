import {configureStore, combineReducers} from '@reduxjs/toolkit';
import adminSlice from "./admin/adminslice";
import dashboardslice from "./dashboard/dashboardslice";
import profileslice from "./profile/profileslice";
import questionslice from "./question/questionslice";
import quizslice  from "./quiz/quizslice";
import quizvalidationslice from './quizvalidation/quizvalidationslice';
import quizcrudslice from "./quizcrud/quizcrudslice";
 import loginslice from "./auth/loginslice";
import themeSlice from "./darkmod/darkslice";
import correctanswersslice from './correctanswers/correctanswersslice';
 




const rootreducer=combineReducers({loginslice,
    adminSlice,dashboardslice,profileslice,
    questionslice,quizslice,quizcrudslice,
    quizvalidationslice,themeSlice,correctanswersslice}) 


    
const Store =configureStore({reducer:rootreducer});
export default Store

