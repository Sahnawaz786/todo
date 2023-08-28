import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store from '../utils/store';
import { addUser, toggleLogin, toggleLoginForm, toogleAuth } from '../utils/login';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const dispatch = useDispatch();
    const isLogin = useSelector(store => store.login.isLogin)
    const auth = useSelector(store=>store.login.isAuth);

    const [user,setUser] = useState({
        email:'',
        password:''
    });

    const signup = (user) =>{
        dispatch(addUser(user));
        dispatch(toggleLoginForm());
        dispatch(toggleLogin())
        console.log('called',user)
    }

    const notify = () => toast.success("Login SuccessFull 😊!", {
        position: toast.POSITION.TOP_LEFT
      });

    const warn = () => toast.warn("Invalid Input 🤨!",{
        position:toast.POSITION.TOP_LEFT
    })

    const isAuthOk = (user)=>{
       if(user.email.length > 0 && user.password.length > 0) { dispatch(toogleAuth()) };
    }

    return (
        <div className='m-auto mt-9 w-80 border-2 h-96 border-sky-300 justify-center self-center items-center'>
            <input className='border-2 w-72 h-8 p-2 caret-red-400 border-sky-200 m-2 rounded' type="email" name="" placeholder='example@gmail.com' id="name" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} />
            <input className='border-2 w-72 h-8 p-2 caret-red-400 border-sky-200 m-2 rounded' type="password" name="" placeholder='***********' id="password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} />
            {
              auth ? <Link to='/'><button className='border-2 w-72 h-8 m-2 rounded bg-green-200 hover:bg-green-400 text-l font-bold border-sky-200 cursor-pointer' onClick={()=>{signup(user);notify()}}>SignUp</button></Link> :
              <button className='border-2 w-72 h-8 m-2 rounded bg-green-200 hover:bg-green-400 text-l font-bold border-sky-200 cursor-pointer' onClick={()=>{isAuthOk(user);warn()}}>SignUp</button>
            }
        </div>
    )
}


export default Login