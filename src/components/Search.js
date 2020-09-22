import React, {useState} from 'react';
import Unsplash, {toJson} from 'unsplash-js';
import Checkbox from './CheckBox';
import SearchResults from './searchresults/SearchResults';

const unsplash = new Unsplash({
    accessKey:process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
})

export default function Search(){
    const [query, setQuery] = useState('');
    const [pics, setPics] = useState([]);

    const searchQuery = async (e) => {
        e.preventDefault();
        if (document.querySelector('.user_check').checked){

            unsplash.search
            .users(query)
            .then(toJson)
            .then((json) => {
                setPics(json.results)
            })
            .catch((error) => console.log(error));
        }
        else {
            unsplash.search
            .photos(query)
            .then(toJson)
            .then((json) => {
                setPics(json.results)
            })
            .catch((error) => console.log(error));
        }
    }
    
    const handleCheckbox = (e) => {
        let name = e.target.name
        if (e.target.checked) {
            return name
        }
    }
    return (
        <>
        <form className="form" onSubmit={searchQuery}>
            <label className="label" htmlFor="query">
                {" "}
                📷
            </label>
            {" "}
            <input 
            type="text"
            name="query"
            value={query}
            className="input"
            placeholder={` Try "dog" or "apple"`} 
            onChange={(e) => {
                e.preventDefault()
                setQuery(e.target.value)
            }}

            />
            <button type="submit" className="button">Search</button>
            <Checkbox handleClick={handleCheckbox}/>          
        </form>
        <SearchResults pics={pics} filter ={handleCheckbox}/>
        </>
    )
}
