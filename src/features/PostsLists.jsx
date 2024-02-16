import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { showAllPosts } from './PostSlice'
import Post from '../components/Post'

const PostsLists = () => {
  const posts = useSelector(showAllPosts)
  const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))
  return (
    <>
     <section className='bg-red-300 max-sm:w-screen py-10 px-10 flex flex-col lg:flex-row lg:flex-wrap lg:justify-around items-center justify-center '>
    {orderedPosts.map((post)=>(
      <Post key={post.id} 
            title={post.title} 
            content={post.content}
             id={post.id} 
             userName={post.userName}
             date={post.date}
             reactions= {post.reactions}
             />
    ))}
    </section>
    </>
  )
}

export default PostsLists