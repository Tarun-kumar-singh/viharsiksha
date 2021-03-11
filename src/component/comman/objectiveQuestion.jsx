import React, {useState} from 'react';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { green, red } from '@material-ui/core/colors';

const usestyles = makeStyles(({
    card:{
            cursor:'pointer',
            maxWidth:'50%',
            padding:'1%',
            marginTop:'20px',
            '&:hover':{
                background:'#d7ded9',
                opacity:'0.5'
             },
             boxShadow:'none'
        }
}))
const ObjectiveQuestion = (props) => {

    const classes = usestyles()
    const [solved, setSolved] = useState(false)
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(undefined)
    const [solvedOption, setSolvedOption] = useState(undefined)

    const optionMap = {
        1: 'A',
        2: 'B',
        3: 'C',
        4: 'D'
    }
    
    const checkAnswer = (el, index, rightOption) =>{
        setSolved(true)
        setSolvedOption(index)
        setIsAnswerCorrect(index + 1 === rightOption ? true :  false)
    }

    return(
        <div style={{paddingTop:'50px'}}>
            <Box display="flex" flexDirection="column" spacing={1}>
                     <Typography variant="h6" component="h6">
                        {props.question}
                    </Typography>
                 {
                    props.options.map((el, index) => (
                         <Card key={index} onClick={() => checkAnswer(el, index, props.rightOption)} className={classes.card}> 
                        
                         <div style={{display:'flex', direction:'row', gap:'20px'}}>
                             <div style={{display: solved && isAnswerCorrect && solvedOption === index ? 'block' : 'none'}}><CheckIcon style={{ color: green[500] }}/></div> 
                             <div style={{display: solved && !isAnswerCorrect && solvedOption === index ? 'block' : 'none'}}><CloseIcon style={{ color: red[500] }} /></div>
                            <div style={{fontWeight:700}}>{optionMap[index+1]}</div> 
                            <div>{el}</div> 
                        </div>
                        </Card>
                     ))
                }
            </Box>
        </div>
    )
}

export default ObjectiveQuestion;