import React, { useState } from "react"
import { withFormik, Form, Field } from "formik"
import { Link } from "react-router-dom"
import * as Yup from "yup"
import { Heading, FormControl, FormLabel, Input, Box, Flex, Button, Select } from "@chakra-ui/core"

// import { connect } from "react-redux";
// import { doSignIn } from "../util/actions/authActions";

const RegisterComponent = (props) => {
    console.log("here");
    const [newUser, setNewUser] = useState({
      name: "",
      email: "",
      password: "",
      location: "",
      resume: "",
      isSeeker: false
    })

    const handleSumbit = (event) => {
      event.preventDefault();  
      props.register(newUser);
      props.history.push("/home");
    }

    const handleChange = (event) => {
      console.log(newUser)
        setNewUser({...newUser, [event.target.name]: event.target.value})
    }
    return (
      <>
      <Heading as="h1">Register</Heading>
      
      <FormControl onSubmit={handleSumbit}>
        <FormLabel htmlFor="username">Name</FormLabel>
        <Input type="name" name="name" id="name" />
        
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input type="email" name="email" id="email" />

        <FormLabel htmlFor="password">Password</FormLabel>
        <Input type="password" name="password" id="password" />

        <FormLabel htmlFor="location">Location</FormLabel>
        <Input type="text" name="location" id="location" />

        <FormLabel htmlFor="resume">Resume</FormLabel>
        <Input type="text" name="resume" id="resume" />
        
        <FormControl>
          <Select placeholder="Are you...">
          <option name="seeker">Looking for a job</option>
          <option name="company">Looking for a candidate</option>
          </Select>
          
        </FormControl>
        <Button type="submit" variantColor="green">Submit</Button>
      </FormControl>
    </>
    );
}

export default RegisterComponent;
