import React from 'react'
import Form from './Form'

const Hero = () => {
  return (
    <>
    <section className='flex flex-col w-screen justify-center items-center max-container min-h-screen bg-white'>
    <h1 className='text-4xl text-red-400 font-palanquin'><b>Insult this site!</b></h1>
    <Form/>
    </section>
    </>
  )
}

export default Hero