import React, { useState } from "react";

const Hero = ({ onSearch, tasks, error, hasSearched }) => {
    const [searchTerm, setSearchTerm] = useState(""); // Søgeterm

    const handleSearch = () => {
        onSearch(searchTerm); // Kald søgefunktionen
    };

    return (
        <section className="relative bg-cover bg-center h-[400px]" style={{ backgroundImage: "url('/public/todo_hero.jpg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50">

                {/* Titel i øverste venstre hjørne */}
                <div className="absolute top-4 left-8">
                    <h1 className="text-white text-7xl italic">Opgaver</h1>
                </div>

                {/* Søgefelt */}
                <div className="flex justify-center items-end h-full">
                    <input
                        type="text"
                        placeholder="Find en Opgave..."
                        className="px-4 mb-8 py-4 rounded-md w-1/2"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} // Opdatere søgeord
                    />
                    <button
                        className="px-6 py-3 mb-8 ml-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                        onClick={handleSearch} // Udfør søgning ved klik
                    >
                        Søg
                    </button>
                </div>

                {/* Visning af resultater */}
                {hasSearched && ( // Vis kun opgaver efter der er blevet søgt
                    <div className="bg-white w-[50%] mx-auto p-4">
                        {error ? (
                            <p className="text-red-500">{error}</p>
                        ) : (
                            tasks.length > 0 ? (
                                <ul>
                                    {tasks.map((task) => (
                                        <li key={task.id} className="border-b py-2 flex justify-between items-center">
                                            <span>{task.title}</span>
                                            <span className="text-black">ID: {task.id}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-black">Ingen opgaver fundet.</p>
                            )
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Hero;
