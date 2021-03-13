import React, { useState } from 'react';
import DisplayCard from "../comman/card";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import DisplayObjectiveQuestions from "./displayObjectiveQuestions";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({

    subjectList:{
        marginTop:'20px',
        marginLeft:'5%'
    },
    title:{
        fontWeight:700,
        marginLeft:'10%'
    } 
}));
const Matric = () =>{

    const subjectList = ['गणित','अंग्रेज़ी', 'सामाजिक विज्ञान', 'विज्ञान', 'संस्कृत']
    const classes = useStyles();
    const [displayQuestions, setDisplayQuestions] = useState(false)
    const [questions, setQuestions] = useState([{question:'सोपानी कृषि किस राज्य में प्रचलित है ?', options:['बिहार का मैदानी क्षेत्र','उत्तराखंड','हरियाणा','पंजाब'], rightOption:1},{question:'सोपानी कृषि किस राज्य में प्रचलित है ?', options:['बिहार का मैदानी क्षेत्र','उत्तराखंड','हरियाणा','पंजाब'], rightOption:2},{question:'सोपानी कृषि किस राज्य में प्रचलित है ?', options:['बिहार का मैदानी क्षेत्र','उत्तराखंड','हरियाणा','पंजाब'], rightOption:3},{question:'सोपानी कृषि किस राज्य में प्रचलित है ?', options:['बिहार का मैदानी क्षेत्र','उत्तराखंड','हरियाणा','पंजाब'], rightOption:1},{question:'सोपानी कृषि किस राज्य में प्रचलित है ?', options:['बिहार का मैदानी क्षेत्र','उत्तराखंड','हरियाणा','पंजाब'], rightOption:2},{question:'सोपानी कृषि किस राज्य में प्रचलित है ?', options:['बिहार का मैदानी क्षेत्र','उत्तराखंड','हरियाणा','पंजाब'], rightOption:3},{question:'सोपानी कृषि किस राज्य में प्रचलित है ?', options:['बिहार का मैदानी क्षेत्र','उत्तराखंड','हरियाणा','पंजाब'], rightOption:1},{question:'सोपानी कृषि किस राज्य में प्रचलित है ?', options:['बिहार का मैदानी क्षेत्र','उत्तराखंड','हरियाणा','पंजाब'], rightOption:2},{question:'सोपानी कृषि किस राज्य में प्रचलित है ?', options:['बिहार का मैदानी क्षेत्र','उत्तराखंड','हरियाणा','पंजाब'], rightOption:3},{question:'सोपानी कृषि किस राज्य में प्रचलित है ?', options:['बिहार का मैदानी क्षेत्र','उत्तराखंड','हरियाणा','पंजाब'], rightOption:1},{question:'सोपानी कृषि किस राज्य में प्रचलित है ?', options:['बिहार का मैदानी क्षेत्र','उत्तराखंड','हरियाणा','पंजाब'], rightOption:2},{question:'सोपानी कृषि किस राज्य में प्रचलित है ?', options:['बिहार का मैदानी क्षेत्र','उत्तराखंड','हरियाणा','पंजाब'], rightOption:3},{question:'सोपानी कृषि किस राज्य में प्रचलित है ?', options:['बिहार का मैदानी क्षेत्र','उत्तराखंड','हरियाणा','पंजाब'], rightOption:1},{question:'सोपानी कृषि किस राज्य में प्रचलित है ?', options:['बिहार का मैदानी क्षेत्र','उत्तराखंड','हरियाणा','पंजाब'], rightOption:2},{question:'last question hai सोपानी कृषि किस राज्य में प्रचलित है ?', options:['बिहार का मैदानी क्षेत्र','उत्तराखंड','हरियाणा','पंजाब'], rightOption:3}])
   
    const cardClicked = (el) => {
        setDisplayQuestions(true)
    }

     const toggleStatus = () => {
         setDisplayQuestions(false)
      }

    return(
        <div>
            <div style={{marginLeft:'10%', display: displayQuestions ? 'block' : 'none', cursor: 'pointer'}} onClick={toggleStatus}><ArrowBackIcon /></div>
            <div className={classes.title}>वस्तुनिष्ठ प्रश्नों का अभ्यास करे</div>
            <div style={{display: displayQuestions ? 'none' : 'block' }} className={classes.subjectList}>   
                <Box style={{marginTop:'20px'}} width="100%" justifyContent="center" display="flex" flexWrap="wrap" spacing={10}> 
                    {
                        subjectList.map((el, index) => (
                            <Box key={index} p={1} m={1}>
                                <DisplayCard
                                    key={index}
                                    title={el}
                                    cardClicked={() => cardClicked}
                                />
                            </Box>
                        ))
                    }      
                </Box>
            </div>
            <div style={{display: displayQuestions ? 'block' : 'none' }}>
                <DisplayObjectiveQuestions
                    questions={questions}
            />
            </div>
        </div>
    )
}

export default Matric;