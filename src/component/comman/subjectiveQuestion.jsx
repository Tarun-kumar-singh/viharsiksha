import React from 'react';

const SubjectiveQuestion = (props) => {

    const {question, answer} = props

    return(
        <div style={{width:'90%'}}>
            <div style={{display:'flex', flexDirection:'row', gap:'10px'}} >
                <div style={{fontWeight:700}}> प्रश्न: </div>
                <div> {question}</div>
            </div>
            <div style={{marginTop:'10px'}}>
                <div style={{fontWeight:700}}>उत्तर</div>
                    {answer}
            </div>
        </div>
    )
}
export default SubjectiveQuestion;