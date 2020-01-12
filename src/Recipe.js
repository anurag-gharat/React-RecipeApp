import React from 'react'

function Recipe({title,calories,img}){
    return(
        <div>
        <h1>{title}</h1>
        <h2>{calories}</h2>
        <img src={img}></img>
        </div>
    )

}
export default Recipe;