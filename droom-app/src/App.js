import React from "react"
import "./App.scss"
import CompanyCard from "../src/components/Home/CompanyCard"
import { ThemeProvider } from "@chakra-ui/core"
import NavBar from "./components/Navbar"
import { Route, Link } from "react-router-dom"
// import StackEx from "./components/SideBar"

import HomePage from "./components/Home/HomePage"
import LoginComponent from "./components/Login"
import Profile from "./components/Login"
import MatchList from "./components/Home/MatchesList"

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <NavBar />
        <MatchList/>
        <CompanyCard />
      </ThemeProvider>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginComponent} />
      <Route exact path="/profile" component={Profile} />
    </div>
  )
}

export default App
