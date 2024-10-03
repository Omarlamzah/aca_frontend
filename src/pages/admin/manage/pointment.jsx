 

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuizzes, deleteQuiz, updateQuiz, fetchpoinment, Submepoint } from '../../../store/quizcrud/quizcrudslice';
import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox } from 'lightbox.js-react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { backendUrl } from '../../../globalvar';
import {useForm} from "react-hook-form"
import Createnewquiz from './createnewquiz';
import Loadingv2 from '../../../component/loadingv2/loading';
import { BiLoader } from 'react-icons/bi';
import { deleteQuestion, fetchQuestions, updateQuestion } from '../../../store/question/questionslice';
import Swal from 'sweetalert2';
import CreatenewquestionComp from './createnewquestionComp';

const Pointmanager = () => {
  const dispatch = useDispatch();
 
 
   const [scoredif, setscoredif] = useState("");
   const [multiple, setmultiple] = useState("");

 

 
   

  const { pointemnt,loading,error } = useSelector((state) => state.quizcrudslice);

  useEffect(() => {
    dispatch(fetchpoinment());
    setscoredif(pointemnt.scoredif)
    setmultiple(pointemnt.multiple)

   }, [dispatch]);

  
 
 




  const {register,handleSubmit} = useForm()
  const postupdatepoint=(data)=>{
    console.log(data)
            dispatch(Submepoint(data))
      }
    
  return (
    <div className=' h-screen overflow-scroll'>
       
       {loading && <Loadingv2/>}
      {error && <p>Error: {error}</p>}
        { pointemnt && (
     <div className="p-4 bg-gray-200">
     <p className="mb-2">Min Score: {pointemnt.scoredif}</p>
     <p className="mb-4">Multiple Score: {pointemnt.multiple}</p>
     <form onSubmit={handleSubmit(postupdatepoint)} className="space-y-4">
       <input
         {...register('scoredif')}
         type="text"
         required
         onChange={(e) => setscoredif(e.target.value)}
         value={scoredif ? scoredif: pointemnt.scoredif}
         className="border p-2 rounded-md"
       />
       <input
         {...register('multiple')}
         type="text"
         required
         onChange={(e) => setmultiple(e.target.value)}
         value={multiple ? multiple : pointemnt.multiple}
         className="border p-2 rounded-md"
       />
       <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
         Update
       </button>
     </form>
   </div>
        )}
     



    </div>
  );
};

export default Pointmanager;
