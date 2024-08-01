import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import medicare from './medicare.png'
import doc from './doc.png'
import kif from './kif.png'
function HomePage() {
  return (
    <div className="home-page">
    <div className='nav-bar'>
    <img src={medicare} alt="BigCo Inc. logo"/>
       <div className='fields'>
       <Router>
      
        <nav style={{width:'99vw'}}>
          <Link to="/symptom-checker">Symptom Checker</Link>
          <Link to="/health-schemes">Health Schemes</Link>
          <Link to="/medical-records">Medical Records</Link>
          <Link to="/educational-blogs">Educational Blogs</Link>
        </nav>
     
        </Router>

    </div>

    </div>
    <div style={{height:'30px'}}>

    </div>
    <div>
        <img src={doc} alt="Doctor" style={{ height: '80vh', width: '99vw' }} />
      </div>
      <div style={{height:'100px'}}>

    </div>
    <div>
        <img src={kif} alt="Doctor" style={{ height: '80vh', width: '99vw' }} />
      </div>
       

    </div>
  );
}

export default HomePage;
