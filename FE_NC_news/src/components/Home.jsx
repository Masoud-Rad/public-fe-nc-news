
import { Link } from "react-router-dom";

function Home({allArticles}){
    return (<>
    <ul>
        
    {
    allArticles.map((article) => {
                return (
                        <li key={article.article_id} > 
                        <Link to= {`/articles/${article.article_id}`}><h4>Tilte:  {article.title}</h4></Link>
                        </li>
                )
            }
            )
    }

            </ul>
    </>)

}
export default Home;