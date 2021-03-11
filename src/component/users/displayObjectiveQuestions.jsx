import React from 'react';
import ObjectiveQuestion from "../comman/objectiveQuestion";


const DisplayObjectiveQuestions = (props) => {

    const {questions} = props

    return(
        <div style={{marginLeft:'10%', paddingTop:'50px'}}>
            {
              questions.map((el, index) => (
                <ObjectiveQuestion 
                   key={index}              
                   question={el.question}
                   options={el.options}
                   rightOption={el.rightOption}
                />
              ))
            }
        </div>
    )
}

export default DisplayObjectiveQuestions;