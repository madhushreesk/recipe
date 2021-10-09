import React from "react";

const Recipe = ({Label , Calorie, image}) => {
    return (
        <div>
            <h2>
                {Label}
            </h2>
            
            <img src = {image} alt = ""/>
            <p>Calories =  {Calorie}</p>
        </div>
    );
}

export default Recipe;