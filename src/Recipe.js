import React from "react";
import style from './recipe.module.css';

const Recipe = ({Label , Calorie, image, ingredients}) => {
    return (
        <div className = {style.recipe}>
            <h2>
                {Label}
            </h2>
            <ol>
                {ingredients.map(ing => (
                    <li> {ing.text} </li>
                ))}
            </ol>
                <img className =  {style.image} src = {image} alt = ""/>
            <p>Calories =  {Calorie}</p>
           
        </div>
    );
}

export default Recipe;