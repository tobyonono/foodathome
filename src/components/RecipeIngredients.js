import React from 'react';

const RecipeIngredients = ({ ingredients }) => {

    const ingredientList = ingredients.map((section, i) => {
        return (
            <div key={i}>
                {section.name &&<h4><i>for the {section.name}</i></h4>}          
                <ul className = "instructionList">
                    {section.components.map((sectionIngredient, i) => <li>{sectionIngredient.raw_text}</li>)}
                </ul>
            </div>
        )
    });

    return (
        <div className="ingredientList">
            {ingredientList}
        </div>
    )

}

export default RecipeIngredients;