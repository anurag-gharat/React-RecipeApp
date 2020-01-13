import React from 'react'

function Recipe({title,calories,img,ingredients,serves,type,weight,caution}){
    return(
        <div className="recipe">
        <h1>{title}</h1>
        <h2>{calories}</h2>
        <img src={img}></img>
        <ol>
            {ingredients.map(ingredient =>(<li>{ingredient.text}</li>))}
        </ol>
    <p>Serves:{serves}</p>
    <p>Food Category:{type}</p>
    <p>Total Weight:{weight}</p>
    <p>Caution:{caution}</p>
        </div>
    )

}
export default Recipe;