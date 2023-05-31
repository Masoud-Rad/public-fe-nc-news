import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

import {addNewComment} from '../utils'
function AddComment() {

    const {article_id} = useParams()

const [commentBody, setCommentBody]=useState("")
    const [userName,setUserName]=useState("")


    
    const [newComment, setNewComment]=useState( { "body":"" , "username": "" })
    
    useEffect(()=> {

        setNewComment({ body :commentBody , username: userName });


    },[commentBody, userName ])

    function handleSubmit(event) {
        event.preventDefault()

        addNewComment(article_id ,newComment).then((data)=>{
        
            setCommentBody("");
            setUserName("");
           
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
   
    return <>
    
    <form  onSubmit={handleSubmit}>


    <h4> NEW Comment</h4>

    <div>
        <label htmlFor="comment-body">Comment:</label>
        <input id="comment-body"   placeholder="please write your comment" value={commentBody} onChange={(event)=>{ setCommentBody(event.target.value) }}></input>
    </div>
    <div>
        <label htmlFor="userName">Username:</label>
        <input id="userName"  placeholder="please add your Username" value={userName} onChange={(event)=>{ setUserName(event.target.value) }}></input>
    </div>
   
   
        <button>Add</button>


    </form>

</>
}

export default AddComment;