import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store from '../utils/store'
import { removeItems } from '../utils/todoOperation'
import { addtasks, deleteUpcomingTask, removeUpcomingTask, removetask } from '../utils/taskStatus'
import { toast } from 'react-toastify'
import { deleteTask } from '../utils/todoOperation'
import { displayPending } from '../utils/helper'

const DisplayTodo = () => {
   const dispatch = useDispatch();
   const status = useSelector(store=>store.task.showStatus);

   const todo_items = useSelector(store=>store.todo.todo_items);
   const task_status = useSelector(store=>store.task.status);
   const upcoming_task = useSelector(store=>store.task.Upcoming);
   const searchText = useSelector(store=>store.text.text);

   console.log(searchText,upcoming_task);

   const deleteItems = (data)=>{
      dispatch(removeItems(data.task));
      dispatch(removeUpcomingTask(data.task));
      dispatch(addtasks(data));
   }

   const delteTask = (data)=>{
    dispatch(deleteTask(data.task))
    dispatch(deleteUpcomingTask(data.task))
   }

   const filterData = (todo_items)=>{
      console.log('Data is ',todo_items);
      return todo_items?.filter((elem)=>elem.task.includes(searchText));
   }

   const notify = () => toast.success("Congratulation's Task Completed SuccessFully 🎉🎉 ");

  const warm_notify = () => toast.warn("Task Deleted SuccesFully 🙂 !", {
    position: toast.POSITION.TOP_LEFT
  });


  // console.log('The data is : ',todo_items);

  return todo_items.length === 0 && task_status.length === 0 && upcoming_task.length === 0 ? <h1 className='mt-2 text-center text-2xl'>Add Your task and get started and acheive your Goals 😊!</h1> : (
    <div key={'aa'} className='font-bold flex-col justify-center pb-2 gap-6'>
      {
        status=='Pending' ? <> <h1 className='m-2'>🔴 Pending Task's</h1>
        {
          searchText==='' ?  todo_items.map((item,id)=> <div key={id} className='border-2 shadow-xl border-blue-300 flex justify-between  h-22 p-2 m-2 rounded-lg'>
                <h1 className='text-xl'>{item.task}</h1>
                <h1 className='border rounded-2xl p-1 bg-red-300'>{item.date}</h1>
                <div className='flex'>
                <img className='w-8 cursor-pointer' src="https://img.myloview.es/cuadros/tick-mark-icon-flat-illustration-of-check-mark-vector-400-177164584.jpg" onClick={()=>{(deleteItems(item));notify()}} alt="" />
                <img className='w-8 cursor-pointer' src="https://previews.123rf.com/images/asmati/asmati1610/asmati161000096/63402720-trash-sign-illustration-white-icon-on-red-circle.jpg" onClick={()=>{warm_notify();delteTask(item)}} alt="" />
               </div>
            </div>) : filterData(todo_items).map((item,id)=> <div key={id} className='border-2 shadow-xl border-gray-300 flex justify-between  h-22 p-2 m-2'>
                <h1 className='text-xl'>{item.task}</h1>
                <h1 className='border rounded-2xl p-1 bg-red-300'>{item.date}</h1>
                <div className='flex'>
                <img className='w-7 cursor-pointer' src="https://img.myloview.es/cuadros/tick-mark-icon-flat-illustration-of-check-mark-vector-400-177164584.jpg" onClick={()=>{(deleteItems(item));notify()}} alt="" />
                <img className='w-7 cursor-pointer' src="https://previews.123rf.com/images/asmati/asmati1610/asmati161000096/63402720-trash-sign-illustration-white-icon-on-red-circle.jpg" onClick={()=>{warm_notify();delteTask(item)}} alt="" />
               </div>
            </div>)
        }
        </> : <>
        { status=='Completed' ? <>
        <h1 className='m-2'>🟢 Completed Task's</h1>
        <div className='font-bold flex-col justify-center pb-2 gap-6 m-2'>
          {
            task_status.map((task,index)=><div key={index} className='border-2 shadow-lg border-green-300 flex justify-start h-22 p-2 mt-3 rounded-lg '>
               <h1 className='text-xl line-through '>{task.task}</h1>
               <h1 className='ml-5 border rounded-2xl p-1 bg-green-300'>{task.date}</h1>
            </div>)
          }
        </div>
       </> : <>
        <h1 className='m-2'>🟡 UpComing Task's</h1>
        <div className='font-bold flex-col justify-center pb-2 gap-6 m-2'>
          {
            upcoming_task.map((task,index)=><div key={index} className='border-2 shadow-lg border-yellow-300 flex h-22 p-2 mt-3 rounded-lg '>
               <h1 className='text-xl'>{task.task}</h1>
               <h1 className='ml-5 border rounded-2xl p-1 bg-yellow-300'>{task.date}</h1>
               <img className='w-8 cursor-pointer' src="https://img.myloview.es/cuadros/tick-mark-icon-flat-illustration-of-check-mark-vector-400-177164584.jpg" onClick={()=>{(deleteItems(task));notify()}} alt="" />
                <img className='w-8 cursor-pointer' src="https://previews.123rf.com/images/asmati/asmati1610/asmati161000096/63402720-trash-sign-illustration-white-icon-on-red-circle.jpg" onClick={()=>{warm_notify();delteTask(task)}} alt="" />
            </div>)
          }
        </div>
       </>
        }
      </>
}
</div>)

}
export default DisplayTodo