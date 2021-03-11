import React from 'react';
import NavBar from "./navBar";
import DisplayCard from "../comman/card";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({

    subjectList:{
        marginTop:'20px',
        marginLeft:'5%'
    }

   
  }));
const Home = () =>{

    const subjectList = ['गणित','अंग्रेज़ी', 'सामाजिक विज्ञान', 'विज्ञान', 'संस्कृत', 'हिन्दी','विज्ञान', 'संस्कृत', 'हिन्दी']
    const classes = useStyles();

    return(
        <div>
           <div className={classes.subjectList}>   
           <Box style={{marginTop:'20px'}} width="100%" justifyContent="center" display="flex" flexWrap="wrap" spacing={10}> 

            {
                subjectList.map((el, index) => (
                    <Box p={1} m={1}>
                    <DisplayCard
                        key={index}
                        title={el}
                    />
                    </Box>
                ))
            }      
     
         </Box>
        </div>
        </div>
    )
}

export default Home;