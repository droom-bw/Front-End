import React, { useState } from "react"
import { withFormik, Form, Field } from "formik"
import { Link } from "react-router-dom"
import {connect} from "react-redux"
import * as Yup from "yup"
import { Heading, FormControl, FormLabel, Input, Box, Flex, Button, Select } from "@chakra-ui/core"

import {registerCompany} from "../store/actions"
// import { connect } from "react-redux";
// import { doSignIn } from "../util/actions/authActions";

const RegisterCompany = (props) => {
    const [newCompany, setNewCompany] = useState({
      name: "",
      email: "",
      password: "",
      location: ""
    })

    const handleSumbit = (event) => {
      event.preventDefault();  
      props.registerCompany(newCompany, props);
    }

    const handleChange = (event) => {
      setNewCompany({...newCompany, [event.target.name]: event.target.value})
    }
    return (
      <>
      <Box width="80%" margin="auto">
      <form onSubmit={handleSumbit}>
      <FormControl >
      <Heading as="h1">Register as Company</Heading>
        <FormLabel margin="1.5%" htmlFor="username">Name</FormLabel>
        <Input type="name" name="name" onChange={handleChange} value={newCompany.name}/>
        
        <FormLabel margin="1.5%" htmlFor="email">Email</FormLabel>
        <Input type="email" name="email" onChange={handleChange} value={newCompany.email}/>

        <FormLabel margin="1.5%" htmlFor="password">Password</FormLabel>
        <Input type="password" name="password" onChange={handleChange} value={newCompany.password}/>

        <FormLabel margin="1.5%" htmlFor="location">Location</FormLabel>
        <Input type="text" name="location" onChange={handleChange} value={newCompany.location}/>
        
        <Button type="submit" variantColor="green">Submit</Button>
      </FormControl>
      </form>
    </Box>
    </>
    );
}


export default connect(null, {registerCompany})(RegisterCompany);
