import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import {sub} from "date-fns";


const initialState =[
    {
        id : '1',
        title : 'What is this?',
        content : 'Seems like a noob made it..',
        date : sub(new Date(),{minutes:10}).toISOString(),
        userName : 'Randy',
        reactions :{
            like : 3,
            haha : 7,
            heart : 0,
            tea : 0,
            poop :2
        }
    },
    {
        id : '2',
        title : "Nice one!",
        content : 'Not bad for a beginner!..' ,
        date : sub(new Date(),{minutes:7}).toISOString(),
        userName : 'Niceone',
        reactions :{
            like : 5,
            haha : 3,
            heart : 6,
            tea : 0,
            poop :4
        }
    },
    {
        id :'3',
        title : 'A for effort!',
        content : "This is as bad as a woman's driving.",
        date : sub(new Date(),{minutes : 5}).toISOString(),
        userName : 'EnlightenedOne',
        reactions :{
            like : 0,
            haha : 5,
            heart : 0,
            tea : 10,
            poop :3
        }
    }
]

const PostSlice = createSlice({
    name : "Posts",
    initialState,
    reducers:{
        addpost:{
         reducer(state, action){
            state.push(action.payload)
         },
         prepare(title, content, userName){
            return{
                payload:{
                    title,
                    content,
                    id: nanoid(),
                    userName,
                    date: new Date().toISOString(),
                    reactions :{
                        like : 0,
                        haha : 0,
                        heart : 0,
                        tea : 0,
                        poop : 0
                    }
                }
            }
         } 
        },
        reactionadd(state,action){
            const {postId, reaction} = action.payload
            const existPost = state.find(post => post.id === postId)
            if(existPost){
                existPost.reactions[reaction]++
            }
            

        }
}})

export const showAllPosts = (state)=>(state.post) 
export const {addpost,reactionadd} = PostSlice.actions
export default PostSlice.reducer