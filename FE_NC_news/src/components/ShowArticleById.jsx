import { useParams } from "react-router-dom";
import { useState , useEffect} from 'react'
import { Link } from "react-router-dom";

import {fetchArticleById} from '../utils'
function ShowArticleById (){

const {article_id} = useParams()

const [article, setArticle]=useState({})
const [isLoading, setIsLoading] =useState(true)

useEffect(()=>{
    fetchArticleById(article_id).then((articlesData)=>{
      setArticle(articlesData.article);
      
        setIsLoading(false);
      })
  
    
}, [article_id])

if(isLoading){
return <h2>Loading...!</h2>
} 

return <> <div> 
                                    <h4>Tilte:  {article.title}</h4>
                                    <h5>Topic: {article.topic}</h5>
                                    <img src= {article.article_img_url} alt="article's img" ></img>
                                    <p>comment_count:   {article.comment_count}</p>
                                    <p>{article.body}</p>
                                    <p>votes: {article.votes}</p>
                                    <Link to= {`/articles/${article_id}/comments`}>Comments</Link>

                                </div>

                                </>
 
}

    

export default ShowArticleById;