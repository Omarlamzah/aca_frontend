import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox, initLightboxJS, Image } from 'lightbox.js-react'; 
  import React from "react";
import "./css.css";
import Butonstylev2 from '../buttonv2/butonstylev2';

const Reqularquiz = ({ QuestionText,quizPartsImgURL ,startquizclick}) => {
  return (
    <div className="f product-card w-[400px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
      
    
      <div className="absolute -left-[40%] top-0 group-hover:rotate-12 transition-all duration-300 group-hover:scale-150">
        <div className="flex gap-1">
          {/* Your SVG code */}
        </div>
      </div>
      <div className="absolute rounded-full bg-gray-500 z-20 left-1/2 top-[44%] h-[110%] w-[110%] -translate-x-1/2 group-hover:top-[58%] transition-all duration-300"></div>
      <div className="para uppercase text-center leading-none z-40">
        <p className="text-black font-semibold text-xs font-serif">Question</p>
        <p className="font-bold text-xl tracking-wider text-gray-500">{QuestionText}</p>
      </div>
      <div className="img w-[180px] aspect-square bg-gray-100 z-40 rounded-md">

             {quizPartsImgURL &&  <SlideshowLightbox className='grid grid-cols-1 gap-2' showThumbnails={true}>
                     <img className='' src={quizPartsImgURL} />  
                   </SlideshowLightbox>  }

               


        {/* Your SVG code */}
      </div>
      <div className="btm-_container z-40 flex flex-row justify-between items-end gap-10">
       
        <div className=" ">
          <button onClick={ startquizclick} className=" ">
          <Butonstylev2  text="start quiz" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reqularquiz;
