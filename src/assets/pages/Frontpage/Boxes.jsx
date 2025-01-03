import React from "react";

const Boxes = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col mt-10">
      {/* Container for the boxes */}
      <div className="flex justify-around w-[90%] max-w-[1200px] flex-wrap gap-6">
        {/* Box 1 */}
        <div className="w-[250px] h-[300px] rounded-2xl bg-gradient-to-b from-gray-400 to-gray-600 flex flex-col items-center justify-center text-center shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-[10px_10px_30px_rgba(0,0,0,0.3),-10px_-10px_30px_rgba(255,255,255,0.2)]">
          <h4 className="text-white text-3xl font-bold">Om os</h4>
          <p className="text-gray-200 mt-3">Lær mere om vores mission, vision og værdier.</p>
        </div>
        {/* Box 2 */}
        <div className="w-[250px] h-[300px] rounded-2xl bg-gradient-to-b from-gray-400 to-gray-600 flex flex-col items-center justify-center text-center shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-[10px_10px_30px_rgba(0,0,0,0.3),-10px_-10px_30px_rgba(255,255,255,0.2)]">
          <h4 className="text-white text-3xl font-bold">Tjenester</h4>
          <p className="text-gray-200 mt-3">Se, hvad vi kan tilbyde for at hjælpe dig.</p>
        </div>
        {/* Box 3 */}
        <div className="w-[250px] h-[300px] rounded-2xl bg-gradient-to-b from-gray-400 to-gray-600 flex flex-col items-center justify-center text-center shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-[10px_10px_30px_rgba(0,0,0,0.3),-10px_-10px_30px_rgba(255,255,255,0.2)]">
          <h4 className="text-white text-3xl font-bold">Kontakt</h4>
          <p className="text-gray-200 mt-3">Kom i kontakt med os - vi er her for at hjælpe.</p>
        </div>
        {/* Box 4 */}
        <div className="w-[250px] h-[300px] rounded-2xl bg-gradient-to-b from-gray-400 to-gray-600 flex flex-col items-center justify-center text-center shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-[10px_10px_30px_rgba(0,0,0,0.3),-10px_-10px_30px_rgba(255,255,255,0.2)]">
          <h4 className="text-white text-3xl font-bold">FAQ</h4>
          <p className="text-gray-200 mt-3">Få svar på de mest stillede spørgsmål.</p>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
