import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/core";

const CompanyProfile = () => {
  return (
<FormControl>
  <FormLabel htmlFor="name">Name</FormLabel>
  <Input type="name" id="name" />
  <FormLabel htmlFor="location">Location</FormLabel>
  <Input type="location" id="location" />
  <FormLabel htmlFor="description">Description</FormLabel>
  <Input type="description" id="description" />
</FormControl>
  );
}

export default CompanyProfile
