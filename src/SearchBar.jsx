import {useState} from "react";
import {Link} from "react-router-dom";

export const SearchBar = () => {
    const [query, setQuery] = useState('')

    return (
        <>
            <h1>Search by key fraze</h1>
            <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)}/>
            <Link to={`/search/${query}`}><button>Search</button></Link>
        </>
    )
}