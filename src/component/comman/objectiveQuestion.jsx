import React from 'react';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
const usestyles = makeStyles(({
    card:{
            cursor:'pointer',
            maxWidth:'50%',
            padding:'1%',
            marginTop:'20px',
            '&:hover':{
                border: 'solid 1px #117aca'
             }
        }
}))
const ObjectiveQuestion = (props) =>{

    const classes = usestyles()
    return(
        <div>
            <Grid direction="column" container spacing={1}>
                     <Typography variant="h6" component="h6">
                        {props.question}
                    </Typography>
                 {
                    props.options.map((el, index) => (
                    <Grid key={index} item xs={10}>
                        <Card onClick={() => props.checkAnswer(index)} className={classes.card}> 
                            {el}
                        </Card>
                    </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default ObjectiveQuestion;