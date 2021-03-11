import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    // maxWidth: '15%',
    cursor:'pointer'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
    paddingTop:'10%'
  },
  pos: {
    marginBottom: 12,
  },
});

const DisplayCard = (props) => {

    const classes = useStyles()
    return(
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} gutterBottom>
                        {props.title}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default DisplayCard;