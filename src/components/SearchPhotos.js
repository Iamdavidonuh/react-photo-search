import React, {useState} from 'react';
import Unsplash, {toJson} from 'unsplash-js';
import Checkbox from './CheckBox';

const unsplash = new Unsplash({
    accessKey:process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
})

export default function SearchPhotos(){
    const [query, setQuery] = useState('');
    const [pics, setPics] = useState([]);

    const searchQuery = async (e) => {
        e.preventDefault();
        if (document.querySelector('.user_check').checked){

            unsplash.search
            .users(query)
            .then(toJson)
            .then((json) => {
                console.log(json)
                setPics(json.results)
            })
            .catch((error) => console.log(error));
        }
        else {
            unsplash.search
            .photos(query)
            .then(toJson)
            .then((json) => {
                console.log(json)
                setPics(json.results)
            })
            .catch((error) => console.log(error));
        }
    }
    
    const handleCheckbox = (e) => {
        let name = e.target.name
        if (e.target.checked) {
            console.log(name)
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
