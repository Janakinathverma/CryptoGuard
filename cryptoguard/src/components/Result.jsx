import React from 'react';

function Result({ result }) {
  return (
    <div className="result">
      <h3>Analysis Result</h3>
      <p><strong>Status:</strong> {result.status}</p>
      <p><strong>Confidence Score:</strong> {result.confidenceScore}%</p>
      <p><strong>Advice:</strong> {result.advice}</p>
    </div>
  );
}

export default Result;
