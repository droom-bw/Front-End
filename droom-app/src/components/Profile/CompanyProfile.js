<<<<<<< HEAD
import React, {useEffect, useState} from "react";
import CompanyCard from '../Home/CompanyCard';
import axios from 'axios';

const CompanyProfile = (props) => {
//const [companyList, setCompanyList] = useState([]);
const [companyID, setCompanyID] = useState("");

// useEffect(() => {
//     axios.get(//API HERE)
//     .then(res => {
//         const data = {res.data}
//         console.log(data);
//         setCompanyID(data);
//     })
//     .catch(error => {
//         console.log(`Error getting data: `, error);
//     });
// },[]);



return (
<React.Fragment>



</React.Fragment>



);



}

export default CompanyProfile;
=======
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
    <Button margin="2%" type="submit">Submit</Button>
  </FormControl>
</Box>
  );
}

export default CompanyProfile
>>>>>>> 37872dda9e762efc135f012a4d74a33f1b9bacc6
