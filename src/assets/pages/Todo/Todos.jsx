import React, { useState, useEffect } from "react";
import Hero from "./todo_components/Hero";
import Add from "./todo_components/Add";
import TodoList from "./todo_components/TodoList";

const Todos = () => {
    const [tasks, setTasks] = useState([]); // Alle opgaver
    const [error, setError] = useState(null); // Fejlbesked
    const [filter, setFilter] = useState("all"); // Filtrering af TodoList
    const [searchResults, setSearchResults] = useState([]); // Søgeresultater til Hero
    const [hasSearched, setHasSearched] = useState(false); // Om der er blevet søgt

    // Funktion til at hente opgaver fra API'et
    const fetchTasks = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8090/api/collections/opgaver/records");
            if (!response.ok) {
                throw new Error(`API-fejl: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            setTasks(data.items); // Opdater tasks state med hentede opgaver
            setError(null); // Ryd fejl
        } catch (err) {
            console.error("Fejl under API-kald:", err);
            setError("Kunne ikke hente data fra API'et.");
            setTasks([]); // Tøm opgavelisten
        }
    };

    useEffect(() => {
        fetchTasks(); // Kald API'et når komponenten loader
    }, []);

    // Filtrering af opgaver baseret på filteret i TodoList
    const filteredTasks = tasks.filter((task) => {
        if (filter === "all") return true;
        if (filter === "true") return task.status === true;
        if (filter === "false") return task.status === false;
        return true;
    });

    // Søgefunktion til Hero
    const handleSearch = (searchTerm) => {
        const results = tasks.filter((task) =>
            task.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results); // Opdatere søgeresultater
        setHasSearched(true); // Markere at der er blevet søgt
    };

    // Funktion til at tilføje opgave (modtaget fra Add komponenten)
    const addTask = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask]); // Tilføj ny opgave til listen
    };

    // Funktion til at opdatere en opgave
const updateTask = async (updatedTask) => {
    try {
        const response = await fetch(`http://127.0.0.1:8090/api/collections/opgaver/records/${updatedTask.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedTask)
        });

        if (!response.ok) {
            throw new Error("Fejl ved opdatering af opgave.");
        }

        // Opdater task i state
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === updatedTask.id ? { ...task, title: updatedTask.title, status: updatedTask.status } : task
            )
        );
    } catch (error) {
        console.error("Fejl under opdatering af opgave:", error);
    }
};


    // Funktion til at slette en opgave
    const deleteTask = async (taskId) => {
        try {
            const response = await fetch(`http://127.0.0.1:8090/api/collections/opgaver/records/${taskId}`, {
                method: "DELETE"
            });

            if (!response.ok) {
                throw new Error("Fejl ved sletning af opgave.");
            }

            // Fjern task fra state
            setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
        } catch (error) {
            console.error("Fejl under sletning af opgave:", error);
        }
    };

    return (
        <>
            <Hero onSearch={handleSearch} tasks={searchResults} error={error} hasSearched={hasSearched} />
            <div className="mt-[100px] flex justify-evenly mx-4 space-x-4">
                {/* Her bruger vi space-x-4 til at skabe mellemrum mellem komponenterne */}
                <div className="flex justify-center w-full">
                    <Add onAddTask={addTask} />
                </div>
                <div className="flex justify-center w-full">
                    <TodoList tasks={filteredTasks} onUpdateTask={updateTask} onDeleteTask={deleteTask} />
                </div>
            </div>
        </>
    );
};

export default Todos;
