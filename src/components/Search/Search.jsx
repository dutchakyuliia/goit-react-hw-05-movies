import { React, useState,useEffect  } from "react"
import { useSearchParams } from 'react-router-dom';
import * as api from 'services/api';
const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
  
    return (<div>
        <form role="search">
            <input type="text" onChange={evt => setSearchParams({ movieId: evt.target.value })} />
            <button type="submit" onClick={(event) => ( api.fetchSearchMovies(), event.preventDefault())}>Search</button>  
        </form>
      
    </div>)
}

export default Search