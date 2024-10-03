
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Dasboard from './pages/Dasboard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie } from './hooks/cookies';
import Navbarguest from './component/navbarguest';
import NavbarAth from './component/navbarauth';
import Profile from './pages/profile';
import Welcome from './pages/welcome';
import PasswordReset from './pages/auth/PasswordReset';
import Quiz from './pages/quiz/quiz';
import { toggleDarkMode } from './store/darkmod/darkslice';
import Correctquiz from './pages/quiz/correctquiz';
import Admin from './pages/admin/admin';
import Quizmanager from './pages/admin/manage/quizmanager';
import Usermanager from './pages/admin/manage/usermanager';
import Questionmanager from './pages/admin/manage/questionmanager';
import Associate from './pages/admin/manage/associate';
import { getUser } from './store/auth/loginslice';
import Correctionquiz from './pages/admin/manage/correctionquiz';
import { getmyscore } from './store/profile/profileslice';
 import Usersscores from './pages/admin/manage/usersscores';
import Myscore from './pages/myscore';
import Quizvalidation from './pages/quizvalidation/quizvalidation';
import Correctquizvalidation from './pages/quizvalidation/correctquizvalidation';
import Finalegame from './pages/finalegame/Finalegame';
import { Activeuser, Activeuservalidation, Admineuser, Authuser, Publicuser } from './pages/ProtectedRouteComponent';
import Pointmanager from './pages/admin/manage/pointment';
import Notfound from './pages/404/notfound';
import Timer from './component/timer/timer';
import HomeCarousel from './component/home/HomeCarousel';
 
 
import './App.css';

function App() {
  const location = useLocation();
  const Navigate = useNavigate();
  const dispatch = useDispatch();
   const { user ,isAuthenticated,isLoading,errors} = useSelector((state) => state.loginslice);
   const { myuser_score ,quiztokenstatus } = useSelector((state) => state.profileslice);

 
    useEffect(() => {
      dispatch(getUser());
      dispatch(getmyscore());
 
    }, [dispatch]);
  

 

  

  return (
    <>
   
   {isAuthenticated    ? <NavbarAth /> : <Navbarguest />}



      
 


      <Routes key={location.pathname} location={location}>
          
        <Route path="/" element={   <Welcome />} />
        
        

        HomeCarousel
        <Route path="/login"                  element={   <Publicuser  >  <Login />   </Publicuser>  }  />
         <Route path="/password-reset/:token" element={  <Publicuser  >  <PasswordReset/>   </Publicuser>         } />
         <Route path="/register"              element={  <Publicuser  >     <Register />   </Publicuser>   } />




        
        <Route path="/dasboard" element={               <Authuser> <Dasboard /></Authuser>            }/>
        <Route path="/profile" element={               <Authuser ><Profile /></Authuser>  }/>
        <Route path="/myscore" element={                <Authuser> <Myscore /></Authuser>    } />

       <Route path="/quiz"            element={    <Activeuser>  <Quiz /> </Activeuser>}/>
        <Route path="/correctquiz"     element={    <Activeuser> <Correctquiz /> </Activeuser>    }  />
        <Route path="/quizvalidation"   element={ <Activeuservalidation> <Quizvalidation /> </Activeuservalidation>  }  />
        <Route path="/correctquizvalidation" element={   <Activeuservalidation> <Correctquizvalidation /> </Activeuservalidation>  } />
        <Route path="/finalegame"     element={        <Finalegame />   } />


        

        
         <Route   path="/admin" element={ <Admineuser children={<Admin />}/>    }   >
              <Route path="quizmanager" element={<Quizmanager />} />  
              <Route path="users" element={<Usermanager />} /> 
              <Route path="questions" element={<Questionmanager />} /> 
              <Route path="associate" element={<Associate />} /> 
              <Route path="correctionquiz" element={<Correctionquiz />} /> 
              <Route path="usersscores" element={<Usersscores />} /> 
              <Route path="pointmanager" element={<Pointmanager />} /> 
              
           </Route>

           <Route path="*" element={<Notfound />} /> 

           



        
        

      

      </Routes>
    </>
  );
}

export default App;
