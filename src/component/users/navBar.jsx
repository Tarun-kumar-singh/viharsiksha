import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Tabs } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import { useHistory, useLocation } from 'react-router-dom'; 

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

const NavBar = (props) => {

    const {routeValue} = props
    const location = useLocation();
    const classes = useStyles();
    const history = useHistory()

    const [value, setValue] = useState(undefined);
    const [reloadPage, setReloadPage] = useState(false)
    const [rootKey, setRootKey] = useState('ewdfew')
    const routes = [{label:'Home', route:'/'}, {label:'मैट्रिक', route:'/matric'}]
    const routeMap = {0:'/matric'}

    const changeTab = (e, v) => {
        if(v === value){
            


            return
        }
        history.push(routeMap[0])
        setValue(v)
    }

    useEffect(()=>{
        if(location.pathname === '/matric'){
            setValue(0)
        }
    },[])
    
    return(
        <div key={rootKey}>
            <AppBar position="fixed" color="default">
                 <Typography variant="h6" className={classes.title}>
                    विहार शिक्षा
                </Typography>
                <Toolbar>
                    <Tabs
                        onChange={(e, v) => changeTab(e, v)}
                        value={value}
                        aria-label="Navigation Tabs"
                        variant="scrollable"
                        scrollButtons="on"
                    >
                        {
                            routes.map((el, index) => (
                                <Tab key={index} style={{fontWeight:700}} label={el.label} />
                            ))
                        }
                    </Tabs>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;