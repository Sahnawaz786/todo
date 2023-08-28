import { createSlice } from '@reduxjs/toolkit';

const text = createSlice({
    name:'text',
    initialState:{
        text:''
    },
    reducers:{
        addText:(state,action)=>{
            state.text = action.payload;
        }
    }
})

export const {addText} = text.actions;

export default text.reducer;