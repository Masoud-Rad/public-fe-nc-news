import { useState , useEffect} from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";


import { fetchArticles } from './utils';

import Header from './components/Header';
import Nav from './components/Nav';
import ArticlesList from './components/ArticlesList'
import TopicsList from './components/TopicsList'
import Home from './components/Home'
import ArticlesListFilterdByTopic from './components/ArticlesListFilterdByTopic'
import ShowArticleById from "./components/ShowArticleById"
import CommentsList from './components/CommentsList';

import AddComment from './components/AddComment';
import Sign_In from './components/Sign_In'




function App() {

  const [sortBy,setSortBY]=useState("created_at")
  const [orderBy,setOrderBY]=useState("ASC")
  const [articles, setArticles]= useState([])
  const [isLoading, setIsLoading] =useState(true)
 
  
  
  useEffect(()=>{
     
        fetchArticles(sortBy,orderBy).then((articlesData)=>{

          setArticles(articlesData.articles);
          
            setIsLoading(false);
          })
      
        
}, [sortBy,orderBy])

if(isLoading){
  return<>
  <Header />
      <Nav/>
  <h2>Loading...!</h2>
  </>
} 

  return (
    <>
     <Header />
      <Nav/>

      <BrowserRouter>
     
      
      <Routes>
        <Route path='/'  element={<Home allArticles={articles}/>} />
        <Route path='/sign-in'  element={<Sign_In />} />
        <Route path='/topics'  element={<TopicsList/>} />
        <Route path='/articles-by-topic/:topicName'  element={<ArticlesListFilterdByTopic/>} />
        <Route path='/articles'  element={<ArticlesList allArticles={articles} setSortBY={setSortBY} setOrderBY={setOrderBY}/>} />
        <Route path='/articles/:article_id'  element={<ShowArticleById />} />
        <Route path='/articles/:article_id/comments'  element={<CommentsList />} />
      </Routes>
       
   
    </BrowserRouter>

    </>
  )
}

export default App
