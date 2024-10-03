import { FaRegFilePowerpoint } from "react-icons/fa"; 
import { MdSportsScore } from "react-icons/md"; 
import { BsFillPenFill } from "react-icons/bs"; 
import { FaUserShield } from "react-icons/fa"; 
import { FaLink } from "react-icons/fa"; 
import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { MdQuiz } from 'react-icons/md';
import { useSelector } from "react-redux";
import { getCookie } from "../../hooks/cookies";
import 'toastr/build/toastr.min.css';  
import toastr from  "toastr";

const Admin = () => {
    const [isNavOpen, setIsNavOpen] = useState(true);
    const handleToggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    const { user} = useSelector((state) => state.loginslice);
     
 
    return (
        <div className={`flex ${isNavOpen ? '' : 'nav-closed'}`}>
            <div className="leftside">
                <div className="toggle bg-blue-500  text-white hover:bg-blue-600  ">
                    <button className="  " onClick={handleToggleNav}>
                        <AiOutlineMenuUnfold className=" w-6 h-6" />
                    </button>
                </div>
                <nav
                    className={`  w-[250px]  h-screen bg-blue-500 ${isNavOpen ? 'transition-max-height duration-700 ease-in-out max-h-full' : 'hidden max-h-0 overflow-hidden'}`}
                >
                     <div className=" flex flex-col items-center gap-0 text-white">
                        <FaUserShield className=" fill-yellow-300 w-24 h-24"/>
                        <span className=" mt-[-12px]">{user.name}</span>

                     </div>
                    <ul className="flex flex-col">
                        <li className='flex items-center gap-3 text-white hover:bg-blue-600 px-4 py-2'>
                            <MdQuiz className=" w-6 h-6" />
                            <NavLink     className={({ isActive }) => (isActive ? ' text-yellow-300' : 'inactive')}   to="quizmanager">Quiz Manager</NavLink>
                        </li>
                        <li className='flex items-center gap-3 text-white hover:bg-blue-600 px-4 py-2'>
                            <AiOutlineUsergroupAdd className=" w-6 h-6" />
                            <NavLink   className={({ isActive }) => (isActive ? ' text-yellow-300' : 'inactive')}  to="users">Users Manager</NavLink>
                        </li>
                        <li className='flex items-center gap-3 text-white hover:bg-blue-600 px-4 py-2'>
                            <HiOutlineQuestionMarkCircle className=" w-6 h-6" />
                            <NavLink   className={({ isActive }) => (isActive ? ' text-yellow-300' : 'inactive')}  to="questions">Questions Manager</NavLink>
                        </li>

                        <li className='flex items-center gap-3 text-white hover:bg-blue-600 px-4 py-2'>
                          <FaLink className=" w-6 h-6" />  <NavLink    className={({ isActive }) => (isActive ? ' text-yellow-300' : 'inactive')}  to="associate">associate quiz</NavLink>
                        </li>

                        <li className='flex items-center gap-3 text-white hover:bg-blue-600 px-4 py-2'>
                          <BsFillPenFill className=" w-6 h-6"  />  <NavLink   className={({ isActive }) => (isActive ? ' text-yellow-300' : 'inactive')}  to="correctionquiz">correction quiz</NavLink>
                        </li>
                        <li className='flex items-center gap-3 text-white hover:bg-blue-600 px-4 py-2'>
                       < MdSportsScore className=" w-6 h-6"  />  <NavLink   className={({ isActive }) => (isActive ? ' text-yellow-300' : 'inactive')}  to="usersscores">scores</NavLink>
                        </li>

                        <li className='flex items-center gap-3 text-white hover:bg-blue-600 px-4 py-2'>
                    < FaRegFilePowerpoint className=" w-6 h-6"  />  <NavLink   className={({ isActive }) => (isActive ? ' text-yellow-300' : 'inactive')}  to="pointmanager">Points</NavLink>
                        </li>

                        
                         
                    </ul>
                </nav>
            </div>
            <div className="mainside">
                <Outlet />
            </div>
        </div>
    );
};

export default Admin;
