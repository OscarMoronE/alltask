import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo, onUpdateTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const { description, onInputChange } = useForm({
        description: todo.description
    });

    const handleSave = (e) => {
        e.preventDefault();
        if (description.trim().length <= 1) return;
        onUpdateTodo(todo.id, description);
        setIsEditing(false);
    };

    return (
        <li className="list-group-item d-flex justify-content-between">
            <span
                className={`align-self-center ${(todo.done) ? 'text-decoration-line-through' : ''}`}
            >
                {isEditing ? (
                    <form onSubmit={handleSave}>
                        <input
                            type="text"
                            className="form-control"
                            name="description"
                            value={description}
                            onChange={onInputChange}
                        />
                        <button type="submit" className="btn btn-outline-primary mt-1">Save</button>
                    </form>
                ) : (
                    <span onClick={() => onToggleTodo(todo.id)}>{todo.description}</span>
                )}
            </span>
            <div>
                <button onClick={() => onDeleteTodo(todo.id)} className="btn btn-danger">Delete</button>
                {!isEditing && (
                    <button onClick={() => setIsEditing(true)} className="btn btn-secondary ms-2">Edit</button>
                )}
            </div>
        </li>
    );
};