import React from 'react';

const JobCard = (props) => {

    return(
        <div>
            <h1>{props.job.name}</h1>
            <button>Delete</button>
            <button>Edit</button>
        </div>
    )
}

export default JobCard;