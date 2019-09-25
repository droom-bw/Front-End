import React, { useState } from "react"
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik"
import { Link } from "react-router-dom"
import * as Yup from "yup"
import { Heading, FormControl, FormLabel, Input, Box, Flex, Button, Select } from "@chakra-ui/core"
import {registerSeeker} from "../store/actions/";

// import { connect } from "react-redux";
// import { doSignIn } from "../util/actions/authActions";

const RegisterSeeker = (props) => {
    const [newSeeker, setNewSeeker] = useState({
      name: "",
      email: "",
      password: "",
      location: "",
      resume: ""
    })

    const handleSumbit = (event) => {
      event.preventDefault();  
      props.registerSeeker(newSeeker);
      props.history.push("/home");
    }

    const handleChange = (event) => {
      console.log(event);
      console.log(newSeeker);
      setNewSeeker({...newSeeker, [event.target.name]: event.target.value})
    }
    return (
      <>
      <Box width="80%" margin="auto">
      <FormControl onSubmit={handleSumbit}>
      <Heading as="h1">Register</Heading>
        <FormLabel margin="1.5%" htmlFor="username">Name</FormLabel>
        <Input type="name" name="name" id="name" onChange={handleChange} value={newSeeker.name}/>
        
        <FormLabel margin="1.5%" htmlFor="email">Email</FormLabel>
        <Input type="email" name="email" id="email" onChange={handleChange} value={newSeeker.email}/>

        <FormLabel margin="1.5%" htmlFor="password">Password</FormLabel>
        <Input type="password" name="password" id="password" onChange={handleChange} value={newSeeker.password}/>

        <FormLabel margin="1.5%" htmlFor="location">Location</FormLabel>
        <Input type="text" name="location" id="location" onChange={handleChange} value={newSeeker.location} />

        <FormLabel margin="1.5%" htmlFor="resume">Resume</FormLabel>
        <Input type="text" name="resume" id="resume" onChange={handleChange} value={newSeeker.resume}/>
      
        <Button type="submit" variantColor="green">Submit</Button>
      </FormControl>
    </Box>
    </>
    );
}

export default connect(null, {registerSeeker})(RegisterSeeker);
