import React from "react";
import styled from "styled-components";
import { Stack, Box, Heading, Text } from "@chakra-ui/core";
import StackEx from "../Sidebar";

const companies = [
  {
    id: 0,
    name: "Lambda School",
    email: "lambda@email.com",
    description:
      "Lambda School is an immersive bootcamp offering a variety of courses and such",
    job: {
      company: "Lambda School",
      title: "Developer",
      description:
        "Lambda School needs a fullstack developer to perform alchemy",
      salary: 1000000
    },
    matches: []
  },
  {
    id: 1,
    name: "Apple",
    email: "apple@email.com",
    description:
      "Apple is an immersive bootcamp offering a variety of courses and such",
    job: {
      company: "Apple",
      title: "Developer",
      description: "Apple needs a fullstack developer to perform alchemy",
      salary: 1000000
    },
    matches: []
  },
  {
    id: 2,
    name: "Yahoo",
    email: "yahoo@email.com",
    description:
      "Yahoo is an immersive bootcamp offering a variety of courses and such",
    job: {
      company: "Yahoo",
      title: "Developer",
      description: "Yahoo needs a fullstack developer to perform alchemy",
      salary: 1000000
    },
    matches: []
  }
];

const seekers = [
  {
    id: 0,
    name: "Matt Gill",
    email: "mattgill@email.com",
    location: "Baltimore, MD",
    resume: "",
    matches: []
  },
  {
    id: 0,
    name: "Devin Bielejec",
    email: "devinb@email.com",
    location: "Syracuse, NY",
    resume: "",
    matches: []
  },
  {
    id: 0,
    name: "Ian Schwartz",
    email: "ians@email.com",
    location: "Pasadena, CA",
    resume: "",
    matches: []
  },
  {
    id: 0,
    name: "Idir Abderahim",
    email: "idira@email.com",
    location: "Paris, France",
    resume: "",
    matches: []
  }
];

export default function MatchList() {
  const Cont = styled.div``;

  return (
    <Cont>
      {companies.map(people => {
        return <StackEx name={people.name} 
                        description={people.job.description}
                        job= {people.job.salary}
                        title={people.job.title}
                        salary={people.job.salary}

                        
        />;
      })}
    </Cont>
  );
}
