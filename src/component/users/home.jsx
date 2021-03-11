import React, { useState } from 'react';
import DisplayCard from "../comman/card";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import DisplayObjectiveQuestions from "./displayObjectiveQuestions";

const useStyles = makeStyles((theme) => ({

    subjectList:{
        marginTop:'20px',
        marginLeft:'5%'
    }   
}));
const Home = () =>{

    const subjectList = ['गणित','अंग्रेज़ी', 'सामाजिक विज्ञान', 'विज्ञान', 'संस्कृत']
    const classes = useStyles();
    const [displayQuestions, setDisplayQuestions] = useState(false)

    const cardClicked = (el) => {
        console.log('Clicking ...', el)
        setDisplayQuestions(true)
    }

    return(
        <div>
           <div style={{display: displayQuestions ? 'none' : 'block' }} className={classes.subjectList}>   
                <Box style={{marginTop:'20px'}} width="100%" justifyContent="center" display="flex" flexWrap="wrap" spacing={10}> 
                    {
                        subjectList.map((el, index) => (
                            <Box p={1} m={1}>
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
                    questions={[{question:'सोपानी कृषि किस राज्य में प्रचलित है ?', options:['बिहार का मैदानी क्षेत्र','उत्तराखंड','हरियाणा','पंजाब'], rightOption:1},{question:'सोपानी कृषि किस राज्य में प्रचलित है ?', options:['बिहार का मैदानी क्षेत्र','उत्तराखंड','हरियाणा','पंजाब'], rightOption:2},{question:'सोपानी कृषि किस राज्य में प्रचलित है ?', options:['बिहार का मैदानी क्षेत्र','उत्तराखंड','हरियाणा','पंजाब'], rightOption:3}]}
            />
            </div>
        </div>
    )
}

export default Home;