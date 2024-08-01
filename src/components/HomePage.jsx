import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import medicare from './medicare.png'

function HomePage() {
  return (
    <div className="home-page">
    <div className='nav-bar'>
    <img src={medicare} alt="BigCo Inc. logo"/>
       <div className='fields'>
       <Router>
      
        <nav>
          <Link to="/symptom-checker">Symptom Checker</Link>
          <Link to="/health-schemes">Health Schemes</Link>
          <Link to="/medical-records">Medical Records</Link>
          <Link to="/educational-blogs">Educational Blogs</Link>
        </nav>
     
        </Router>

    </div>

    </div>

    </div>
  );
}

export default HomePage;
