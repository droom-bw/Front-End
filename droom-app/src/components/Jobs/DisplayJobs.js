import React from 'react';
import JobCardForm from "./JobCard";

//title, role, salary, description

const DisplayJobs = () => {
    const fakeJobs = [{title: "Devin", role:"backend", salary:"50,000",description:"lalalalalalalallalal"}]

    return(
        <div>
            <h1>Jobs!</h1>
            {fakeJobs.map( job => <JobCardForm job={job}/>)}
            <button>Add a job!</button>
        </div>
    )
}

export default DisplayJobs;