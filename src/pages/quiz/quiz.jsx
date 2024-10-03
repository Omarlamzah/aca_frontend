import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox, initLightboxJS, Image } from 'lightbox.js-react'; 
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startQuiz, submitQuizAnswers } from '../../store/quiz/quizslice';
import { getCookie } from '../../hooks/cookies';
import { backendUrl } from '../../globalvar';
import Loader from '../../component/loading/loading';
import $ from "jquery"
import { useNavigate } from 'react-router-dom';
import Butonstylev2 from '../../component/buttonv2/butonstylev2';
import 'toastr/build/toastr.min.css';  
import toastr from  "toastr";
import { getmyscore } from '../../store/profile/profileslice';
import Timer from '../../component/timer/timer';


const Quiz = () => {
  const dispatch = useDispatch();
  const Navigate  =useNavigate()
  const { nextQuizPart ,totalScore,loading,gamestatus} = useSelector((state) => state.quizslice);
 
  const {  user } = useSelector((state) => state.loginslice);

  // Initialize selectedAnswers with an object where keys are questionIDs and values are arrays of selected answerIDs
  const [selectedAnswers, setSelectedAnswers] = useState({});
   useEffect(() => { 
        dispatch(startQuiz("unquiz"));

    },[]);


 

 
  const handleAnswerSelection = (questionId, answerId, foscript, questionfoscript) => {
    console.log("for singl" + questionId, answerId, foscript, questionfoscript);
          if (foscript === "answer_2") {
         const foundQuestion1 = nextQuizPart.questions.find(  (question) => question.questionfoscript === "question_container_2");
         setSelectedAnswers((prevSelectedAnswers) => ({   ...prevSelectedAnswers,      [foundQuestion1.QuestionID]: [],   }));
         setSelectedAnswers((prevSelectedAnswers) => ({      ...prevSelectedAnswers,    [questionId]: [answerId], }));
         console.log(selectedAnswers)

         $("#question_container_2").hide(800)
         $("#question_container_3").show(800)
         $("#question_container_4").show(800) 
         $("#question_container_5").show(800)
       //  $("#question_container_6").show(800)
       //  $("#question_container_7").show(800)

      } else if (foscript === "answer_3") {
         const foundQuestion3 = nextQuizPart.questions.find(  (question) => question.questionfoscript === "question_container_3");
         const foundQuestion4 = nextQuizPart.questions.find(  (question) => question.questionfoscript === "question_container_4");
         const foundQuestion5 = nextQuizPart.questions.find(  (question) => question.questionfoscript === "question_container_5");
         const foundQuestion6 = nextQuizPart.questions.find(  (question) => question.questionfoscript === "question_container_6");
         const foundQuestion7 = nextQuizPart.questions.find(  (question) => question.questionfoscript === "question_container_7");
         
          setSelectedAnswers((prevSelectedAnswers) => ({    ...prevSelectedAnswers,  [foundQuestion3.QuestionID]: [],   }));
          setSelectedAnswers((prevSelectedAnswers) => ({    ...prevSelectedAnswers,  [foundQuestion4.QuestionID]: [],   }));
          setSelectedAnswers((prevSelectedAnswers) => ({    ...prevSelectedAnswers,  [foundQuestion5.QuestionID]: [],   }));
          setSelectedAnswers((prevSelectedAnswers) => ({    ...prevSelectedAnswers,  [foundQuestion6.QuestionID]: [],   }));
          setSelectedAnswers((prevSelectedAnswers) => ({    ...prevSelectedAnswers,  [foundQuestion7.QuestionID]: [],   }));
          setSelectedAnswers((prevSelectedAnswers) => ({    ...prevSelectedAnswers,    [questionId]: [answerId], }));
          $("#question_container_2").show(800)
          $("#question_container_3").hide(800)
          $("#question_container_4").hide(800) 
          $("#question_container_5").hide(800)
         // $("#question_container_6").hide(800)
         // $("#question_container_7").hide(800)
 

      }
      
      
      
      else if (foscript === "answer_7") {
     
        const foundQuestion6 = nextQuizPart.questions.find(  (question) => question.questionfoscript === "question_container_6");
        const foundQuestion7 = nextQuizPart.questions.find(  (question) => question.questionfoscript === "question_container_7");
         setSelectedAnswers((prevSelectedAnswers) => ({    ...prevSelectedAnswers,  [foundQuestion6.QuestionID]: [],   }));
         setSelectedAnswers((prevSelectedAnswers) => ({    ...prevSelectedAnswers,  [foundQuestion7.QuestionID]: [],   }));
         setSelectedAnswers((prevSelectedAnswers) => ({    ...prevSelectedAnswers,    [questionId]: [answerId], }));
     //    $("#question_container_6").hide(800)
      //   $("#question_container_7").hide(800)
     }

      
     else if (foscript === "answer_8") {
         setSelectedAnswers((prevSelectedAnswers) => ({    ...prevSelectedAnswers,    [questionId]: [answerId], }));
       //  $("#question_container_6").show(800)
      //   $("#question_container_7").show(800)
     }
     
     
      else {
        setSelectedAnswers((prevSelectedAnswers) => ({      ...prevSelectedAnswers,    [questionId]: [answerId], }));
      }
   };
  

  const handleMultiAnswerSelection = (questionId, answerId,foscript) => {
     console.log("for multiple"+questionId, answerId,foscript)
    setSelectedAnswers((prevSelectedAnswers) => {
      const currentSelected = prevSelectedAnswers[questionId] || [];
      const updatedSelected = currentSelected.includes(answerId) ? currentSelected.filter((id) => id !== answerId) : [...currentSelected, answerId];     
        return { ...prevSelectedAnswers, [questionId]: updatedSelected };
     
    });

  };


  const handleSubmitQuiz = () => {
     dispatch(submitQuizAnswers({selectedAnswers,quizid:nextQuizPart.PartID}));
     dispatch(getmyscore());
     Navigate("/correctquiz");
  };




  const { isDarkMode } = useSelector((state) => state.themeSlice);
  const themeClass = isDarkMode === 'dark' ? 'drmode' : 'ltmode';
 
  return (
    <div className={` ${themeClass}`}>
      {loading ? (
        <Loader />
      ) : (
        <section className="p-4 lg:flex">
    
           {totalScore ? <h1>{totalScore}</h1> : ""}
          <div className=" w-screen ">
            {nextQuizPart && (
              <SlideshowLightbox>
                <img
                  className=" md:w-[70%] w-full lg:w-[100%] m-auto"
                  src={`${nextQuizPart &&
                    backendUrl + "storage/" + nextQuizPart.ImgURL}`}
                />
              </SlideshowLightbox>
            )}
                  <Timer ></Timer>
          </div>

          <div className='h-[90vh] lg:h-screen overflow-scroll border-[#191970] border p-2 rounded-lg shadow-[inset_0px_0px_13px_5px_#4299e1]'>
          <h1 className=' w-full text-center text-3xl bg-slate-500'>Quiz d'apprentissage</h1>
                    {nextQuizPart &&
              nextQuizPart.questions.map((question, index) => (
                <div
                  key={question.QuestionID}
                  id={question.questionfoscript}
                  className={`mb-4 ${
                    selectedAnswers[question.QuestionID] &&
                    selectedAnswers[question.QuestionID].includes("answer_3")
                      ? "hidden"
                      : ""
                  } ${
                    selectedAnswers[question.QuestionID] &&
                    selectedAnswers[question.QuestionID].includes("answer_2")
                      ? "hidden"
                      : ""
                  }`}
                >
                  <h3 className="text-lg font-semibold mb-2">
                    <p>{"Question " + (index + 1)}</p>
                    {question.QuestionText}
                  </h3>
                  {question.answers.map((answer) => (
                    <label
                    
                      key={answer.AnswerID}
                      className=" ml-[5%] w-[80%] shadow-[0px_5px_6px_2px_#38b2ac] rounded-3xl gap-3 flex p-5 items-center hover:bg-yellow-300 transition cursor-pointer"
                    >
                         <input
                          id={answer.foscript}
                          type={
                            answer.foscript === "answer_3" ||
                            answer.foscript === "answer_2" ||
                            answer.foscript === "answer_7" ||
                            answer.foscript === "answer_8"
                              ? "radio"
                              : "checkbox"
                          }
                          name={`question_${question.QuestionID}`}
                          checked={
                            selectedAnswers[question.QuestionID] &&
                            (answer.foscript === "answer_3" ||
                              answer.foscript === "answer_2" ||
                              answer.foscript === "answer_7" ||
                              answer.foscript === "answer_8"
                              ? selectedAnswers[question.QuestionID][0] ===
                                answer.AnswerID
                              : selectedAnswers[question.QuestionID].includes(
                                  answer.AnswerID
                                ))
                          }
                          onChange={() =>
                            answer.foscript === "answer_3" ||
                            answer.foscript === "answer_2" ||
                            answer.foscript === "answer_7" ||
                            answer.foscript === "answer_8"
                              ? handleAnswerSelection(
                                  question.QuestionID,
                                  answer.AnswerID,
                                  answer.foscript,
                                  question.questionfoscript
                                )
                              : handleMultiAnswerSelection(
                                  question.QuestionID,
                                  answer.AnswerID,
                                  answer.foscript,
                                  question.questionfoscript
                                )
                          }
                          className="peer dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-10 h-10"
                        />
                      
                      {answer.AnswerText} 
                      </label>
                    
                  ))}

                </div>
                
              ))}
                                          <button className=' float-right' onClick={handleSubmitQuiz} ><Butonstylev2  text=" Submit Quiz" /> </button>

          </div>

        </section>
      )}
    </div>
  );
};
export default Quiz;
