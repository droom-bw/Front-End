import React from 'react';
import JobCard from "./JobCard";

//title, role, salary, description

const DisplayJobs = () => {
    const fakeJobs = [{title: "Devin", role:"backend", salary:"50,000",description:"lalalalalalalallalal"}]

    return(
        <div>
            <h1>Jobs!</h1>
            <button>Add a job!</button>
            {fakeJobs.map( job => <JobCard job={job}/>)}
        </div>
    )
}

export default DisplayJobs;