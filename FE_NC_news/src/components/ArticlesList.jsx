import ShowArticle from "./ShowArticle";

function ArticlesList({allArticles}){

    return (<>
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