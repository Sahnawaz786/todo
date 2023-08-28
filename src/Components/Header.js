import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleForm } from '../utils/displayForm'
import Login from './Login';
import { toggleLogin, toogleAuth } from '../utils/login';
import store from '../utils/store';
import { name_provider } from '../utils/helper';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'
const Header = () => {

  const dispatch = useDispatch();
  const data = useSelector(store => store.login.isAuth);
  const user_name = useSelector(store => store.login.user.email);

  const ToogleMenu = () => {
    dispatch(toggleForm());
  }

  const logOut = () => {
    dispatch(toogleAuth());
  }

  const handleLogin = () => {
    dispatch(toggleLogin())
  }

  const warn = () => toast.warn("Login First To Use the Application 🤨!", {
    position: toast.POSITION.TOP_LEFT
  })

  console.log("The data is => ", data)

  return (
    <div className='flex text-center items-center justify-center'>
      <img className='w-14' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv5PpS8Xt0lTTo_eAXixXg0rKTdkNLqKVWz_Ep1i3AysRGOewWVGVkonhI3a_FHU4XnCg&usqp=CAU" alt="" />
      <h1 className='font-bold'>Todo App</h1>
      {data ? <Link to='/task'><img className='w-8 ml-6 cursor-pointer' onClick={() => ToogleMenu()} src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png" alt="" /></Link> : <img className='w-8 ml-6 cursor-pointer' onClick={() => warn()} src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png" alt="" />}
      <div className='flex justify-end'>
        <div className=' border-2 rounded-full m-4 w-12 text-center'>
          <h1 className=' rounded-full bg-blue-200 font-bold'>{name_provider(user_name)}</h1>
        </div>
        {
          !data ? <Link to='/login'><button className='text-l font-bold border-2 border-sky-200 m-2 p-2 hover:bg-blue-100' onClick={() => handleLogin()}>SignUp</button></Link> :
            <Link><button className='text-l font-bold border-2 border-sky-200 m-2 p-2 hover:bg-blue-100' onClick={() => logOut()}>Logout</button></Link>
        }
      </div>
    </div>
  )
}

export default Header