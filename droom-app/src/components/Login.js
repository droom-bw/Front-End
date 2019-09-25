import React, {useState} from "react"
import {connect} from "react-redux"
import { withFormik, Form, Field } from "formik"
import * as Yup from "yup"
import {
  FormLabel,
  Input,
  Button
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
    <FormLabel onSubmit={handleSumbit}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input type="email" name="email" id="email" onChange={handleChange} value={creds.email}/>
        <FormLabel htmlFor="">Password</FormLabel>
        <Input type="password" name="password" id="password" onChange={handleChange} value={creds.password} />
        <Button type="submit" variantColor="green">Submit</Button>
    </FormLabel>
    );
}
const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps, {login})(LoginComponent)
