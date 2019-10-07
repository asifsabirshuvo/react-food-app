import React from 'react';

const Recipe = ({title,calories,image,ingredients}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <ul>
                {
                    ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))
               }
            </ul>

            <img src={image} alt=""></img>
        </div>
    );
}

export default Recipe;