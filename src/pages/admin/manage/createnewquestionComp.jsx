import React, { useState } from 'react';
import {useForm} from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux';
import { BiLoader } from 'react-icons/bi';
import { createQuestion } from '../../../store/question/questionslice';

const CreatenewquestionComp = () => {
    const {register,handleSubmit} = useForm()
    const { loading } = useSelector((state) => state.questionslice);

    const dispatch = useDispatch();

 
  

 
    const postcreatequestion=(data)=>{      
             dispatch(createQuestion({QuestionText:data.questiontxt,IsBest:data.questionisbest}))
        }




      
    return (
        <div>
       <div className="flex flex-col items-center justify-center p-4">
          <h3 className="text-2xl font-bold mb-4">create new  Quiz</h3>

          <form encType="multipart/form-data" onSubmit={handleSubmit(postcreatequestion)}>
          <div className="mb-4">
              <label htmlFor="PartName" className="block text-sm font-medium text-gray-600">
                question Name:
              </label>
            


              <textarea  className="form-input mt-1 block w-full"
                id="PartName"
               {...register("questiontxt")} cols="30" rows="4"></textarea>
            </div>
           <div className=' flex gap-2'>
           <label htmlFor="isbestid">the best of</label>
            <input
                 type="checkbox"
                className="form-input mt-1 block"
                id="isbestid"
               {...register("questionisbest")}
                //required
              />

           </div>
            <button
              type="submit"
              className="flex items-center gap-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              
            >
             { loading ? <BiLoader className=" animate-spin w-6 h-6" /> : <span>  create question</span>}
            </button>


            
          </form>
        </div>
            
        </div>
    );
}

export default CreatenewquestionComp;
