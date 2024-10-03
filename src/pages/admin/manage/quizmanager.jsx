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

const Quizmanager = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

   const [quizIdToUpdate, setQuizIdToUpdate] = useState("");

  const [img1prev, setimg1prev] = useState("");
  const [img2prev, setimg2prev] = useState("");

  const onOpenModal = (quiz) => {  setQuizIdToUpdate(quiz.PartID);setOpen(true);};

  const onCloseModal = () => {setOpen(false); };

  const onOpenModal2 = ( ) => {   setOpen2(true);};

  const onCloseModal2 = () => {setOpen2(false); };

   

  const { quizzes, loading, error } = useSelector((state) => state.quizcrudslice);

  useEffect(() => {
    dispatch(fetchQuizzes());
  }, [dispatch]);

  const handleDelete = (partId) => {
    dispatch(deleteQuiz(partId));
  };

 
  const handleFileChange = (e, setImage) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      setImage(fileReader.result);
     };

    fileReader.readAsDataURL(file);
  };





  const {register,handleSubmit} = useForm()
  const postupdatequiz=(data)=>{
 
    const formData = new FormData()
    if(data.PartName){ formData.append("PartName",data.PartName);}
    if(data.Essaiype){formData.append("id_esaai",data.Essaiype);}    
    if(data.quiztype){formData.append("quiztype",data.quiztype);}
    if(data.imgFile[0]){ formData.append("imgFile",data.imgFile[0]);}
    if(data.imgCorrectFile[0]){ formData.append("imgCorrectFile",data.imgCorrectFile[0]);}

           dispatch(updateQuiz({quizIdToUpdate, formData}))
      }
    
  return (
    <div>
       <button
        onClick={onOpenModal2}
        className="bg-green-500 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300 mb-4"
      >Create New Quiz </button>
        <Modal  open={open2}   onClose={onCloseModal2} center> <Createnewquiz /></Modal>

      {loading && <Loadingv2/>}
      {error && <p>Error: {error}</p>}

      <div className="flex flex-col justify-between bg-gray-100 p-2 rounded-lg mb-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">Total Quizzes: {quizzes && quizzes.length}</h1>
        <h1 className="text-2xl font-bold mb-4 text-green-600">Total Aprontisage Quizzes: {quizzes && quizzes.filter(quiz => quiz.type === "aprontisage").length}</h1>
        <h1 className="text-2xl font-bold mb-4 text-red-800">Total Validation Quizzes: {quizzes && quizzes.filter(quiz => quiz.type === "validation").length}</h1>
      </div>
      <div className="flex   justify-between bg-gray-100 p-2 rounded-lg mb-4">
        <h1 className="text-2xl font-bold mb-4 text-red-800">Total 1er  Essai: {quizzes.filter(quiz => quiz.essai && quiz.essai.id === 1).length}</h1>
        <h1 className="text-2xl font-bold mb-4 text-red-800">Total 2ème Essai: {quizzes.filter(quiz => quiz.essai && quiz.essai.id === 2).length}</h1>
        <h1 className="text-2xl font-bold mb-4 text-red-800">Total 3ème Essai: {quizzes.filter(quiz => quiz.essai && quiz.essai.id === 3).length}</h1>
      </div>
    </div>



    

         

      {quizzes && (
        <table className="min-w-full bg-white border rounded shadow-md max-h-screen h-screen overflow-scroll">
        <thead>
            <tr>
              <th>Part ID</th>
              <th>Part Name</th>
              <th>Type</th>
              <th>Image URL</th>
              <th>Correct Image URL</th>
               <th>N:questions </th>
               <th>Essai </th>
               <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {quizzes.map((quiz) => (
              <tr key={quiz.PartID}>
                <td>{quiz.PartID}</td>
                <td>{quiz.PartName}</td>
                <td>{quiz.type}</td>
                <td>
                  {quiz.ImgURL && (
                    <SlideshowLightbox>
                      <img
                        className="md:w-[70%] w-1/2 m-auto"
                        src={`${backendUrl}storage/${quiz.ImgURL}`}
                        alt={quiz.PartName}
                      />
                    </SlideshowLightbox>
                  )}
                </td>
                <td>
                  {quiz.ImgCorrectURL && (
                    <SlideshowLightbox>
                      <img
                        className="md:w-[70%] w-1/2 m-auto"
                        src={`${backendUrl}storage/${quiz.ImgCorrectURL}`}
                        alt={quiz.PartName}
                      />
                    </SlideshowLightbox>
                  )}
                </td>
                <td>{quiz.questions_count}</td>
                <td>{quiz.essai?.name ? quiz.essai?.name  :"not essai" }</td>

                 <td className="py-2">
                  <button
                    onClick={() => onOpenModal(quiz)}
                    className="text-blue-500 hover:underline mr-2 focus:outline-none focus:ring focus:border-blue-300"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(quiz.PartID)}
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
          <h3 className="text-2xl font-bold mb-4">Edit Quiz</h3>

          <form encType="multipart/form-data" onSubmit={handleSubmit(postupdatequiz)}>
            <div className="mb-4">
              <label htmlFor="PartName" className="block text-sm font-medium text-gray-600">
                Part Name:
              </label>
              <input
                type="text"
                className="form-input mt-1 block w-full"
                id="PartName"
               {...register("PartName")}
                //required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="ImgURL" className="block text-sm font-medium text-gray-600">
                Image URL:
              </label>
              <input
                type="file"
                className="form-input mt-1 block w-full"
                id="ImgURL"
                {...register("imgFile")}
                       onChange={(e) => handleFileChange(e, setimg1prev)}
                accept="image/*"
              />
            </div>
            <div className="rounded-full h-full w-20">
              <img className="w-full" src={img1prev} alt="" />
            </div>
            <div className="mb-4">
              <label htmlFor="ImgCorrectURL" className="block text-sm font-medium text-gray-600">
                Correct Image URL:
              </label>
              <input
                type="file"
                className="form-input mt-1 block w-full"
                id="ImgCorrectURL"
                {...register("imgCorrectFile")}
                 onChange={(e) => handleFileChange(e, setimg2prev)}
                accept="image/*"
              />
              <div className="rounded-full h-full w-20">
                <img className="w-full" src={img2prev} alt="" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="quiztype" className="block text-sm font-medium text-gray-600">
                Type:
              </label>
              <select
                name="quiztype"
                id="quiztype"
                className="form-select mt-1 block w-full"
                {...register("quiztype")}
              >
                <option value="aprontisage">Aprontisage</option>
                <option value="validation">Validation</option>
              </select>
            </div>



            <div className="mb-4">
              <label htmlFor="quiztype" className="block text-sm font-medium text-gray-600">
                Essai:
              </label>
              <select
                name="quiztype"
                id="quiztype"
                className="form-select mt-1 block w-full"
                {...register("Essaiype")}
              >  
               <option  value="null">select Essai</option>
                 <option value="1">1er Essai</option>
                <option value="2">2ème Essai</option>
                <option value="3">3ème Essai</option>
              </select>
            </div>

            <button
              type="submit"
              className="flex items-center gap-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              
            >
             { loading ? <BiLoader className=" animate-spin w-6 h-6" /> : <span>  Update Answer</span>}
            </button>


            
          </form>
        </div>
      </Modal>


     
    </div>
  );
};

export default Quizmanager;
