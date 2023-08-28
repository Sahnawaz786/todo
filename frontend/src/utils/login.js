import { createSlice } from '@reduxjs/toolkit';

const login = createSlice({
    name:'login',
    initialState:{
        user:{},
        isLogin:false,
        isloginForm:false,
        isAuth:false
    },
    reducers:{
        addUser:(state,action)=>{
            state.user = action.payload;
        },
        toggleLogin:(state)=>{
            state.isLogin = !state.isLogin;
        },
        toggleLoginForm:(state)=>{
            state.isloginForm = !state.isloginForm
        },
        toogleAuth:(state)=>{
            state.isAuth = !state.isAuth;
        }
    }
})

export const {addUser,toggleLogin,toggleLoginForm,toogleAuth} = login.actions;

export default login.reducer;