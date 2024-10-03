 

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuizzes, deleteQuiz, updateQuiz } from '../../../store/quizcrud/quizcrudslice';
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

const Questionmanager = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

   const [questionid, setquestionid] = useState("");
 

  const onOpenModal = (question) => {  setquestionid(question.QuestionID);setOpen(true);};

  const onCloseModal = () => {setOpen(false); };

  const onOpenModal2 = ( ) => {   setOpen2(true);};

  const onCloseModal2 = () => {setOpen2(false); };

   

  const { questions,loading,error } = useSelector((state) => state.questionslice);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  const handleDelete = (id) => {

    Swal.fire({
        title: 'Are you sure?',
        text: 'You want to delete question!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
            dispatch(deleteQuestion(id));


         }
      });
  };

 
 




  const {register,handleSubmit} = useForm()
  const postupdatequiz=(data)=>{
            dispatch(updateQuestion({questionid:questionid, QuestionText:data.QuestionText, IsBest:data.IsBest}))
      }
    
  return (
    <div className=' h-screen overflow-scroll'>
       <button
        onClick={onOpenModal2}
        className="bg-green-500 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300 mb-4"
      >Create New question </button>
        <Modal  open={open2}   onClose={onCloseModal2} center> <CreatenewquestionComp /></Modal>

      {loading && <Loadingv2/>}
      {error && <p>Error: {error}</p>}
      {questions && (
        <table className="min-w-full bg-white border rounded shadow-md">
        <thead>
            <tr>
              <th>QuestionID</th>
              <th>question Name</th>
              <th>isbest</th>
              <th>parent quiz</th>
               <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            
 	
 	
	
 	
            {questions.map((question) => (
              <tr key={question.QuestionID}>
              <td  className='text-center'>{question.QuestionID}</td>
                <td  >{question.QuestionText}</td>
                {question.IsBest ?  ( <td className=' bg-green-500 text-center' >{question.IsBest}</td> ) :(  <td className='text-center' >{question.IsBest}</td>)}
              
                <td  className='text-center'>{question.quiz_id}</td>
                 <td className="py-2">
                  <button
                    onClick={() => onOpenModal(question)}
                    className="text-blue-500 hover:underline mr-2 focus:outline-none focus:ring focus:border-blue-300"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(question.QuestionID)}
                    className="text-red-500 hover:underline focus:outline-none focus:ring focus:border-red-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <Modal open={open} onClose={onCloseModal} center>
        <div className="flex flex-col items-center justify-center p-4">
          <h3 className="text-2xl font-bold mb-4">Edit question</h3>

          <form encType="multipart/form-data" onSubmit={handleSubmit(postupdatequiz)}>
          <div className="mb-4">
              <label htmlFor="PartName" className="block text-sm font-medium text-gray-600">
                question Name:
              </label>
       



        <textarea  className="form-input mt-1 block w-full"
                id="PartName"
                {...register("QuestionText")}
                cols="30" rows="4"></textarea>
            </div>

           <div className=' flex gap-2'>
           <label htmlFor="isbestid">the best of</label>
            <input
                 type="checkbox"
                className="form-input mt-1 block"
                id="isbestid"
                {...register("IsBest")}                //required
              />
                </div>



            <button
              type="submit"
              className="flex items-center gap-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              
            >
             { loading ? <BiLoader className=" animate-spin w-6 h-6" /> : <span>  Update question</span>}
            </button>


            
          </form>
        </div>
      </Modal>


     
    </div>
  );
};

export default Questionmanager;
