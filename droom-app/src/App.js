import React from 'react';
import './App.css';
import CompanyCard from '../src/components/Home/CompanyCard';
import { ThemeProvider } from "@chakra-ui/core";
import NavBar from "./components/Navbar";
import {  Route, Link } from "react-router-dom";
import SideBar from "./components/Sidebar";


function App() {
  return (
    <div className="App">

    <ThemeProvider><NavBar/>
    <SideBar/>
     <CompanyCard /> 
    </ThemeProvider>
    {/* <Route exact path="/" component={HomePage} /> */}
    {/* <Route exact path="/Login" component={LoginForm} /> */}
    {/* <Route exact path="/Signin" component={SignIn} /> */}
    {/* <Route exact path="/Profile" component={ProfileForm} /> */}
    {/* <Route exact path="/Signout" component={Signout} /> */}


    </div>
          

  );
}

export default App;
