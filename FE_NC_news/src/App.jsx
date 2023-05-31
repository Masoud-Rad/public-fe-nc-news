import { useState , useEffect} from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from './components/Header';
import Nav from './components/Nav';
import ArticlesList from './components/ArticlesList'
import TopicList from './components/TopicList'
import Home from './components/Home'
import ShowArticle from './components/ShowArticle'
import ShowArticleById from "./components/ShowArticleById"
import { fetchArticles } from './utils';




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
      </Routes>
       
   
    </BrowserRouter>

    </>
  )
}

export default App
