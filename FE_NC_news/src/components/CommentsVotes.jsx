import { patchComment} from '../utils'

import { useState } from 'react'

function CommentsVotes({votes, commentId}){
    const [commentVoteChanges, setCommentVoteChanges] =useState(0)

    function incCommentVotes(comment_id){
    
        
        setCommentVoteChanges((currVotes)=>{return currVotes+1} );
    
    
    

    patchComment(comment_id, { inc_votes : 1 })
  }


return <button  onClick={()=>{incCommentVotes(commentId)}}> votes: {votes+commentVoteChanges}</button>

}

export default CommentsVotes;