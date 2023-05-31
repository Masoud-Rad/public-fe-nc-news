import { useParams } from "react-router-dom";
import { useState , useEffect} from 'react';

import {fetchArticlesByTopic} from '../utils';
import ShowArticle from "./ShowArticle";

function ArticlesListFilterdByTopic(){

const {topicName} = useParams();
const [filteredArticles, setFilteredArticles]= useState([]);
  const [isLoading, setIsLoading] =useState(true)

  useEffect(()=>{
     
        fetchArticlesByTopic(topicName).then((articlesData)=>{

            setFilteredArticles(articlesData.articles);
          
            setIsLoading(false);
          })
      
        
}, [])

if(isLoading){
  return<>
  <h2>Loading...!</h2>
  </>
} 


return (<>
    <ul>
        
    {
    filteredArticles.map((article) => {
                return (
                    <ShowArticle key={article.article_id} article={article}/>   
                )
            }
            )
    }

            </ul>
    </>)

}

export default ArticlesListFilterdByTopic;