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


  // export const fetchArticles = ()=>{

  //   return  fetch(`https://nc-news-os80.onrender.com/api/articles`).then((res) => {
  //         console.log(res.json()) 
  //     }).catch(err=>console.log(err))
  // }