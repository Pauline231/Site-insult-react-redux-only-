import React from 'react'
import { showAllPosts,reactionadd } from './PostSlice'
import { useDispatch, useSelector } from 'react-redux'


const reactionEmoji = {
    like : '👍',
    haha : '🤣',
    heart : '🩷',
    tea : '☕️',
    poop :'💩'
}


const ReactButtons = ({id}) => {
    const dispatch = useDispatch()
    const posts = useSelector(showAllPosts)
    const post = posts.find(post=> post.id ===id)
    
    const renderedReactions = Object.entries(reactionEmoji).map(([name, emoji])=>{
        return(
            <button key={name} type='button' className='m-1' onClick={()=>dispatch(reactionadd({postId:id,reaction:name}))}>
                {emoji} {post.reactions[name]}
            </button>
        )
        }) 
  
  return (
    <div>{renderedReactions}</div>
  )
}

export default ReactButtons