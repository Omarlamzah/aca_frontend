import React, { useEffect } from 'react';
import Scoreresultloser from '../../component/scoreresultloser/loserscore';
 import Wanerscore from "../../component/scoreresultwaner/wanerscore"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
 
const Finalegame = () => {
    const { myuser_score,scoredif ,quiztokenstatus } = useSelector((state) => state.profileslice);

    const { user, isAuthenticated, isLoading, errors } = useSelector((state) => state.loginslice);

    const Navigate=useNavigate();
    useEffect(()=>{
      if(user && user.isactive==0){
        Navigate("/dasboard")
      }
    },[])

    const { isDarkMode } = useSelector((state) => state.themeSlice);
    const themeClass = isDarkMode === 'dark' ? 'drmode' : 'ltmode';
    const themeClassauth = isDarkMode === 'dark' ? 'authdark' : 'autligth';
     return (
        <div className= {` w-screen h-screen flex justify-center items-center ${themeClass}`}>

            { scoredif && scoredif < myuser_score ? (  <Wanerscore />):(<Scoreresultloser/>) }

          
        </div>
    );
}

export default Finalegame;
