import React from 'react'
import Timeperiod from './Timeperiod'
import ReactButtons from '../features/ReactButtons'

const Post = ({title, content, id, userName, date,reactions}) => {
  return (
   <>
   
    <div className='border-gray-400 relative rounded-xl mb-3 mt-2 w-[400px] shadow-lg bg-slate-50 px-5 py-5 '>
    <h1 className='text-3xl font-montserrat '>{title}</h1>
    <p className='font-palanquin text-xl'>{content}</p>
    <p className='font-palanquin'>by {userName} <Timeperiod timestamp={date}/></p>
    <ReactButtons id={id}/>
    

    </div>
    

  
   
   
   </>
  )
}

export default Post