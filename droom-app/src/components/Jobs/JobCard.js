import React, {useState} from "react"
import {FormControl, FormLabel, Input, Box, Flex, Heading, Button} from "@chakra-ui/core"

//title, role, salary, description

function JobCardForm(props) {
    

    // const [jobsList, setJobsList] = useState([]);
    const [jobPost, setJobPost] = useState({
        title: "",
        role: "",
        salary: "",
        description: ""
    })

  const handleSubmit= e => {
    e.preventDefault();
    //logic for handling newpost here

    props.history.push("/jobs");

  }

    const handleChange = e =>{
      setJobPost({[e.target.name]: e.target.value})
    }



  return (
    <Box width="80%" margin="auto">
        <FormControl onSubmit={handleSubmit}>
          <Heading>Create a Job Posting</Heading>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input type="title" id="title" onChange={handleChange} />
          <FormLabel htmlFor="role">Role</FormLabel>
          <Input type="role" id="role" onChange={handleChange} />
          <FormLabel htmlFor="salary">Salary</FormLabel>
          <Input type="salary" id="salary" onChange={handleChange} />
          <FormLabel htmlFor="description">Description</FormLabel>
          <Input type="description" id="description" onChange={handleChange}/>
          <Button margin="2%" type="submit">Submit</Button>
        </FormControl>
    </Box>   
    );
  }
  export default JobCardForm;

 