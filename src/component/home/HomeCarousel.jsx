import React from 'react';
import { register } from 'swiper/element/bundle';
import Cardslider from './card';
import "./css.css"
import { useSelector } from 'react-redux';
import { FaLungs, FaHeartbeat, FaStethoscope, FaProcedures, FaWind, FaBrain } from 'react-icons/fa';

// register Swiper custom elements
register();

const Swapier = () =>  {

  const { isDarkMode } = useSelector((state) => state.themeSlice);

  return (
    <div className={`container m-5  bg-transparent `}>
      <h3 className={`text-2xl    text-center font-bold from-green-400 via-orange-100 to-green-400 bg-gradient-to-r bg-clip-text text-transparent mb-4`}>DEFINITION DES EVENEMENTS VENTILATOIRES ANORMAUX</h3>

      <swiper-container  speed="500" loop="true" pagination="true" pagination-clickable="true"
        breakpoints={
          JSON.stringify({

            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },

            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            }
          })
        }
      > <swiper-slide>
           <Cardslider
          title="L’Apnée obstructive"
          desc="Elle est définie par un arrêt du débit aérien naso-buccal sur le signal de lunette nasale et/ou un silence sur le signal de son trachéal, pendant au moins 10 s avec persistance d’efforts ventilatoires pendant l’apnée : Persistance des mouvements thoraco-abdominaux qui sont en opposition de phase Persistance du signal de pression sus-sternale. Bruits de lutte et reprise ventilatoire bruyante sur le son trachéal."
          img="img1"
          icon={<FaLungs />} // Add the corresponding icon
        />
      </swiper-slide>

      <swiper-slide>
        <Cardslider
          title="L’Apnée centrale"
          desc="Elle est définie par un arrêt du débit aérien naso-buccal sur le signal de lunette nasale et/ou un silence sur le signal de son trachéal, pendant au moins 10 s avec absence d’efforts ventilatoires pendant l’apnée Absence des mouvements thoraco-abdominaux Absence de signal de pression sus-sternale. Absence de bruits de lutte et reprise ventilatoire progressive et silencieuse sur le son trachéal."
          img="img2"
          icon={<FaHeartbeat />} // Add the corresponding icon
        />
      </swiper-slide>

      <swiper-slide>
        <Cardslider
          title="L’Apnée mixte"
          desc="Elle est définie par un arrêt du débit aérien naso-buccal pendant au moins 10 s L’apnée débute comme une apnée centrale, mais se termine comme une apnée obstructive avec des efforts ventilatoires"
          img="img3"
          icon={<FaStethoscope />} // Add the corresponding icon
        />
      </swiper-slide>

      <swiper-slide>
        <Cardslider
          title="L’Hypopnée"
          desc="Cet évènement doit avoir une durée d’au moins 10 s et répondre à l’une ou l’autre des propositions suivantes: une diminution d’au moins 50 % d’un signal de lunettes nasales par rapport au niveau de base Ou une diminution inférieure à 50 % associée à une désaturation transcutanée d’au moins 3 % et/ou à un micro-éveil L’hypopnée est obstructive : Si il existe au moins 1 des critères suivants: ⦁	décalage de phase des mouvements thoraco-abdominaux ⦁	présence d'un plateau inspiratoire sur le signal de pression nasale ⦁	intensité croissante des ronflements qui se traduit par un rapport des énergies inspiratoires et expiratoires (Ei/ Ee) supérieur à 1 L’hypopnée est centrale : Si les critères précédents sont absents, Et en présence de : - d'une ventilation périodique d’un rapport des énergies inspiratoires et expiratoires (Ei/Ee) inférieur à 1"
          img="img4"
          icon={<FaProcedures />} // Add the corresponding icon
        />
      </swiper-slide>

      <swiper-slide>
        <Cardslider
          title="L’hypopnée est obstructive"
          desc="Si il existe au moins 1 des critères suivants: décalage de phase des mouvements thoraco-abdominaux présence d'un plateau inspiratoire sur le signal de pression nasale intensité croissante des ronflements qui se traduit par un rapport des énergies inspiratoires et expiratoires (Ei/ Ee) supérieur à 1"
          img="img5"
          icon={<FaWind />} // Add the corresponding icon
        />
      </swiper-slide>

      <swiper-slide>
        <Cardslider
          title="L’hypopnée est centrale"
          desc="Si les critères précédents sont absents, Et en présence de : - d'une ventilation périodique d’un rapport des énergies inspiratoires et expiratoires (Ei/Ee) inférieur à 1"
          img="img6"
          icon={<FaBrain />} // Add the corresponding icon
        />
      </swiper-slide>
      </swiper-container>
    </div>
  );
};

export default Swapier;
