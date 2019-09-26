import React, { useState } from "react"
import { connect } from "react-redux"
import { Link as RouterLink } from "react-router-dom"
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
} from "@chakra-ui/core"
import { login } from "../store/actions"

const LoginComponent = props => {
  const [creds, setCreds] = useState({
    email: "",
    password: ""
  })

  const handleSumbit = event => {
    console.log("on submit")
    event.preventDefault()
    props.login(creds, props)
  }

  const handleChange = event => {
    console.log(creds)
    setCreds({ ...creds, [event.target.name]: event.target.value })
  }
  //() => {handleSubmit().then(() => {props.history.push("/home")})}
  return (
    <>
      <Box width="80%" margin="auto">
        <form onSubmit={handleSumbit}>
          <FormControl>
            <Heading as="h1">Login</Heading>
            <FormLabel margin="1.5%" htmlFor="email">
              Email
            </FormLabel>
            <Input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={creds.email}
            />
            <FormLabel margin="1.5%" htmlFor="">
              Password
            </FormLabel>
            <Input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              value={creds.password}
            />
            <Button margin="3%" type="submit" variantColor="blue">
              Submit
            </Button>
          </FormControl>
        </form>
      </Box>
      <p>
        Don't have an account yet?<br></br>
        <Link as={RouterLink} to="/registerCompany">
          Register as Company
        </Link>
        <br></br>
        <Link as={RouterLink} to="/registerSeeker">
          Register as Seeker
        </Link>
      </p>
    </>
  )
}
const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(
  mapStateToProps,
  { login }
)(LoginComponent)
