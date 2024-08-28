import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodos } from "../hooks/useTodos"

export const TodoApp = () => {
    const { todosCount, pendingTodosCount, todos, handleDeleteTodo, handleToggleTodo, handleNewTodo, handleUpdateTodo } = useTodos()

    return (
        <>
            <h1>All task</h1>
            <h2 className="task">Task flow: {todosCount}</h2>
            <h3 className="pending">Pending: {pendingTodosCount}</h3>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                        onUpdateTodo={handleUpdateTodo}
                    />
                </div>

                <div className="col-5">
                    <h4>New Task, New Goal!</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    )
}
