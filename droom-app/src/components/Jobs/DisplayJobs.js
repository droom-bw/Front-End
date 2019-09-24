import React from 'react';
import JobCard from "./JobCard";

export const DisplayJobs = () => {
    const fakeJobs = [{name: "Devin"}]

    return(
        <div>
            <h1>Jobs!</h1>
            <button>Add a job!</button>
            {fakeJobs.map( job => <JobCard job={job}/>)}
        </div>
    )
}