import React from 'react';
import './App.css';
import CompanyCard from '../src/components/Home/CompanyCard';
import { ThemeProvider } from "@chakra-ui/core";

function App() {
  return (
    <div className="App">

    <ThemeProvider> <CompanyCard /> </ThemeProvider>
    </div>
  );
}

export default App;
