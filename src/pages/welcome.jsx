import { CgArrowRightR } from "react-icons/cg"; 
import { BsChevronCompactUp } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HomeCarousel from "../component/home/HomeCarousel";
import Lesbruits from "../component/home/Lesbruits";
import Butonstyle3 from "../component/button3/butonstyle3";
import ButtonvHome from "../component/buttonvHome/buttonvHome";
const Welcome = () => {
  const { isDarkMode } = useSelector((state) => state.themeSlice);
  const { myuser_score, scoredif } = useSelector((state) => state.profileslice);

  const themeClass = isDarkMode === "dark" ? "welcomdark" : "welcomlligth";
  return (
    <div className="w-full overflow-x-hidden">
      <article
        style={{
          backgroundImage: "url('/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`  flex flex-col`}
      >
        <section className={` `} id="section_1">
          <div
            className="container mx-auto text-center h-screen w-auto flex justify-center items-center"
            style={{
              backgroundImage: "url('/quizbg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="-mt-10 text-5xl text-center font-bold from-green-500  via-slate-200  to-green-500 bg-gradient-to-r bg-clip-text text-transparent">
              Outil d’apprentissage à la lecture de la polygraphie par
              e-learning
            </h1>
          </div>
        </section>
        <HomeCarousel />
        <Lesbruits />
        <section className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0 py-10 px-4 md:px-10 lg:px-20">
  {/* Article 1 */}
  <article className="relative flex flex-col w-full md:w-1/2 rounded-xl bg-white text-gray-700 shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg">
    <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg">
      <img
        src="./home/img1.png"
        alt="Apprentissage"
        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
      />
    </div>
    <div className="p-6">
      <h5 className="mb-2 block font-sans text-lg md:text-xl lg:text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900">
        Cet outil va vous permettre :
      </h5>
      <p className="block font-sans text-sm md:text-base lg:text-lg font-light leading-relaxed text-gray-700">
        D’apprendre à reconnaitre les événements ventilatoires anormaux pendant le sommeil.
      </p>
      <p className="block font-sans text-sm md:text-base lg:text-lg font-light leading-relaxed text-gray-700">
        À la fin de votre apprentissage, vous lirez <b>rapidement et correctement</b> une polygraphie.
      </p>
    </div>
    <div className="p-6 pt-0">
      <Link to="/quiz">
        <ButtonvHome
          text="Quiz d'apprentissage"
          className="hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </Link>
    </div>
  </article>

  {/* Article 2 */}
  <article className="relative flex flex-col w-full md:w-1/2 rounded-xl bg-white text-gray-700 shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg">
    <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg">
      <img
        src="./home/img2.jpg"
        alt="Pédagogique"
        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
      />
    </div>
    <div className="p-6">
      <h5 className="mb-2 block font-sans text-lg md:text-xl lg:text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900">
        Intérêt pédagogique de cet outil d’apprentissage :
      </h5>
      <p className="flex items-center space-x-2 font-sans text-sm md:text-base lg:text-lg font-light leading-relaxed text-gray-700">
        <CgArrowRightR className="text-[#16a030]" /> 
        <span>« L’apprenti » est actif, vous apprenez par vous-même.</span>
      </p>
      <p className="flex items-center space-x-2 font-sans text-sm md:text-base lg:text-lg font-light leading-relaxed text-gray-700">
        <CgArrowRightR className="text-[#16a030]" /> 
        <span>L’erreur est au cœur du processus d’apprentissage.</span>
      </p>
      <p className="flex items-center space-x-2 font-sans text-sm md:text-base lg:text-lg font-light leading-relaxed text-gray-700">
        <CgArrowRightR className="text-[#16a030]" /> 
        <span>Vous poursuivez l’apprentissage à votre rythme.</span>
      </p>
    </div>
    <div className="p-6 pt-0">
      {myuser_score > scoredif ? (
        <Link to="/quizvalidation">
          <ButtonvHome
            text="Quiz de validation"
            className="hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </Link>
      ) : (
        <div className="w-full md:w-auto select-none rounded-lg bg-gray-300 py-3 px-6 text-center font-sans text-xs md:text-sm lg:text-base font-bold   text-white shadow-md transition-all">
         Quiz de validation
        </div>
      )}
    </div>
  </article>
</section>



        <section className={` rounded-full p-12 text-white`} id="section_3 ">
          <div className="containerremoved mx-auto">
            <div className="text-center">
              <h3
                className={`text-2xl    text-center font-bold from-green-700 via-orange-100 to-green-800 bg-gradient-to-r bg-clip-text text-transparent mb-4`}
              >
                Découvrez le plaisir de la connaissance avec notre application
                de quiz !
              </h3>
            </div>

            <div className="mx-auto md:w-4/5">
              <div className="timeline-container">
                <ul
                  className="vertical-scrollable-timeline"
                  id="vertical-scrollable-timeline"
                >
                  <div className="list-progress">
                    <div className="inner"></div>
                  </div>

                  <motion.li
                    exit={{ scale: 0 }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    className="mb-12 flex items-center transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    <div className="icon-holder mr-6 bg-white rounded-full p-2">
                      <BiSearchAlt2 className="h-12 w-12 fill-yellow-400" />
                    </div>
                    <div>
                      <h4 className=" text-green-300 mb-3 text-xl font-semibold">
                        Diversité des sujets
                      </h4>
                      <p className=" ">
                        Explorez une grande variété de catégories de quiz, de la
                        science à la pop culture, en passant par la géographie
                        et les énigmes
                      </p>
                    </div>
                  </motion.li>

                  <motion.li
                    exit={{ scale: 0 }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    className="mb-12 flex items-center transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    <div className="icon-holder mr-6 bg-white rounded-full p-2">
                      <BsChevronCompactUp className="h-12 w-12 fill-green-400" />
                    </div>
                    <div>
                      <h4 className=" text-green-300 mb-3 text-xl font-semibold">
                        Challenge Constant
                      </h4>
                      <p className="">
                        Mettez votre cerveau à l'épreuve avec des questions de
                        difficulté variable, des quiz rapides aux énigmes plus
                        complexes
                      </p>
                    </div>
                  </motion.li>

                  <motion.li
                    exit={{ scale: 0 }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    className="mb-12 flex items-center transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    <div className="icon-holder mr-6 bg-white rounded-full p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="bi bi-book h-12 w-12 text-yellow-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6l16.25 3L20 12l-16.25-3L4 6z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6s1.5 1 3 0"
                        />
                        <path    strokeLinecap="round"   strokeLinejoin="round"  strokeWidth="2"   d="M4 6s1.5-1 3 0M4 6s1.5 1 3 0"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-green-300 mb-3 text-xl font-semibold">    Compétition amicale   </h4>
                      <p className="">    Jouez avec vos amis ou défiez des joueurs du monde    entier pour voir qui est le maître du quiz
                      </p>
                    </div>
                  </motion.li>

                  <motion.li
                    exit={{ scale: 0 }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    className="mb-12 flex items-center transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    <div className="icon-holder mr-6 bg-white rounded-full p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="bi bi-user h-12 w-12 text-pink-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                        />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-green-300 mb-3 text-xl font-semibold">
                        Apprentissage ludique
                      </h4>
                      <p className="">
                        Apprenez de nouvelles informations de manière amusante
                        et interactive. Nos quiz sont conçus pour éduquer tout
                        en divertissant
                      </p>
                    </div>
                  </motion.li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Welcome;
