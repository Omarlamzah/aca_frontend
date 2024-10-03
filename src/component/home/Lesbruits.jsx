import React from 'react';
import imgle from "./../../assets/doc/0.jpg"
import { useSelector } from 'react-redux';

const Lesbruits =  () => {
  const { isDarkMode } = useSelector((state) => state.themeSlice);

  return (
    <div className={`container m-5  `}>
       <h3 className={`text-2xl    text-center font-bold from-green-700 via-orange-100 to-green-800 bg-gradient-to-r bg-clip-text text-transparent mb-4`}>Les bruits trachéaux</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
        <div className="mb-4">
          <h3 className=" text-green-500 text-lg font-bold mb-2">L’intensité des bruits trachéaux dépend :</h3>
          <ul className="list-disc ml-8">
            <li>du débit aérien</li>
            <li>du régime d’écoulement</li>
            <li>du calibre des voies aériennes</li>
          </ul>
          <p className="mt-2">C’est donc une méthode intéressante pour identifier :</p>
          <ul className="list-disc ml-8">
            <li>Les apnées et hypopnées (diminution ou absence de débit)</li>
            <li>Les ronflements</li>
            <li>La variation de la Résistance des VAS</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="  text-green-500  text-lg font-bold mb-2">A l’éveil: à l’inspiration et à l’expiration</h3>
          <ul className="list-disc ml-8">
            <li>Ecoulement laminaire</li>
            <li>Relation P/V’(R) des VAS est linéaire</li>
            <li>Intensité sonore proportionnelle au V’</li>
            <li>Energie: Ei = Ee</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="  text-green-500  text-lg font-bold mb-2">Pendant le sommeil, chez un ronfleur :</h3>
          <p className="mb-2">A l’inspiration:</p>
          <ul className="list-disc ml-8">
            <li>Ecoulement tourbillonnaire</li>
            <li>La pente de la relation P/V’ augmente et peut devenir négative</li>
            <li>Cette pente négative précède l’apparition des ronflements</li>
            <li>Augmentation de l’intensité sonore (+ si Ronf.)</li>
          </ul>
          <p className="mb-2">A l’expiration:</p>
          <ul className="list-disc ml-8">
            <li>Ecoulement laminaire</li>
            <li>R VAS est linéaire</li>
            <li>Intensité sonore proportionnelle au V’</li>
            <li>Energie: Ei &gt; Ee</li>
          </ul>
        </div>
      </div>
      <div className="m-4">
        <img src={imgle} alt=" Illustration des bruits trachéaux" className=" hidden w-[70%] m-auto h-auto" />
      </div>
    </div>
  );
};

export default Lesbruits;
