import { useState , useEffect} from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";


import { fetchArticles } from './utils';

import Header from './components/Header';
import Nav from './components/Nav';
import ArticlesList from './components/ArticlesList'
import TopicList from './components/TopicList'
import Home from './components/Home'
import ShowArticle from './components/ShowArticle'
import ShowArticleById from "./components/ShowArticleById"
import CommentsList from './components/CommentsList';
import AddComment from './components/AddComment';



function App() {
 
  const [articles, setArticles]= useState([])
  const [isLoading, setIsLoading] =useState(true)

  useEffect(()=>{
     
        fetchArticles().then((articlesData)=>{

          setArticles(articlesData.articles);
          
            setIsLoading(false);
          })
      
        
}, [])

if(isLoading){
  return <h2>Loading...!</h2>
} 

  return (
    <>
     <Header />
      <Nav/>

      <BrowserRouter>
     
      
      <Routes>
        <Route path='/'  element={<Home allArticles={articles}/>} />
        <Route path='/topics'  element={<TopicList/>} />
        <Route path='/articles'  element={<ArticlesList allArticles={articles}/>} />
        <Route path='/articles/:article_id'  element={<ShowArticleById />} />
        <Route path='/articles/:article_id/comments'  element={<CommentsList />} />
        <Route path='/articles/:article_id/add-comment'  element={<AddComment />} />
      </Routes>
       
   
    </BrowserRouter>

    </>
  )
}

export default App
