import React from 'react';


export default function SearchPhotos( { pics = [] }){
    return (
        <>
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
