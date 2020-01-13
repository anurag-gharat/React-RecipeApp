import React from 'react'

function Recipe({title,calories,img,ingredients,serves,type,weight,caution}){
    return(
        <div className="recipe">
        <h1>Name: {title}</h1> 
        <p>calories:{calories}</p>
        <img src={img} className="recipe-image"></img>
        <h4>Procedure:-</h4>
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