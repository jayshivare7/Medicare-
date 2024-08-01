import React from 'react';

function SymptomChecker() {
  return (
    <div className="feature-page">
      <h1>Symptom Checker</h1>
      <p>Input your symptoms to receive guidance on potential health issues.</p>
      <form>
        <label>
          Symptoms:
          <input type="text" placeholder="Enter symptoms here" />
        </label>
        <button type="submit">Check Symptoms</button>
      </form>
    </div>
  );
}

export default SymptomChecker;
