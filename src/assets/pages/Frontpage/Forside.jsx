import React from "react";
import Boxes from "./Boxes";

const Forside = () => {
  return (

    <>
    <div className="relative flex justify-center items-center h-[1000px]">
      {/* Ydre skygge cirkel */}
      <div className="w-[440px] h-[440px] bg-gray-200 rounded-full shadow-[10px_10px_40px_rgba(0,0,0,0.2),-10px_-10px_20px_rgba(255,255,255,0.8)]">
      </div>

      {/* Indre cirkel */}
      <div className="absolute w-[400px] h-[400px] bg-white rounded-full shadow-[inset_5px_5px_10px_rgba(0,0,0,0.2),inset_-5px_-5px_10px_rgba(255,255,255,0.8)] flex justify-center items-center flex-col ">
        <h2 className="text-2xl font-bold text-gray-800">Velkommen til</h2>
        <h2 className="text-4xl font-bold">Forsiden</h2>
      </div>

      {/* Små bobler */}
      <div className="absolute w-full h-full flex flex-wrap justify-center items-center">
        {/* Top */}
        <div className="absolute w-16 h-16 bg-gray-500 rounded-full shadow-md transition-all hover:scale-110 hover:shadow-lg" style={{ top: "20%", left: "30%" }}></div>
        <div className="absolute w-12 h-12 bg-gray-600 rounded-full shadow-md transition-all hover:scale-110 hover:shadow-lg" style={{ top: "15%", left: "40%" }}></div>
        <div className="absolute w-12 h-12 bg-gray-400 rounded-full shadow-md transition-all hover:scale-110 hover:shadow-lg" style={{ top: "20%", left: "60%" }}></div>
        <div className="absolute w-12 h-12 bg-gray-800 rounded-full shadow-md transition-all hover:scale-110 hover:shadow-lg" style={{ top: "10%", left: "70%" }}></div>


        {/* Venstre side */}
        <div className="absolute w-16 h-16 bg-gray-200 rounded-full shadow-md transition-all hover:scale-110 hover:shadow-lg" style={{ top: "40%", left: "20%" }}></div>
        <div className="absolute w-12 h-12 bg-gray-600 rounded-full shadow-md transition-all hover:scale-110 hover:shadow-lg" style={{ top: "55%", left: "15%" }}></div>
        <div className="absolute w-12 h-12 bg-gray-400 rounded-full shadow-md transition-all hover:scale-110 hover:shadow-lg" style={{ top: "70%", left: "20%" }}></div>

        {/* Højre side */}
        <div className="absolute w-10 h-10 bg-gray-400 rounded-full shadow-md transition-all hover:scale-110 hover:shadow-lg" style={{ top: "40%", left: "80%" }}></div>
        <div className="absolute w-14 h-14 bg-gray-200 rounded-full shadow-md transition-all hover:scale-110 hover:shadow-lg" style={{ top: "55%", left: "85%" }}></div>
        <div className="absolute w-14 h-14 bg-gray-700 rounded-full shadow-md transition-all hover:scale-110 hover:shadow-lg" style={{ top: "65%", left: "75%" }}></div>
        

        {/* Bund */}
        <div className="absolute w-12 h-12 bg-gray-500 rounded-full shadow-md transition-all hover:scale-110 hover:shadow-lg" style={{ top: "85%", left: "50%" }}></div>
        <div className="absolute w-8 h-8 bg-gray-400 rounded-full shadow-md transition-all hover:scale-110 hover:shadow-lg" style={{ top: "75%", left: "60%" }}></div>
        <div className="absolute w-10 h-10 bg-gray-200 rounded-full shadow-md transition-all hover:scale-110 hover:shadow-lg" style={{ top: "75%", left: "40%" }}></div>
      </div>
    </div>
    
    <Boxes />
    </>
  );
};

export default Forside;
