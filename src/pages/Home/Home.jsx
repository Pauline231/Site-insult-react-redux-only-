import React from 'react'
import Hero from '../../components/Hero'
import PostsLists from '../../features/PostsLists'
const Home = () => {
  return (
    <main className='relative'>
    <section className='xl:padding-1 wide:padding-r padding-b'>
        <Hero/>
    </section>
    <section className="padding ">
    <PostsLists/>
    </section>
    <section>
   
    </section>
    </main>
  )
}

export default Home