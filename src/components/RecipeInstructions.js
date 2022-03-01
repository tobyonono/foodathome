import React from 'react';

const RecipeInstructions = ({instructions}) => {
    console.log(instructions);
    const instructionList = instructions.map((instruction, i) =>{
        return <li key={instruction.id} id ={instruction.id}>{instruction.display_text}</li>
    });

    return(
        <ul className="instructionList">
           {instructionList}   
        </ul>
    )

}

export default RecipeInstructions;