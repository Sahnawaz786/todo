import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addStatus } from '../utils/taskStatus';

const TaskOptions = () => {
    const [option,setOption] = useState('Pending');
    const options = ['Pending', 'Completed', 'Upcoming'];

    console.log(option)

    const dispatch = useDispatch();

    const handleStatus = (value)=>{
        dispatch(addStatus(value))
    }

    return (
        <div className='border p-1 m-2 w-32 rounded-2xl border-sky-300'>
                <select onChange={(e)=>{setOption(e.target.value);handleStatus(e.target.value)}} className='border-none outline-none'>
                    <option className='border-none'>Select Status</option>
                    {options.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
                </select>
        </div>
    );
};
 

export default TaskOptions