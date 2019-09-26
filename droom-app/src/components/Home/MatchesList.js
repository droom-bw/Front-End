import React, {useEffect, useState} from "react";
import {connect} from "react-redux"
import styled from "styled-components";
import { Stack, Box, Heading, Text, Flex } from "@chakra-ui/core";
import CompanyCard from "./CompanyCard";
import SeekerCard from "./SeekerCard";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

function MatchList(props) {
  //for now
  console.log("hi");
  const mockData = {
    name: "Devin",
    location: "Devin, NY",
    resume: "I'm a React Developer",
    email: "Devin@Gamilawefa.com",
    jobs: [
      {
        job_id: 1,
        company_name: "Apple",
        title: "Backend Developer",
        description: "aweofija",
        salary: 400000000
      }
    ]
  }

  const [matches, setMatches] = useState([{
    name: "Loading",
    email: "Loading",
    resume: "Loading",
    location: "Loading"
  }]);
  const [data, setData] = useState(mockData)


  useEffect(() => {
    if (props.user.type === "seeker") {
    axiosWithAuth()
    .get(`/seekers/seekerID/${props.user.id}/matches`)
    //THIS IS GETTING THE JOBS ON THE SEEKER OBJECT
    .then(res => {
      console.log(res);
      setMatches(res.data);
      setData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  } else {
    axiosWithAuth()
    .get(`/companies/companyID/${props.user.id}/matches`)
    .then(res => {
      setData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }},[])

  return (
   <Box height='100vh'> 
    <div>
    <Heading>Your Matches</Heading>
   { props.user.type ==='seeker' ? (
   
   
   matches.map(match => {
    return <CompanyCard company={data} />
   })
   ):(
     matches.map(match => {
     return <SeekerCard seeker={data}/>
    })
   )}
   </div>
   </Box>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {})(MatchList)