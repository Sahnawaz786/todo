import { createSlice } from '@reduxjs/toolkit';

const displayForm = createSlice({
    name:'Form',
    initialState:{
        isDisplay:false
    },
    reducers:{
        toggleForm:(state)=>{
           state.isDisplay = !state.isDisplay;
        }
    }
});

export const {toggleForm} = displayForm.actions;

export default displayForm.reducer;