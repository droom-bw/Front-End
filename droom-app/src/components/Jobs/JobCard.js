import React from "react"
import {FormControl, FormLabel, Input, Box, Flex, Heading} from "@chakra-ui/core"

//title, role, salary, description

function JobCardForm({job}) {
  return (
    <Box width="80%" margin="auto">
        <FormControl>
          <Heading>Create a Job Posting</Heading>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input type="title" id="title" />
          <FormLabel htmlFor="role">Role</FormLabel>
          <Input type="role" id="role" />
          <FormLabel htmlFor="salary">Salary</FormLabel>
          <Input type="salary" id="salary" />
          <FormLabel htmlFor="description">Description</FormLabel>
          <Input type="description" id="description" />
        </FormControl>
    </Box>   
    );
  }
  export default JobCardForm;

 