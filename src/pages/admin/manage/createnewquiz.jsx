import React, { useState } from 'react';
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { createQuiz } from '../../../store/quizcrud/quizcrudslice';
import { useDispatch, useSelector } from 'react-redux';
import { BiLoader } from 'react-icons/bi';

const Createnewquiz = () => {
    const {register,handleSubmit} = useForm()
    const { quizzes, loading, error } = useSelector((state) => state.quizcrudslice);
    const [quizType, setQuizType] = useState('aprontisage');

    const dispatch = useDispatch();

    const [img1prev, setimg1prev] = useState("");
    const [img2prev, setimg2prev] = useState("");
  
    const postCreatquiz=(data)=>{
      const formData = new FormData()
      if(data.PartName){ formData.append("PartName",data.PartName);}
      if(quizType){formData.append("quiztype",quizType);}
      if(data.Essaiype  && quizType!="aprontisage"){formData.append("id_esaai",data.Essaiype);}
      if(data.ImgURL[0]){ formData.append("ImgURL",data.ImgURL[0]);}
      if(data.ImgCorrectURL[0]){ formData.append("ImgCorrectURL",data.ImgCorrectURL[0]);}
                 dispatch(createQuiz(formData))
        }
        const handleFileChange = (e, setImage) => {
            const file = e.target.files[0];
            const fileReader = new FileReader();
        
            fileReader.onloadend = () => {
              setImage(fileReader.result);
             };
        
            fileReader.readAsDataURL(file);
          };




  const handleChange = (event) => {
    setQuizType(event.target.value);
  };


    return (
        <div>
       <div className="flex flex-col items-center justify-center p-4">
          <h3 className="text-2xl font-bold mb-4">create new  Quiz</h3>

          <form encType="multipart/form-data" onSubmit={handleSubmit(postCreatquiz)}>
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
                {...register("ImgURL")}
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
                {...register("ImgCorrectURL")}
                 onChange={(e) => handleFileChange(e, setimg2prev)}
                accept="image/*"
              />
              <div className="rounded-full h-full w-20">
                <img className="w-full" src={img2prev} alt="" />
              </div>
            </div>
            <div>
      <div className="mb-4">
        <label htmlFor="quiztype" className="block text-sm font-medium text-gray-600">
          Type:
        </label>
        <select
          name="quiztype"
          id="quiztype"
          className="form-select mt-1 block w-full"
          value={quizType}
           onChange={(e) => handleChange(e)}

         // {...register("quizType")}

        >
          <option value="aprontisage">Aprontisage</option>
          <option value="validation">Validation</option>
        </select>
      </div>

      {quizType === 'validation' && (
        <div className="mb-4 ml-4">
          <label htmlFor="essai" className="block text-sm font-medium text-gray-600">
            Essai:
          </label>
          <select
            name="essai"
            id="essai"
            className="form-select mt-1 block w-full"
            {...register("Essaiype")}
          >
            <option value="null">Select Essai</option>
            <option value="1">1er Essai</option>
            <option value="2">2ème Essai</option>
            <option value="3">3ème Essai</option>
          </select>
        </div>
      )}
    </div>

            <button
              type="submit"
              className="flex items-center gap-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              
            >
           { loading ? <BiLoader className=" animate-spin w-6 h-6" /> : <span>  create quiz</span>}
            </button>


            
          </form>
        </div>
            
        </div>
    );
}

export default Createnewquiz;
