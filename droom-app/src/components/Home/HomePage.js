import React from "react"
import CompanyCard from "./CompanyCard"
import { ThemeProvider } from "@chakra-ui/core"
import MatchButton from "./MatchButton"
import DenyButton from "./DenyButton"

import { companies } from "../../data"

export default function HomePage() {
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
