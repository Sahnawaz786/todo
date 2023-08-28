import React from 'react'
import Header from './Header'
import SearchBox from './SearchBox'
import TodoForm from './TodoForm'
import { useSelector } from 'react-redux'
import store from '../utils/store'
import DisplayTodo from './DisplayTodo'
import Login from './Login'
import TaskOptions from './TaskOptions'

const TodoContainer = () => {
  const data = useSelector(store => store.Form.isDisplay);
  const isLogin = useSelector(store => store.login.isLogin);

  return (
    <div className='m-auto mt-7 border-4 border-sky-400 rounded-lg  w-[900px] h-[600px] overflow-auto scrollbar-thin'>
       <>
        <Header />
        <SearchBox />
        <TaskOptions/>
        <DisplayTodo />
      </>
      
    </div>
  )
}

export default TodoContainer