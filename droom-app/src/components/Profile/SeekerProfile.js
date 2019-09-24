import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/core";

const SeekerProfile = () => {
  return (
<FormControl>
  <FormLabel htmlFor="name">Name</FormLabel>
  <Input type="name" id="name" />
  <FormLabel htmlFor="email">Email address</FormLabel>
  <Input type="email" id="email" aria-describedby="email-helper-text" />
  <FormHelperText id="email-helper-text">
    We'll never share your email.
  </FormHelperText>
  <FormLabel htmlFor="experience">Experience</FormLabel>
  <Input type="experience" id="experience" />
</FormControl>
  );
}

export default SeekerProfile

