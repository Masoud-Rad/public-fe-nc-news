

function SortArticles({setSortBY, setOrderBY}){

   

    
   


return <section>
    <div>
        <div>
        <input id="created_at" type="radio" name="sort"  value="created_at" onChange={(event)=>{ setSortBY(event.target.value) }}></input>
        <label htmlFor="created_at">Sort by Date</label>
        </div>

        <div>
        <input id="title" type="radio" name="sort" value="title" onSelect={(event)=>{ setSortBY(event.target.value) }}></input>
        <label htmlFor="title">Sort by title</label>
        </div>

        <div>
        <input id="topic" type="radio" name="sort" value="topic" onSelect={(event)=>{ setSortBY(event.target.value) }}></input>
        <label htmlFor="topic">Sort by topic</label>
        </div>

        <div>
        <input id="votes" type="radio" name="sort" value="votes" onChange={(event)=>{ setSortBY(event.target.value) }}></input>
        <label htmlFor="votes">Sort by votes</label>
        </div>

        <div>
        <input id="comment_count" type="radio" name="sort" value="comment_count" onChange={(event)=>{ setSortBY(event.target.value) }}></input>
        <label htmlFor="comment_count">Sort by comment_count</label>
        </div>
    </div>

    <section>

        {/* <label htmlFor="orderBY-select">Order by:</label>

        <select name="order" id="orderBY-select">
            <option value="ASC"  onChange={(event)=>{ setOrderBY(event.target.value) }}>ASC</option>
            <option value="DESC" onChange={(event)=>{ setOrderBY(event.target.value) }}>DESC</option>
        </select> */}

         <div>
        <input id="ASC" type="radio" name="order"  value="ASC" onChange={(event)=>{ setOrderBY(event.target.value) }}></input>
        <label htmlFor="ASC">Order by ASC</label>
        </div>
        <div>
        <input id="DESC" type="radio" name="order" value="DESC" onChange={(event)=>{ setOrderBY(event.target.value) }}></input>
        <label htmlFor="DESC">Order by DESC</label>
        </div>
    </section>
    
</section>


}

export default SortArticles;


