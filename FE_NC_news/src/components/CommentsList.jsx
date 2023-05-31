import { useParams } from "react-router-dom";
import { useState , useEffect} from 'react'


import {fetchComments} from '../utils'

function CommentsList(){

    const {article_id} = useParams()

    const [comments, setComments]=useState({})
    const [isLoading, setIsLoading] =useState(true)
    
    useEffect(()=>{
        fetchComments(article_id).then((Data)=>{
            setComments(Data.comments);
            setIsLoading(false);
          })
      
        
    }, [article_id])
    
    if(isLoading){
    return <h2>Loading...!</h2>
    } 


return (<>
    <ul>
        
    {
    comments.map((comment) => {
                return (
                    <li key={comment.comment_id}> 
                                       <p>{comment.body}</p>
                                        <h6>Aothor: {comment.author}</h6>
                
                                        <p>Date:   {comment.created_at}</p>
                                        
                                        <p>votes: {comment.votes}</p>
                                        
    
                                    </li>
                )
            }
            )
    }

            </ul>
    </>)



}

export default CommentsList;

