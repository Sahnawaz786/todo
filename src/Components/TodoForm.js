import React, { useState } from 'react'
import store from '../utils/store';
import { useDispatch, useSelector } from 'react-redux';
import { addItems } from '../utils/todoOperation';
import { toggleForm } from '../utils/displayForm';
import {toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { addUpcomingTask } from '../utils/taskStatus';

const TodoForm = () => {
  const dispatch = useDispatch();
  const [todo,setTodo] = useState({
    task:'',
    date:''
  });
  // const [date,setDate] = useState('')

  const data = useSelector(store=>store.todo.todo_items)

  const addData = (todo_data)=>{
    dispatch(toggleForm())
  }

  const AddUpcomingTask = (data)=>{
    if(new Date(data.date) >= new Date()){
      dispatch(addUpcomingTask(data));
    }else{
      dispatch(addItems(data))
    }
  }

  const notify = () => toast.success("Task Added SuccessFully 😊!", {
    position: toast.POSITION.TOP_LEFT
  });

  console.log(todo);

  const style = `border-2 w-72 h-8 p-2 caret-red-400 border-sky-200 m-2 rounded`;

  return (
    <div className='m-auto mt-9 w-80 border-2 h-96 border-sky-300 justify-center self-center items-center'>
          <input className={style} type="text" name="" placeholder='Enter Task' id="" value={todo.task} onChange={(e)=>setTodo({...todo,task:e.target.value})} />
          <input className={style} type="date" name="" id="" onChange={(e)=>setTodo({...todo,date:e.target.value})} />
          <Link to='/'><button className='border-2 w-72 h-8 m-2 rounded bg-green-200 hover:bg-green-400 text-l font-bold border-sky-200 cursor-pointer' onClick={()=>{addData(todo);AddUpcomingTask(todo);notify()}}>Add Item</button></Link>
          <Link to='/'><button className='border-2 w-72 h-8 m-2 rounded bg-red-200 hover:bg-red-400 text-l font-bold border-sky-200 cursor-pointer' onClick={()=>{dispatch(toggleForm())}}>Cancel</button></Link>
    </div>
  )
}

export default TodoForm