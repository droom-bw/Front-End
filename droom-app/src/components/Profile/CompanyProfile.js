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

const CompanyProfile = () => {
  return (

<Box width="80%" margin="auto">
  <FormControl>
    <Heading as='h1' margin="2%">Company Details</Heading>
    <FormLabel margin="1.5%" htmlFor="name">Name</FormLabel>
    <Input type="name" id="name" />
    <FormLabel margin="1.5%" htmlFor="location">Location</FormLabel>
    <Input type="location" id="location" />
    <FormLabel margin="1.5%" htmlFor="description">Description</FormLabel>
    <Input type="description" id="description" />
    <Button margin="2%" type="submit" variantColor="blue" variant="solid">Submit</Button>
  </FormControl>
</Box>
  );
}

export default CompanyProfile
