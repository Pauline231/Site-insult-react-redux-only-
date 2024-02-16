import React from 'react'
import { useState } from 'react'
import {  useDispatch } from 'react-redux'
import { addpost } from '../features/PostSlice';

const Form = () => {
  const dispatch = useDispatch();

  const [title, setTitle]= useState('')
  const [content, setContent] = useState('')
  const [userName, setUserName] = useState('')

  const cansave = Boolean(title)&& Boolean(content) && Boolean(userName)


  const onSubmitClicked = () =>{
    dispatch(addpost(title,content,userName))
    setTitle('');
    setContent('');
    setUserName('');
  }
  

  return (
    <div className="w-[550px] bg-white">
    <form className='flex flex-col w-lg shadow-lg justify-center font-montserrat rounded-xl p-8 pb-10 text-xl '>
    <label htmlFor='title'className='text-red-400 mb-3 mt-2 '>Title:</label>
    <input type='text' id='title' onChange={(e)=>setTitle(e.target.value)} className='rounded-xl border border-gray-400  text-base w-full py-3 px-6 mb-3' ></input>
    <label htmlFor='content'className='text-red-400 mb-3 mt-2'>Content:</label>
    <input type='content' id='content' onChange={(e)=>setContent(e.target.value)}className='rounded-xl border border-gray-400  text-base w-full py-3 px-6 mb-3'></input>
    <label htmlFor='username'className='text-red-400 mb-3 mt-2'>Username:</label>
    <input type='username' id='username' onChange={(e)=>setUserName(e.target.value)}className='rounded-xl border border-gray-400  text-base w-full py-3 px-6 mb-3'></input>
    <button type='button' onClick={onSubmitClicked} disabled={!cansave} className='text-white bg-red-400 py-3 px-6 rounded-xl mt-3 hover:cursor-pointer hover:shadow-lg '>Submit</button>
    </form> 

</div>
  )
}

export default Form