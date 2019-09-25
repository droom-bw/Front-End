import React from "react"
import {FormControl, FormLabel, Input, Box, Flex} from "@chakra-ui/core"
import { withFormik, Form, Field } from "formik"
import * as Yup from "yup"

//title, role, salary, description

function JobCardForm({job}) {
  return (
    <Box>
        <FormControl>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input type="title" id="title" />
          <FormLabel htmlFor="role">Role</FormLabel>
          <Input type="role" id="role" />
          <FormLabel htmlFor="salary">Salary</FormLabel>
          <Input type="salary" id="salary" />
          <FormLabel htmlFor="description">Description</FormLabel>
          <Input type="description" id="description" />
        </FormControl>
    </Box>   
    );
  }
  export default JobCardForm;
 
 
 
 
  //   return (
  //   <Form className="jobcard">
  //     <h3>{job.name}</h3>

  //     <div>
  //         <p>Title</p>
  //         <Field
  //           style={
  //             errors.title && touched.title
  //               ? { border: "1px solid red" }
  //               : null
  //           }
  //           type="text"
  //           name="title"
  //           placeholder="Title"
  //         />
  //         {touched.title && errors.title && (
  //           <p className="error">{errors.title}</p>
  //         )}
  //       </div>

  //   <div>
  //       <p>Role</p>
  //       <Field
  //       style={
  //           errors.role && touched.role
  //           ? { border: "1px solid red" }
  //           : null
  //       }
  //       type="text"
  //       name="role"
  //       placeholder="Role"
  //       />
  //       {touched.role && errors.role && (
  //       <p className="error">{errors.role}</p>
  //       )}
  //   </div>

  //   <div>
  //       <p>Salary</p>
  //       <Field
  //       style={
  //           errors.salary && touched.salary
  //           ? { border: "1px solid red" }
  //           : null
  //       }
  //       type="number"
  //       name="salary"
  //       placeholder="Salary"
  //       />
  //       {touched.salary && errors.salary && (
  //       <p className="error">{errors.salary}</p>
  //       )}
  //   </div>

  //   <div>
  //       <p>Description</p>
  //       <Field
  //       style={
  //           errors.description && touched.description
  //           ? { border: "1px solid red" }
  //           : null
  //       }
  //       type="number"
  //       name="description"
  //       placeholder="Description"
  //       />
  //       {touched.description && errors.description && (
  //       <p className="error">{errors.description}</p>
  //       )}
  //   </div>

  //     <button
  //       className="positive"
  //       color="green"
  //       type="submit"
  //       disabled={isSubmitting}
  //     >
  //       Submit
  //     </button>
  //   </Form>
  // )
// }

//FINISH THE REST OF THIS JOBCARD

// const JobCard = withFormik({
//   mapPropsToValues({ username, password }) {
//     return {
//       username: username || "",
//       password: password || ""
//     }
//   },
//   validationSchema: Yup.object().shape({
//     username: Yup.string()
//       .min(2, "Username must be 2 characters or longer")
//       .required("Username is required"),
//     password: Yup.string()
//       .min(5, "Password must be 5 characters or longer")
//       .required("Password is required")
//   }),

//   handleSubmit(values, formikBag) {
//     // formikBag.props.doSignIn(values);
//     // formikBag.props.history.push("/profile");
//   }
// })(JobCardForm)

// export default JobCard;
