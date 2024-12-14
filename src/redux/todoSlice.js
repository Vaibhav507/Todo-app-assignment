import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload.title,
                description: action.payload.description,
                completed: false
            }
            state.todos.push(todo);
        },
        editTodo: (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id)
            if(index >= 0) {
                
                state.todos[index].title = action.payload.title
                state.todos[index].description = action.payload.description
                
            }
        },
        markDoneTodo: (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id)
            if(index >= 0) {
                state.todos[index].completed = !state.todos[index].completed;
            }
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        initializeTodos: (state, action) => {
            state.todos = [...state.todos, ...action.payload];
        }
    }
})

export const { addTodo, editTodo, removeTodo, markDoneTodo, initializeTodos } = todoSlice.actions

export default todoSlice.reducer