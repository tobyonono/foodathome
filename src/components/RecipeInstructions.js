import React from 'react';

const RecipeInstructions = ({instructions}) => {
    console.log(instructions);
    const instructionList = instructions.map((instruction, i) =>{
        return <li key={instruction.id} id ={instruction.id}>{instruction.display_text}</li>
    });

    return(
        <div className ="directions">
            <ul className="directionList">
           {instructionList}   
        </ul>
        </div>
        
    )

}

export default RecipeInstructions;