import React, { useEffect, useState } from 'react';
import { connect } from "react-redux"
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import {FormControl, FormLabel, Input, Box, Flex, Heading, Button} from "@chakra-ui/core"

//title, role, salary, description

const DisplayJobs = (props) => {
    //The form is blank indicates no job!
    const [job, setJob] = useState({title: "", role:"", salary:"", description:""})
    
    //Get job from company
    useEffect( () => {
        axiosWithAuth().get("/jobs")
        .then(res => {
            console.log(`Display jobs get requests`, res);
            //setJob(res.data) etc
        })
        .catch(error => console.log(error))
    }, [])

    //Handle submit edits or adds a job
    const handleSubmit = e => {
        e.preventDefault();
        //post request to server to add job to the id of this user's jobs
        const companyId = props.user.id;
        const body = "";
        axiosWithAuth().post(`/jobs/${companyId}`, body)
        .then(res => {
            console.log(`post request to get job from company id`);
            //setJob(res.data) etc
            props.history.push("/jobs");
        })
        .catch(error => console.log(error))
    }

    const deleteJob = () => {
        console.log("delete");
        const companyID = props.user.id;
        //Delete or put request, set job to ""
        axiosWithAuth().delete(`/jobs/${companyID}`)
        .then(res => {
            console.log(`Deleting a job`, res);
            //The form is not filled out!
            setJob({title: "", role:"", salary:"", description:""})
            props.history.push("/jobs")
        })
        .catch(error => console.log(error));
    }

    const handleChange = e =>{
        setJob({[e.target.name]: e.target.value})
    }

    return(
        <div>
            <Button margin="2%" variantColor="green">Add Job</Button>
            <Box width="80%" margin="auto">
                <form onSubmit={handleSubmit}>
                    <FormControl>
                    <Heading>Job!</Heading>

                    <FormLabel htmlFor="title">Title</FormLabel>
                    <Input type="title" id="title" value={job.title} onChange={handleChange} />

                    <FormLabel htmlFor="role">Role</FormLabel>
                    <Input type="role" id="role" value={job.role} onChange={handleChange} />

                    <FormLabel htmlFor="salary">Salary</FormLabel>
                    <Input type="salary" id="salary" value={job.salary} onChange={handleChange} />

                    <FormLabel htmlFor="description">Description</FormLabel>
                    <Input type="description" id="description" value={job.description} onChange={handleChange}/>

                    <Button variantColor="red" onClick={deleteJob} >Delete</Button>
                    <Button margin="2%" type="submit" variantColor="green" >Save Changes</Button>
                    </FormControl>
                </form>
            </Box>  
        </div>
    )
}

const mapStateToProps = state => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, {})(DisplayJobs);