import axios from 'axios';

const ncNewsApi = axios.create({
  baseURL: 'https://nc-news-os80.onrender.com/api'
});


//--------------------------------Articles---------------------

export const fetchArticles = (sortBy="created_at",orderBy="ASC")=>{


  return  ncNewsApi.get(`/articles?sort_by=${sortBy}&order_by=${orderBy}`)
  .then((response)=> {
    return(response.data);
  })
  .catch((error) =>{
    console.log(error);
  })

  }

export const fetchArticlesByTopic=(topic)=>{

  return  ncNewsApi.get(`/articles?topic=${topic}`)
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


  export const patchArticle = (article_id,patchBody)=>{


    return  ncNewsApi.patch(`/articles/${article_id}`, patchBody)
    .then((response)=> {
      return(response.data);
    })
    .catch((error) =>{
      console.log(error.response);
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

 

export const addNewComment = (article_id,postBody)=>{

  return  ncNewsApi.post(`/articles/${article_id}/comments`, postBody)
    .then((response)=> {
      return(response.data);
    })
    .catch((error) =>{
      console.log(error.response);
    })
}

//-----------------------------Topics-----------------------------------

export const fetchTopics = ()=>{

  return  ncNewsApi.get('/topics')
  .then((response)=> {
    return(response.data);
  })
  .catch((error) =>{
    console.log(error);
  })
}

//--------------------------------------Users----------------------------------

export const fetchUserByUsername=(userName)=>{

 
  return  ncNewsApi.get(`/users?username=${userName}`)
  .then((response)=> {
    return(response.data.users);
  })
  .catch((error) =>{
    return(error.response.status);
  })
}