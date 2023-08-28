import React from 'react'
import TodoContainer from './TodoContainer'
import TodoForm from './TodoForm'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Body = () => {
  return (
    <div>
      <TodoContainer />
      <ToastContainer position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
    </div>
  )
}

export default Body