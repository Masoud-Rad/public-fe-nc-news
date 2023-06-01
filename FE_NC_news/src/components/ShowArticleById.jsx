import { useParams } from "react-router-dom";
import { useState , useEffect} from 'react'
import { Link } from "react-router-dom";

import {fetchArticleById, patchArticle} from '../utils'



function ShowArticleById (){

const {article_id} = useParams()

const [article, setArticle]=useState({})
const [isLoading, setIsLoading] =useState(true)
const [incVotesValue, setIncVotesValue] =useState(0)

useEffect(()=>{
    fetchArticleById(article_id).then((articlesData)=>{
      setArticle(articlesData.article);
      
        setIsLoading(false);
      })
  
    
}, [article_id])




function incVotes(){

  setIncVotesValue((currVotes)=>{return currVotes+1} );

 
  patchArticle(article_id, {"inc_votes": 1})
}

if(isLoading){
return <h2>Loading...!</h2>
} 




return <> <div> 
                                    <h4>Tilte:  {article.title}</h4>
                                    <h5>Topic:  <Link to={`/articles-by-topic/${article.topic}`}>{article.topic}</Link></h5>
                                    <img src= {article.article_img_url} alt="article's img" ></img>
                                    <p>comment_count:   {article.comment_count}</p>
                                    <p>{article.body}</p>
                                    <button onClick={incVotes}>votes: {article.votes+incVotesValue}</button>
                                    <Link className="link" to= {`/articles/${article_id}/comments`}>Comments</Link>
                                    

                                </div>

                                </>
 
}

    

export default ShowArticleById;