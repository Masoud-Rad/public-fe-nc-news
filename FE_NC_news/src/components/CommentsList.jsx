import { useParams } from "react-router-dom";
import { useState , useEffect} from 'react'
import CommentsVotes from "./CommentsVotes"


import AddComment from './AddComment';
import {fetchComments, deleteComment} from '../utils'




function CommentsList(){

    
    const {article_id} = useParams()

    const [comments, setComments]=useState({})
    const [isLoading, setIsLoading] =useState(true)
    const [dletedCommentClass, setDletedCommentClass]=useState("deletedComment-Ptag")
    
    const [clicked, setClicked]=useState(false);
    const [currentCommentId, setCurrentCommentId]= useState(0)

    


    useEffect(()=>{
        fetchComments(article_id).then((Data)=>{
            setComments(Data.comments);
            setIsLoading(false);
          })
      
        
    }, [article_id])

    useEffect(()=>{
       
        
    }, [])
    
    

    function handleDelButton (comment_id){

        
        deleteComment(comment_id).then(()=>{
            
        })
        setClicked(true);
        setDletedCommentClass("deletedComment-Ptag-active");

        fetchComments(article_id).then((Data)=>{
            setComments(Data.comments);
            setIsLoading(false);
          })
       
    }
//-----------------------------------------------------
    


//----------------------------------------------
    if(isLoading){
    return <h2>Loading...!</h2>
    } 


return (<>

    <AddComment setComments={setComments}/>
    <p className={dletedCommentClass}>Comment deleted!</p>
    <ul>
        
    {
    comments.map((comment) => {
        
                return (
                    <li key={comment.comment_id}> 
                    <section>
                                        <p>{comment.body}</p>
                                        <h6>Aothor: {comment.author}</h6>
                                        <p>Date:   {comment.created_at}</p>
                                        <CommentsVotes votes={comment.votes} commentId={comment.comment_id}/>
                                        
                                        <button  onClick={()=>{handleDelButton(comment.comment_id)}} disabled={clicked}> Delete </button>

                                       
                    </section>
    
                  </li>
                )
            }
            )
    }

            </ul>
    </>)



}

export default CommentsList;

