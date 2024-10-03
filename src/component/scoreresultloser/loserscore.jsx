import React, { useEffect } from 'react';
import "./css.css"
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Scoreresultloser = ({ text}) => {

  const { myuser_score,scoredif ,quiztokenstatus } = useSelector((state) => state.profileslice);
 


    return (
      <div className="btn-conteiner">
      <div class="results-summary-container">
       <div class="confetti">
        
      </div>
      <div class="results-summary-container__result">
        <div class="heading-tertiary">Your Result</div>
        <div class="result-box">
          <div class="heading-primary"> {myuser_score}%</div>
          <p class="result"></p>
        </div>
        <div class="result-text-box">
          <div class="heading-secondary">lowser</div>
          <p class="paragraph">
          You scored under  than{myuser_score}/{scoredif}  of the gloable score.

          </p>
        </div>
        <div class="heading-secondary"> {quiztokenstatus && quiztokenstatus=="allquiztoken" ? ("complete all quiz"):""}</div>

      </div>
     
    </div>
</div>   );
}

export default Scoreresultloser;
