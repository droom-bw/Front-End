import React, {useState} from "react"
import {connect} from "react-redux"
import {Link as RouterLink} from "react-router-dom"
import { withFormik, Form, Field } from "formik"
import * as Yup from "yup"
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Link, 
  Box
} from "@chakra-ui/core";
import { login } from "../store/actions";

const LoginComponent = (props) => {
    console.log("here");
    const [creds, setCreds] = useState({
      email: "",
      password: ""
    })

    const handleSumbit = (event) => {
      event.preventDefault();  
      props.login(creds);
      props.history.push("/home");
    }

    const handleChange = (event) => {
      console.log(creds)
        setCreds({...creds, [event.target.name]: event.target.value})
    }
    
    return (
    <>
    <Heading as="h1">Login</Heading>
    <Box width="80%" margin="auto">
    <FormControl onSubmit={handleSumbit}>
        <FormLabel margin="1.5%" htmlFor="email">Email</FormLabel>
        <Input type="email" name="email" id="email" onChange={handleChange} value={creds.email}/>
        <FormLabel margin="1.5%" htmlFor="">Password</FormLabel>
        <Input type="password" name="password" id="password" onChange={handleChange} value={creds.password} />
        <Button margin="3%" type="submit" variantColor="green">Submit</Button>
    </FormControl>
    </Box>
    <p>Don't have an account yet? <Link as={RouterLink} to="/register">Register</Link></p>
    </>
    );
}
const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps, {login})(LoginComponent)
