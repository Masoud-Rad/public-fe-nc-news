import axios from 'axios';

const ncNewsApi = axios.create({
  baseURL: 'https://nc-news-os80.onrender.com/api'
});


//--------------------------------Articles---------------------

export const fetchArticles = ()=>{

    return  ncNewsApi.get('/articles')
    .then((response)=> {
      return(response.data);
    })
    .catch((error) =>{
      console.log(error);
    })
  
  }



  export const fetchArticleById = (article_id)=>{


    return  ncNewsApi.get(`/articles/${article_id}`)
    .then((response)=> {
      return(response.data);
    })
    .catch((error) =>{
      console.log(error);
    })
 
  }


  //-------------------------------------------Comments----------------------

  export const fetchComments= (article_id)=>{

    return  ncNewsApi.get(`/articles/${article_id}/comments`)
    .then((response)=> {
      return(response.data);
    })
    .catch((error) =>{
      console.log(error);
    })

  }