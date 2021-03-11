import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    cursor:'pointer',
    textAlign:'center',
    fontWeight:700
  },
  title: {
    fontSize: 20,
    paddingTop:'10%',
    fontWeight:700,
    color:'#0f7c90',
    '&:hover':{
        color:'#3c3b37'
    }
  }
});

const DisplayCard = (props) => {

    const classes = useStyles()
    const {title} = props
    return(
        <div onClick={props.cardClicked(title)}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} gutterBottom>
                        {title}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default DisplayCard;