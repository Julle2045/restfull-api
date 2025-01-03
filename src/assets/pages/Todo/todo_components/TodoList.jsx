import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

const TodoList = ({ tasks, onUpdateTask, onDeleteTask }) => {
    const [editingTask, setEditingTask] = useState(null); // Den opgave, der er i redigering
    const [updatedTitle, setUpdatedTitle] = useState(""); // Opgave titel, der skal opdateres
    const [updatedStatus, setUpdatedStatus] = useState(""); // Opgave status

    const handleEditClick = (task) => {
        setEditingTask(task);
        setUpdatedTitle(task.title); // Sæt opgaven titel til den nuværende titel
        setUpdatedStatus(task.status); // Sæt opgaven status til den nuværende status
    };

    const handleUpdateSubmit = (taskId) => {
        // Skab en opdateret opgave med den nye titel og status
        const updatedTask = {
            id: taskId,
            title: updatedTitle,
            status: updatedStatus,
        };

        // Send opdateringen til parent-komponenten (Todos.js)
        onUpdateTask(updatedTask); // Kald opdateringsfunktionen
        setEditingTask(null); // Luk redigeringsformularen
    };

    return (
        <table className="min-w-full table-auto border-collapse">
            <thead>
                <tr className="border-b">
                    <th className="px-4 py-2">Opgave</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Ret</th>
                    <th className="px-4 py-2">Slet</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) => (
                    <tr key={task.id} className="border-b">
                        <td className="px-4 py-2">
                            {editingTask && editingTask.id === task.id ? (
                                <input
                                    type="text"
                                    value={updatedTitle}
                                    onChange={(e) => setUpdatedTitle(e.target.value)}
                                    className="px-2 py-1 border rounded"
                                />
                            ) : (
                                task.title
                            )}
                        </td>
                        <td className="px-4 py-2">
                            {editingTask && editingTask.id === task.id ? (
                                <select
                                    value={updatedStatus}
                                    onChange={(e) => setUpdatedStatus(e.target.value === "true")}
                                    className="px-2 py-1 border rounded"
                                >
                                    <option value={true}>Fuldført</option>
                                    <option value={false}>Ikke Fuldført</option>
                                </select>
                            ) : (
                                task.status ? "Fuldført" : "Ikke Fuldført"
                            )}
                        </td>
                        <td className="px-4 py-2 text-center space-x-2">
                            {/* Ret knap */}
                            <button
                                onClick={() => handleEditClick(task)} // Åben redigering for den valgte opgave
                                className="bg-green-500 p-2 rounded hover:bg-green-600"
                            >
                                <FaPen />
                            </button>
                            {editingTask && editingTask.id === task.id && (
                                <button
                                    onClick={() => handleUpdateSubmit(task.id)} // Opdater opgaven med den nye titel og status
                                    className="bg-blue-500 p-2 rounded hover:bg-blue-600"
                                >
                                    Opdater
                                </button>
                            )}
                        </td>
                        <td className="px-4 py-2 text-center space-x-2">
                             {/* Slet knap */}
                             <button
                                onClick={() => onDeleteTask(task.id)} // Kald slet-funktionen
                                className="bg-red-500 p-2 rounded hover:bg-red-600"
                            >
                                <FaTrashCan />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TodoList;
