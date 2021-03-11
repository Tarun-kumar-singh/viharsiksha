import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles({

    root:{
        minHeight:'100px',
        backgroundColor:'#282c34',
        width:'100%',
        color:'#fff'       
      
    },
    copyRight:{
      textAlign:'center'
    }
})
    const Footer = () =>{
      const classes = useStyles()
      const theme = useTheme();

    return(
        <div >
            <Card className={classes.root}>
            <CardContent>
                <p className={classes.copyRight}>Copyright Protected 2021, Vihar Siksha</p>  
                <Box display="flex" justifyContent="center">    
                    <div style={{display:'flex', gap:'10px', textAlign:'center'}}>
                        <p>About us</p>
                        <p>Contact us</p>
                    </div>
                </Box>
               
            </CardContent>
            </Card>
        </div>
    )
}

export default Footer