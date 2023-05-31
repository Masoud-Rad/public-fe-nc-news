

import { Link } from "react-router-dom";

function ShowArticle ({article}){
    

    return  <li > 
        <Link to= {`/articles/${article.article_id}`}><h4>Tilte:  {article.title}</h4></Link>
        <h5>Topic: {article.topic}</h5>
                                    <img src= {article.article_img_url} alt="article's img" ></img>
                                    <p>comment_count:   {article.comment_count}</p>
                                </li>
 
}

export default ShowArticle;