import React from 'react';
import "./css.css"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Wanerscore = ({ text}) => {
  const { myuser_score ,scoredif,quiztokenstatus } = useSelector((state) => state.profileslice);

    return (
<div className="btn-conteiner animate-bounce ">
<div class="results-summary-container">
       <div class="confetti">
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
      </div>
      <div class="results-summary-container__result">
        <div class="heading-tertiary">Your Result</div>
        <div class="result-box">
          <div class="heading-primary">{myuser_score && myuser_score}%</div>
          <p class="result"></p>
        </div>
        <div class="result-text-box">
          <div class="heading-secondary">excellent</div>
          <p class="paragraph">
            You scored higher than {myuser_score}/{scoredif}  of the gloable score.
          </p>
          <div class="heading-secondary"> {quiztokenstatus && quiztokenstatus=="allquiztoken" ? ("complete all quiz"):""}</div>
 
        </div>


      </div>
      
    </div>
</div>   );
}

export default Wanerscore;
