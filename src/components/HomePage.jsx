import React from 'react';
import { NavLink } from 'react-router-dom';
import medicare from './medicare.png';
import doc from './doc.png';
import kif from './kif.png';

function HomePage() {
  return (
    <div className="home-page">
      <div className='nav-bar'>
        <img src={medicare} alt="BigCo Inc. logo" />
        <div className='fields'>
          <nav style={{ width: '99vw' }}>
            <NavLink to="/symptom-checker" activeClassName="active-link">Symptom Checker</NavLink>
            <NavLink to="/health-schemes" activeClassName="active-link">Health Schemes</NavLink>
            <NavLink to="/medical-records" activeClassName="active-link">Medical Records</NavLink>
            <NavLink to="/educational-blogs" activeClassName="active-link">Educational Blogs</NavLink>
          </nav>
        </div>
      </div>
      <div style={{ height: '30px' }}></div>
      <div>
        <img src={doc} alt="Doctor" style={{ height: '80vh', width: '99vw' }} />
      </div>
      <div style={{ height: '100px' }}></div>
      <div>
        <img src={kif} alt="Doctor" style={{ height: '80vh', width: '99vw' }} />
      </div>
    </div>
  );
}

export default HomePage;
