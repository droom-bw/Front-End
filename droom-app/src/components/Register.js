import React from "react";
import { withFormik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

// import { connect } from "react-redux";
// import { doSignIn } from "../util/actions/authActions";


function LoginForm({ values, errors, touched, isSubmitting }) {
  return (
    <Form className="login">
      <h3>Please Log In</h3>

      <div className="username field">
        <label>Username</label>
        <Field
          style={(errors.username && touched.username) ? { border: "1px solid red" } : null} 
          type="username" 
          name="username" 
          placeholder="Username" />
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
      </div>

      <div className="password field">
        <label>Password</label>
        <Field
          style={(errors.password && touched.password) ? { border: "1px solid red" } : null}
          type="password"
          name="password"
          placeholder="Password"
        />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
      </div>

      <button className="positive" color="green" type="submit" disabled={isSubmitting}>
        Submit
      </button>

      <Link to="/login">ALready signed up? Click here to login</Link>
    </Form>
  );
}

const LoginComponent = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(2, "Username must be 2 characters or longer")
      .required("Username is required"),
    password: Yup.string()
      .min(5, "Password must be 5 characters or longer")
      .required("Password is required")
  }),

  handleSubmit(values, formikBag) {
    // formikBag.props.doSignIn(values);
    // formikBag.props.history.push("/profile");
  }
})(LoginForm);

// export default connect(
//   null,
//   { doSignIn }
// )(LoginComponent);