import React, {useState} from 'react';
import Unsplash, {toJson} from 'unsplash-js';

const unsplash = new Unsplash({
    accessKey:process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
})

export default function SearchPhotos(){
    const [query, setQuery] = useState('')
    const [pics, setPics] = useState([]);
    
    const searchPhotos = async (e) => {
        
        e.preventDefault();
        unsplash.search
        .photos(query)
        .then(toJson)
        .then((json) => {
            setPics(json.results)
        })
        .catch((error) => console.log(error));
    }
    
    
    return (
        <>
        <form className="form" onSubmit={searchPhotos}>
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
        </form>

        <div className="card-list">
            {pics.map((pic) => <div className="card" key={pic.id}>
                <img
                    className="card--image"
                    alt={pic.alt_description}
                    src={pic.urls.full}
                    width="50%"
                    height="50%"
                />
            </div>)
            }
        </div>
        </>
    )
}
