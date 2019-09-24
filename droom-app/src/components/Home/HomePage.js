import React from "react"
import CompanyCard from "./CompanyCard"
import { ThemeProvider } from "@chakra-ui/core"
import MatchButton from "./MatchButton"
import DenyButton from "./DenyButton"

import { companies } from "../../data"

export default function HomePage() {
  const fakeState = {isSeeker: false, isCompany: false};
  
  const companies = [
    {
      id: 0,
      type: "company",
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
      type: "company",
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
    }
  ];
  
  const seekers = [
    {
      id: 0,
      type: "user",
      name: "Matt Gill",
      email: "mattgill@email.com",
      location: "Baltimore, MD",
      resume: "",
      matches: []
    },
    {
      id: 0,
      type: "user",
      name: "Devin Bielejec",
      email: "devinb@email.com",
      location: "Syracuse, NY",
      resume: "",
      matches: []
    },
    {
      id: 0,
      type: "user",
      name: "Ian Schwartz",
      email: "ians@email.com",
      location: "Pasadena, CA",
      resume: "",
      matches: []
    },
    {
      id: 0,
      type: "user",
      name: "Idir Abderahim",
      email: "idira@email.com",
      location: "Paris, France",
      resume: "",
      matches: []
    }
  ];

  //Based on state, render map either seekers or companies etc
  return (
    <div className="HomePage">
      <ThemeProvider>
        <CompanyCard data={companies[0]} />
      </ThemeProvider>
      <MatchButton />
      <DenyButton />
    </div>
  )
}


/* 

import React, { useEffect, useState } from "react"
import axios from "axios"
import SeekerCard from "../Home/SeekerCard"

export default function SeekerProfile() {
  const [seeker, setSeeker] = useState([])

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        const seekerData = res.data.results
        console.log("this is the data", seekerData)
        setSeeker(seekerData)
      })
      .catch(err => {
        console.log("This is an error", err)
      })
  }, [])

  return (
    <div>
      {seeker.map(item => {
        return <SeekerCard key={item.name} item={item} />
      })}
    </div>
  )
}


*/