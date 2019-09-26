import React from "react"
import "./App.scss"
import { connect } from "react-redux"
import { ThemeProvider } from "@chakra-ui/core"
import NavBar from "./components/Navbar"
import { Route, Redirect } from "react-router-dom"
import HomePage from "./components/Home/HomePage"
import LoginComponent from "./components/Login"
import Profile from "./components/Profile/Profile"
import MatchList from "./components/Home/MatchesList"
import DisplayJobs from "./components/Jobs/DisplayJobs"
import SeekerProfile from "./components/Profile/SeekerProfile"
import CompanyProfile from "./components/Profile/CompanyProfile"
import RegisterSeeker from "./components/RegisterSeeker"
import RegisterCompany from "./components/RegisterCompany"

//make private routes!
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
)

//LOGOUT???? remove token etc

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <NavBar />
        <Route exact path="/seekerProfile" component={SeekerProfile} />
        <Route exact path="/companyProfile" component={CompanyProfile} />
        <Route exact path="/profile" component={Profile} />


        <Route exact path="/matches" component={MatchList} />       
        <Route exact path="/jobs" component={DisplayJobs} />

        {/* Partially work */}
        <Route exact path="/home" component={HomePage} />

        {/* Tested and work */}
        <Route exact path="/" component={LoginComponent} />
        <Route exact path="/login" component={LoginComponent} />
        <Route exact path="/registerSeeker" component={RegisterSeeker} />
        <Route exact path="/registerCompany" component={RegisterCompany} />
      </div>
    </ThemeProvider>
  )
}

export default connect(
  null,
  {}
)(App)
