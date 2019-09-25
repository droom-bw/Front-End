import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box, 
  Heading, 
  Button
} from "@chakra-ui/core";

const SeekerProfile = (props) => {
  return (

  <Box width="80%" margin="auto">
    <FormControl>  
    <Heading as='h1' margin="2%">Job-Seeker Details</Heading>
      <FormLabel margin="1.5%"  htmlFor="name">Name</FormLabel>
      <Input type="name" id="name" />
      <FormLabel margin="1.5%" htmlFor="email">Email Address</FormLabel>
      <Input type="email" id="email" />
      <FormLabel margin="1.5%" htmlFor="location">Location</FormLabel>
      <Input type="location" id="location" />
      <FormLabel margin="1.5%" htmlFor="experience">Experience</FormLabel>
      <Input type="experience" id="experience" />
        <Button margin="2%" type="submit">Submit</Button>
      </FormControl>
  </Box>
  );
}

export default SeekerProfile

