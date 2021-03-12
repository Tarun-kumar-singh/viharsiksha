import React from 'react';
import Pagination from '@material-ui/lab/Pagination';


const BottomPagination = (props) => {

    const {paginationChange, pageSize, listLength} = props
    return(
        <div>
           <Pagination 
                onChange={paginationChange}
                count={Math.ceil(listLength / pageSize)} 
                variant="outlined" 
            />
        </div>
    )
}


export default BottomPagination;