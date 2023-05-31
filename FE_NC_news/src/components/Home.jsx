


function Home({allArticles}){
    return (<>
    <ul>
        
    {
    allArticles.map((article) => {
                return (
                        <li key={article.article_id} > 
                            <h4>{article.title}</h4>
                        </li>
                )
            }
            )
    }

            </ul>
    </>)

}
export default Home;