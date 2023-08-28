import { createSlice } from '@reduxjs/toolkit';
import { filter } from './helper';

const todoOperation = createSlice({
    name:'todo',
    initialState:{
        todo_items:[]
    },
    reducers:{
        addItems:(state,action)=>{
            state.todo_items.push(action.payload)
        },
        removeItems:(state,action)=>{
            state.todo_items = filter(state.todo_items,action.payload)
        },
        deleteTask:(state,action)=>{
            state.todo_items = filter(state.todo_items,action.payload)
        }
    }
})

export const {addItems,removeItems,deleteTask} = todoOperation.actions;
export default todoOperation.reducer;
