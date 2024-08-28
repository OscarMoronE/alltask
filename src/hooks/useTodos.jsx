import React, { useReducer, useEffect } from 'react'
import { TodoReducer } from '../08-useReducer/TodoReducer';

export const useTodos = () => {

    const initialState = []

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatch] = useReducer(TodoReducer, initialState, init); //init intenta cargar todos desde localStorage. Si encuentra datos, los usa como estado inicial. Si no, usa el initialState (un array vacío en este caso).

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))

    }, [todos])


    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(action);
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id

        });
    }

    const handleUpdateTodo = (id, newDescription) => {
        dispatch({
            type: '[TODO] Update Todo',
            payload: { id, newDescription }
        })
    }

    return {
        todos, handleDeleteTodo, handleNewTodo, handleUpdateTodo, handleToggleTodo, todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length
    }
}
