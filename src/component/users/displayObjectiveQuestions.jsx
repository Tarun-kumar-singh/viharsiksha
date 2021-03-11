import React from 'react';
import ObjectiveQuestion from "../comman/objectiveQuestion";


const DisplayObjectiveQuestions = (props) => {

    const q = [{question:'सोपानी कृषि किस राज्य में प्रचलित है ?', options:['बिहार का मैदानी क्षेत्र','उत्तराखंड','हरियाणा','पंजाब']},{question:'सोपानी कृषि किस राज्य में प्रचलित है ?', options:['बिहार का मैदानी क्षेत्र','उत्तराखंड','हरियाणा','पंजाब']},{question:'सोपानी कृषि किस राज्य में प्रचलित है ?', options:['बिहार का मैदानी क्षेत्र','उत्तराखंड','हरियाणा','पंजाब']}]
   
    const checkAnswer = (el) => {
        console.log(el)
    }

    return(
        <div>
            {
              q.map((el, index) => (
                <ObjectiveQuestion 
                   key={index}              
                   question={el.question}
                   options={el.options}
                   checkAnswer={checkAnswer}
                />
              ))
            }
        </div>
    )
}

export default DisplayObjectiveQuestions;