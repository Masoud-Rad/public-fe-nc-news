function ArticlesList({allArticles}){

    return (<>
        <ul>
            
        {
        allArticles.map((article) => {
                    return (
                            <li key={article.article_id} > 
                                <h4>Tilte:   {article.title}</h4>
                                <h5>Topic: {article.topic}</h5>
                                <img src= {article.article_img_url} alt="article's img" ></img>
                                <p>comment_count:   {article.comment_count}</p>
                            </li>
                    )
                }
                )
        }
    
                </ul>
        </>)
    
}

export default ArticlesList;