import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { backendUrl } from '../../globalvar';
import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox,   } from 'lightbox.js-react'; 
import Butonstylev2 from '../../component/buttonv2/butonstylev2';
import { useNavigate } from 'react-router-dom';
import { getmyscore } from '../../store/profile/profileslice';

const Correctquizvalidation = () => {
    const Navigate = useNavigate();
   const {nextQuizPart, questions, totalScore, userResponses, loading, error } = useSelector((state) => state.quizslice);

 

           
  const { isDarkMode } = useSelector((state) => state.themeSlice);
  const themeClass = isDarkMode === 'dark' ? 'drmode' : 'ltmode';
  const themeClassauth = isDarkMode === 'dark' ? 'authdark' : 'autligth';
  return (
    <div className={` ${themeClass}`}>
 
 <div className='  m-auto rounded-lg p-2 bg-blue-500'>
<h2 className='   text-center  text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-400 animate-gradient'>Questions and Correct Answers</h2>
<h2 className='   text-center  text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-400 animate-gradient'>your score now is  {totalScore}</h2>

</div>
      <div>
     


<SlideshowLightbox className=' ' showThumbnails={true}>
                     <img className=' md:w-[70%] w-1/2 m-auto' src={`${nextQuizPart &&
          backendUrl + "storage/" + nextQuizPart.ImgCorrectURL}`}/>  
                   </SlideshowLightbox>  
      </div>
      <div className=''>
        {questions && questions.map((question) => (
          <div key={question.QuestionID} className=' shadow-[0px_3px_0px_1px_#4fd1c5] w-[90%] m-auto rounded-3xl'>
            <p>{question.QuestionText}</p>
            <ul>
              {question.answers.map((answer) => (
                <li 
                  key={answer.AnswerID}
                  className={`${answer.IsCorrect ? 'correct p-2 bg-green-800 text-white m-1 font-bold rounded-full' : 'correct p-2 bg-[#c44d4d] m-1 font-bold rounded-full'} pl-7`}
                  style={{ color: answer.IsCorrect ? 'green p-1' : 'black' }}
                >
                  {answer.AnswerText}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className='w-1/3 m-auto rounded-lg p-2 bg-blue-500'>
<h2 className='   text-center  text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-400 animate-gradient'>your response  </h2>
</div>
      <div>
        {userResponses && Object.keys(userResponses).map((key) => {
          const response = userResponses[key];

          return (
            <div key={key} className='  shadow-[0px_3px_0px_1px_#4fd1c5] w-[90%] m-auto rounded-3xl p-3'> 
              <p>{response.question_text}</p>
              {response.answers.length > 0 ? (
                <ul>
                  {response.answers.map((userAnswer) => (
                    <li
                      key={userAnswer.answer_id}
                      className=' pl-9'
                     > 
                      {userAnswer.answer_text}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className=' pl-9'
                >No answer provided</p>
              )}
            </div>
          );
        })}
      </div>

      <button className=' float-right' onClick={()=>{Navigate("/quizvalidation")}} ><Butonstylev2  text=" next Quiz" /> </button>

    </div>
  );
};

export default Correctquizvalidation;
