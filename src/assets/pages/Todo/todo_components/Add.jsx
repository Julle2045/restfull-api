import React, { useState } from "react";

const Add = ({ onAddTask }) => {
    const [newTask, setNewTask] = useState({
        title: "",
        status: "false"
    });

    const handleCreate = async (e) => {
        e.preventDefault();

        // Opret ny opgave
        const newTaskData = {
            title: newTask.title,
            status: newTask.status === "true"
        };

        try {
            // Send opgave til API'et
            const response = await fetch("http://127.0.0.1:8090/api/collections/opgaver/records", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newTaskData)
            });

            if (!response.ok) {
                throw new Error("Fejl ved oprettelse af opgave.");
            }

            // Opret opgaven lokalt i state (så vi ser den med det samme)
            const task = await response.json();
            onAddTask(task); // Kald callback funktionen fra Todos komponenten for at opdatere tasks

            // Nulstil inputfelterne
            setNewTask({ title: "", status: "false" });
        } catch (error) {
            console.error("Fejl under oprettelse af opgave:", error);
        }
    };

    return (
        <section className="px-2 max-h-[340px] mt-[60px] bg-gray-300 rounded-3xl flex flex-col items-center border-2 border-black">
            <h1 className="text-4xl font-mono text-center pt-5">
                Tilføj en ny opgave...
            </h1>

            <div className="mt-10 flex justify-center w-full">
                <h3 className="text-black-700 font-bold mr-2 bg-gray-100 p-1 rounded">Skriv Titel her:</h3>
                <input
                    type="text"
                    placeholder="Titel:"
                    className="w-[420px] h-10 rounded-md pl-4 placeholder-gray-900 placeholder-font-bold placeholder-opacity-100"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                />
            </div>
            <div className="mt-10 flex justify-start w-full">
                <h3 className="text-black-700 font-bold mr-2 bg-gray-100 p-1 rounded pt-3">Vælg fuldført status:</h3>
                <select
                    value={newTask.status}
                    onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
                    className=" px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 hover:bg-blue-50 transition"
                >
                    <option value="false">Ikke udført</option>
                    <option value="true">Udført</option>
                </select>
            </div>

            <button className="bg-green-400 py-4 px-6 rounded-xl mt-4 hover:bg-green-600" onClick={handleCreate}>
                Tilføj
            </button>
        </section>
    );
};

export default Add;
