
import ShowArticle from "./ShowArticle";
import SortArticles from "./SortArticles"
function ArticlesList({allArticles,setSortBY, setOrderBY}){

   

    return (<>
  
        
        <SortArticles setSortBY={setSortBY} setOrderBY={setOrderBY} />
        <ul>
        {
        allArticles.map((article) => {
                    return (
                        <ShowArticle key={article.article_id} article={article}/>   
                    )
                }
                )
        }
    
                </ul>
        </>)
    
}

export default ArticlesList;