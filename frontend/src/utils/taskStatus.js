import { createSlice } from '@reduxjs/toolkit';
import { filter } from './helper';

const taskStatus = createSlice({
    name:'task',
    initialState:{
        status:[],
        Upcoming:[],
        showStatus:'Upcoming'
    },
    reducers:{
        addtasks:(state,action)=>{
            state.status.push(action.payload);
        },
        addStatus:(state,action)=>{
            state.showStatus = action.payload;
        },
        addUpcomingTask:(state,action)=>{
            state.Upcoming.push(action.payload)
        },
        removeUpcomingTask:(state,action)=>{
            state.Upcoming = filter(state.Upcoming,action.payload)
        },
        deleteUpcomingTask:(state,action)=>{
            state.Upcoming = filter(state.Upcoming,action.payload)
        }
    }
})

export const {addtasks,addStatus,addUpcomingTask,deleteUpcomingTask,removeUpcomingTask} = taskStatus.actions;

export default taskStatus.reducer;