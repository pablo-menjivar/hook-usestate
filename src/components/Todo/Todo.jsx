import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
    // Estado para manejar la lista de tareas
    const [todos, setTodos] = useState([]);
    // Estado para manejar el valor del input
    const [task, setTask] = useState("");
    // Función para agregar una nueva tarea
    const addTodo = () => {
        if (task.trim() === "") return; // Evitar agregar tareas vacías
        setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
        setTask(""); // Limpiar el input
    };
    // Función para eliminar todas las tareas
    const clearTodos = () => {
        setTodos([]);
    };
    // Función para eliminar una tarea específica
    const clearOne = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <div className="todo-input">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Añadir una nueva tarea..."
                />
                <button onClick={addTodo}>Añadir tarea</button>
            </div>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className={todo.completed ? "completed" : ""}>
                        <span onClick={() => toggleComplete(todo.id)}>{todo.text}<button onClick={() => clearOne(todo.id)}>X</button></span>
                    </li>
                ))}
            </ul>
            {todos.length > 0 && (
                <button className="clear-button" onClick={clearTodos}>Eliminar todas las tareas</button>
            )}
        </div>
    );
};
export default Todo;