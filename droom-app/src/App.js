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
import DisplayJobs from "./components/Jobs/DisplayJobs";
import SeekerProfile from "./components/Profile/SeekerProfile";
import CompanyProfile from "./components/Profile/CompanyProfile";
import RegisterForm from "./components/Register";


function App() {
  return (
    <ThemeProvider>
    <div className="App">
          <NavBar />
      <Route exact path="/seekerProfile" component={SeekerProfile} />
      <Route exact path="/companyProfile" component={CompanyProfile} />    
      <Route exact path="/" component={LoginComponent} />
      <Route exact path="/login" component={LoginComponent} />
      <Route exact path="/matches" component={MatchList} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/jobs" component={DisplayJobs} />
      <Route exact path="register" component={RegisterForm} />
    </div>
    </ThemeProvider>

  )
}

export default connect(
  null,
  {}
)(App)
