import React, { useState } from "react"
import { withFormik, Form, Field } from "formik"
import { Link } from "react-router-dom"
import * as Yup from "yup"
import { Heading, FormControl, FormLabel, Input, Box, Flex, Button, Select } from "@chakra-ui/core"

// import { connect } from "react-redux";
// import { doSignIn } from "../util/actions/authActions";

const RegisterComponent = (props) => {
    const [newCompany, setNewCompany] = useState({
      name: "",
      email: "",
      password: "",
      isSeeker: false
    })

    const handleSumbit = (event) => {
      event.preventDefault();  
      props.register(newCompany);
      props.history.push("/home");
    }

    const handleChange = (event) => {
      console.log(event);
      console.log(newCompany);
      let formInputs = {...newCompany, [event.target.name]: event.target.value === "false" ? false : true}
      setNewCompany(formInputs)
    }
    return (
      <>
      <Box width="80%" margin="auto">
      <FormControl onSubmit={handleSumbit}>
      <Heading as="h1">Register</Heading>
        <FormLabel margin="1.5%" htmlFor="username">Name</FormLabel>
        <Input type="name" name="name" id="name" onChange={handleChange} value={newUser.name}/>
        
        <FormLabel margin="1.5%" htmlFor="email">Email</FormLabel>
        <Input type="email" name="email" id="email" onChange={handleChange} value={newUser.email}/>

        <FormLabel margin="1.5%" htmlFor="password">Password</FormLabel>
        <Input type="password" name="password" id="password" onChange={handleChange} value={newUser.password}/>
        
        <Button type="submit" variantColor="green">Submit</Button>
      </FormControl>
    </Box>
    </>
    );
}

export default RegisterComponent;
