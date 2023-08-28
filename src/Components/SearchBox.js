import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import store from '../utils/store';
import { addText } from '../utils/textSearch';

const SearchBox = () => {
  const [searchText,setSearchText] = useState('');
  const data = useSelector(store=>store.todo.todo_items);

  const dispatch = useDispatch();

  const handleSearch = (text)=>{
    dispatch(addText(text));
  }

  useEffect(()=>{
    handleSearch(searchText);
  },[searchText])

  return (
    <div>
        <div className='flex items-center justify-center'>
            <input className='border-2 p-1 border-sky-300 text-xl ' value={searchText}  type="text" name="" id="" onChange={(e)=>setSearchText(e.target.value)} />
            <button className='border-2 ml-4 p-1' onClick={()=>handleSearch(searchText)}>Search</button>
            
        </div>
    </div>
  )
}

export default SearchBox