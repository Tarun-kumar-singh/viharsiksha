import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Divider, makeStyles } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    width:'500px',
    borderRadius: 12,
    textAlign: 'center',
    marginLeft:'10%',
    marginRight:'10%'
  },
  header: {
    textAlign: 'center',
    spacing: 10,
  },
  list: {
    padding: '20px',
    display:'flex',
    flexDirection:'column',
    gap:'20px'
  },
  button: {
    margin: theme.spacing(1),
  },
  action: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));

export const Login = ()=> {
  
    const classes = useStyles();
    const [isLogging, setLogging] = useState(false)
    const [formData, setFormData] = useState({email:'', password:''})

    const submitForm = (ev) => {
        setLogging(true)
        ev.preventDefault()
        
     
    }

    const formChange = (ev) =>{
        const {name, value} = ev.target
        console.log(ev.target.value)
        setFormData({
            ...formData,
            name:value
        })
    }
 
  return (
    <div>
        <Box display="flex" justifyContent="center">
            <Card className={classes.root}>
            <form onSubmit={submitForm}>
                <CardHeader title="Admin Login" className={classes.header} />
                <Divider variant="middle" /> 
                <CardContent>    
                    <div className={classes.list}>

                    <TextField onChange={formChange} name="email" value={formData.email} type="email" label="Email" variant="outlined"/>
                    <TextField onChange={formChange} name="password" value={formData.password} type="password" label="Password" variant="outlined" />

                    </div>
                </CardContent>
                <Divider variant="middle" />
                <CardActions className={classes.action}>
                    <Button type="submit" variant="contained" color="primary" disabled={isLogging ? true : false} className={classes.button}>
                        {isLogging ? 'logining...' : 'Login'}
                    </Button>
                </CardActions>
            </form>
            </Card>
        </Box>
    </div>
  );
};

export default Login;