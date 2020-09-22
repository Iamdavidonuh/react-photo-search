import React from 'react'
import SearchPhotos from './SearchPhotos'

export default function SearchResults({ filter, pics =[] }) {
    if (filter === 'users'){
        return (
            <div className='search-box'>
                
            </div>
        )
    }
    else if (filter === ''){
        return (
            <div className='search-box'>
                
            </div>
        )
    }
    else{
        return (
            <div className='search-box'>
                <SearchPhotos pics ={pics}/>
            </div>
        )
    }

}
