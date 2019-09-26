import React, {useState} from "react";
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import { connect } from "react-redux";
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
import { updateSeekerProfile } from "../../store/actions";

const SeekerProfile = (props) => {
  //props.user is user
 const [seekerProfile, setSeekerProfile] = useState({ 
   name: props.user.name, 
   email: props.user.email, 
   resume: props.user.resume, 
   location: props.user.location,
   password: "" 
 });

  const handleChange = e => {
    setSeekerProfile({[e.target.name]: e.target.value})
  }

  //Save changes for editing
  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth().put(`seekers/seekerID/${props.user.id}`, seekerProfile)
    .then(res => {
      console.log("Put request for seeker profile", res);
      props.updateSeekerProfile(seekerProfile); 
    })
  
  }
  return (
    <Box width="80%" margin="auto">
      <form onSubmit={handleSubmit}>
      <FormControl>  
      <Heading as='h1' margin="2%">Job-Seeker Details</Heading>
        <FormLabel margin="1.5%"  htmlFor="name">Name</FormLabel>
        <Input type="text" name="name" value={seekerProfile.name} onChange={handleChange} />
        
        <FormLabel margin="1.5%" htmlFor="email">Email Address</FormLabel>
        <Input type="email" name="email" value={seekerProfile.email} onChange={handleChange} />

        <FormLabel margin="1.5%" htmlFor="password">Password</FormLabel>
        <Input type="password" placeholder="change password"  name="password" value={seekerProfile.password} onChange={handleChange}/>

        <FormLabel margin="1.5%" htmlFor="location">Location</FormLabel>
        <Input type="textext" name="location" value={seekerProfile.location} onChange={handleChange}/>
        
        <FormLabel margin="1.5%" htmlFor="resume">Resume</FormLabel>
        <Input type="textext" name="resume" value={seekerProfile.resume} onChange={handleChange}/>
        
        
        
        <Button margin="2%" type="submit" variantColor="green">Update</Button>
        </FormControl>
        </form>
    </Box>
  );
}

const mapStateToProps = state => {
  return{
    user: state.user,
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps, {updateSeekerProfile})(SeekerProfile);

