import React from 'react';
import ObjectiveQuestion from "../comman/objectiveQuestion";


const DisplayObjectiveQuestions = (props) => {

    const q = [{question:'सोपानी कृषि किस राज्य में प्रचलित है ?', options:['बिहार का मैदानी क्षेत्र','उत्तराखंड','हरियाणा','पंजाब'], rightOption:1},{question:'सोपानी कृषि किस राज्य में प्रचलित है ?', options:['बिहार का मैदानी क्षेत्र','उत्तराखंड','हरियाणा','पंजाब'], rightOption:2},{question:'सोपानी कृषि किस राज्य में प्रचलित है ?', options:['बिहार का मैदानी क्षेत्र','उत्तराखंड','हरियाणा','पंजाब'], rightOption:3}]
  

    return(
        <div style={{marginLeft:'10%', paddingTop:'50px'}}>
            {
              q.map((el, index) => (
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