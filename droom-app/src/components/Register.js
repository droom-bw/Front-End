import React from "react"
import { withFormik, Form, Field } from "formik"
import { Link } from "react-router-dom"
import * as Yup from "yup"
import { FormControl, FormLabel, Input, Box, Flex, Button } from "@chakra-ui/core"

// import { connect } from "react-redux";
// import { doSignIn } from "../util/actions/authActions";

function RegisterForm({ values, errors, touched, isSubmitting }) {
    return (
      <FormControl>
      <FormLabel htmlFor="username">Username</FormLabel>
      <Input type="username" id="username" />
      <FormLabel htmlFor="password">Password</FormLabel>
      <Input type="password" id="password" />
    </FormControl>
    // <Button>Submit</Button>
    );
}

export default RegisterForm;
