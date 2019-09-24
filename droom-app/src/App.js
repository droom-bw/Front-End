import React from "react"
import "./App.scss"
import CompanyCard from "../src/components/Home/CompanyCard"
import { ThemeProvider } from "@chakra-ui/core"
import NavBar from "./components/Navbar"
import { Route, Link } from "react-router-dom"
import SideBar from "./components/Sidebar"

import HomePage from "./components/Home/HomePage"
import LoginComponent from "./components/Login"
import Profile from "./components/Login"

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <NavBar />
        <SideBar />
        <CompanyCard />
      </ThemeProvider>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginComponent} />
      <Route exact path="/profile" component={Profile} />
    </div>
  )
}

export default App
