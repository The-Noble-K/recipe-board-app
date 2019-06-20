import React from 'react'

const Recipe = ({recipe}) => 
    <div className='tile' key={recipe.id}>
        <h3>{recipe.title}</h3>
        <p>{recipe.ingredients}</p>
        <p>{recipe.instructions}</p>
    </div>


export default Recipe