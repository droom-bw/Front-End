import React from "react"
import "./App.scss"
import { connect } from "react-redux"
import { ThemeProvider } from "@chakra-ui/core"
import NavBar from "./components/Navbar"

import { Route } from "react-router-dom"

import HomePage from "./components/Home/HomePage"
import LoginComponent from "./components/Login"
import Profile from "./components/Profile/Profile"
import MatchList from "./components/Home/MatchesList"

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <NavBar />


      </ThemeProvider>

      <Route exact path="/" component={LoginComponent} />
      <Route exact path="/login" component={LoginComponent} />
      <Route exact path="/Matches" component={MatchList}/>
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/profile" component={Profile} />
    </div>
  )
}

export default connect(
  null,
  {}
)(App)
