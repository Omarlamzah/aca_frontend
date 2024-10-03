import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, logoutAsync } from '../store/auth/loginslice';
import { getCookie } from '../hooks/cookies';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../component/loading/loading';
import { fetchDashboardData } from '../store/dashboard/dashboardslice';
import { backendUrl } from '../globalvar';
import 'lightbox.js-react/dist/index.css';
 import Butonstylev2 from '../component/buttonv2/butonstylev2';
import Reqularquiz from '../component/reqularquiz/reqularquiz';
import 'toastr/build/toastr.min.css';  
import toastr from  "toastr";
import { getmyscore } from '../store/profile/profileslice';
import Butonstyle from '../component/button/butonstyle';
import Butonstyle3 from '../component/button3/butonstyle3';
import { Toast } from 'bootstrap';
import dashboarddefaultimg from  "./../../public/dashboarddefaultimg.jpg"

const Dasboard = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { user, isAuthenticated, isLoading, errors } = useSelector((state) => state.loginslice);
  const { question, quizPartsImgURL, identify, totalScore, loading, error } = useSelector((state) => state.dashboardslice);
  const { myuser_score,scoredif ,quiztokenstatus} = useSelector((state) => state.profileslice);

 

 


  useEffect(() => {
            dispatch(fetchDashboardData());
           // dispatch(getUser());       
 
  }, []);

  useEffect(() => {
   // dispatch(getmyscore());
}, []);




       const startquizclick =()=>{
           Navigate("/quiz")
        
         }


         const startquizclickvalidation =()=>{
          if(myuser_score &&   myuser_score > scoredif){

           Navigate("/quizvalidation")
          }
         else{

          toastr.info("somthing wrong")
         }
          }

          
          const { isDarkMode } = useSelector((state) => state.themeSlice);
          const themeClass = isDarkMode === 'dark' ? 'drmode' : 'ltmode';
          const themeClassauth = isDarkMode === 'dark' ? 'authdark' : 'autligth';
         
  return (
    <div className= {`min-h-screen ${themeClass}`} >
      {isLoading ? (
        <Loader />
      ) : (
        <section className="container mx-auto mt-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className=" flex  col-span-3 md:col-span-2">
            <h2 class=" flex flex-col justify-center items-center text-white bg-gradient-to-b from-[#13547a] to-[#80d0c7] font-semibold text-xl  leading-tight pt-20 pb-20">
            <p class=" w-full text-center text-3xl">
                Bienvenue sur votre tableau de bord ! Commencez à jouer maintenant et prouvez que vous êtes le maître du quiz !

                </p>
            <h1 class=" text-center m-5 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-400 animate-gradient">
               Your score now is {myuser_score && myuser_score}
</h1>


<div className="flex flex-col gap-3 justify-center col-span-3 md:col-span-1">

{quiztokenstatus && quiztokenstatus=="allquiztoken"  ? 
(

<Link to="/finalegame">

        <Butonstyle3 text="see your result" />

</Link>)
:
""
}



 
   {myuser_score &&  myuser_score  > scoredif &&  quiztokenstatus != "allquiztoken" ? (
    <button className='' onClick={startquizclickvalidation}>
      <Butonstyle3 text="start quiz validation" />
    </button>) : ( "")}


     { quiztokenstatus != "allquiztoken" ? (
          <button className='' onClick={startquizclick}>
          <Butonstylev2 text="start quiz aprontisage" />
  </button>):("")
     }


 

</div>







                        </h2>
            </div>
            <div className=" flex flex-col items-center justify-center col-span-3 md:col-span-1">
              <h1 className="w-full text-center text-[30px] my-3 font-semibold  ">Regular Quizzes</h1>

            <Reqularquiz
             startquizclick={startquizclick} 
              identify={identify.identify} 
              QuestionText={question && question.QuestionText}
              quizPartsImgURL={`${quizPartsImgURL ? backendUrl+"storage/"+quizPartsImgURL : dashboarddefaultimg}`} 
              
              
              />
            </div>
          </div>

        </section>
      )}
    </div>
  );
};

export default Dasboard;
