import React, {useState, useEffect} from 'react';
import ObjectiveQuestion from "../comman/objectiveQuestion";
import BottomPagination from '../comman/bottomPagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({

    pagination:{
        paddingTop:'20px',
        paddingBottom:'20px'
    }

}));
const DisplayObjectiveQuestions = (props) => {

    const classes = useStyles()
    const {questions} = props
    const [currentList, setCurrentList] = useState([])
    const [pageSize, stPagesize] = useState(10)

    useEffect(()=> {
        setCurrentList(questions.slice(0, 10))
    },[])

    const paginationChange = (event, pageNumber) => {
        setCurrentList(questions.slice(10*(pageNumber - 1), (pageNumber * 10)))
    }

    return(
        <div style={{marginLeft:'10%', paddingTop:'50px'}}>
          <div>
            {
              currentList.map((el, index) => (
                <ObjectiveQuestion 
                   key={index}              
                   question={el.question}
                   options={el.options}
                   rightOption={el.rightOption}
                />
              ))
            }
            </div>
            <div className={classes.pagination} >
                <BottomPagination
                    paginationChange={paginationChange}
                    listLength={questions.length}
                    pageSize={pageSize}
                />
            </div>
        </div>
    )
}

export default DisplayObjectiveQuestions;