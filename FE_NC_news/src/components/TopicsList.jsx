import { useState , useEffect} from 'react'
import { Link } from "react-router-dom";

import {fetchTopics } from '../utils'

function TopicsList(){

        const [topics, setTopics]= useState([])
        const [isLoading, setIsLoading] =useState(true)
      
        useEffect(()=>{
           
              fetchTopics().then((Data)=>{
      
                setTopics(Data.topics);
                
                  setIsLoading(false);
                })
            
              
      }, [])
      
      if(isLoading){
        return <h2>Loading...!</h2>
      } 
      

    return (<>
        <ul>
            
        {
        topics.map((topic) => {
                    return (

                            <li key={topic.slug} > 
                               <Link to={`/articles-by-topic/${topic.slug}`}><h4>{topic.slug}</h4></Link> 
                                <h6>{topic.description}</h6>
                            </li>
                    )
                }
                )
        }
    
                </ul>
        </>)

}


export default TopicsList;