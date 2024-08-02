import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'
import SymptomChecker from './components/SymptomChecker'
import HealthSchemes from './components/HealthSchemes';
import MedicalRecords from './components/MedicalRecords';
import EducationalBlogs from './components/EducationalBlogs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/symptom-checker" element={<SymptomChecker />} />
        <Route path="/health-schemes" element={<HealthSchemes />} />
        <Route path="/medical-records" element={<MedicalRecords />} />
        <Route path="/educational-blogs" element={<EducationalBlogs />} />
      </Routes>
    </Router>
  );
}

export default App;
