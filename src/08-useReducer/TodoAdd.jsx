import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {

    const { description, formState, onInputChange, onResetForm } = useForm({
        description: ''
    })

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        }

        onNewTodo(newTodo);

        onResetForm()
    }

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <input
                    type="text"
                    placeholder="What do you want to do?"
                    className="form-control"
                    name="description"
                    value={description}
                    onChange={onInputChange}
                />

                <button type="submit" className="btn btn-outline-primary mt-3">Add</button>
            </form>
        </>
    )
}