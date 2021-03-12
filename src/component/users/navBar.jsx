import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Tabs } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import { useHistory } from 'react-router-dom'; 

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
    //   flexGrow: 1,
    textAlign:'center'
    },
  }));

const NavBar = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(undefined);
    const history = useHistory()

    const changeRoute = () => {
        // history.push('/home')
    }
    
    return(
        <div>
            <AppBar position="fixed" color="default">
                 <Typography variant="h6" className={classes.title}>
                    विहार शिक्षा
                </Typography>
                <Toolbar>
                    <Tabs
                        onChange={(e, v) => setValue(v)}
                        value={value}
                        aria-label="Navigation Tabs"
                        variant="scrollable"
                        scrollButtons="on"
                    >
                        <Tab onClick={changeRoute} style={{fontWeight:700}} label="मैट्रिक" />
                    </Tabs>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;