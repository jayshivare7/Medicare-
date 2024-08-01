import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import SymptomChecker from './components/SymptomChecker';
import HealthSchemes from './components/HealthSchemes';
import MedicalRecords from './components/MedicalRecords';
import EducationalBlogs from './components/EducationalBlogs';
import { NavLink } from "react-router-dom";


function App() {
  return (
    <HomePage/>
  );
}

export default App;
