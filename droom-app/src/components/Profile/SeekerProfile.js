import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/core";

const SeekerProfile = () => {
  return (
<FormControl>
  <FormLabel htmlFor="name">Name</FormLabel>
  <Input type="name" id="name" />
  <FormLabel htmlFor="email">Email address</FormLabel>
  <Input type="email" id="email" />
  <FormLabel htmlFor="experience">Experience</FormLabel>
  <Input type="experience" id="experience" />
</FormControl>
  );
}

export default SeekerProfile

