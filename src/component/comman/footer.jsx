import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({

    root:{
        height:'130px',
        backgroundColor:'#282c34',
        color:'#fff'       
      
    },
    copyRight:{
      textAlign:'center'
    }
})
const Footer = () =>{
      const classes = useStyles()

    return(
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <div className={classes.copyRight}>
                        <p >Copyright Protected 2021, Vihar Siksha</p>  
                        <p>About us</p>
                        <p>Contact us</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Footer