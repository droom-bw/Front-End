import React from "react"
import { connect } from "react-redux"
import CompanyProfile from "./CompanyProfile"
import SeekerProfile from "./SeekerProfile"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  Heading, 
  Button
} from "@chakra-ui/core";
const Profile = props => {
  return (
    <Box height="100vh"> 
    <div className="Profile">
      {props.user.type === "seeker" ? 
      
      <SeekerProfile/> : 
      
      <CompanyProfile/>}
    </div>
    </Box>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  {}
)(Profile)
