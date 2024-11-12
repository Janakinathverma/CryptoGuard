// App.js

import React, { useState } from 'react';
import AnalyzeForm from './components/AnalyzeForm';
import Result from './components/Result';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="App">
      <Navbar />
      <header>
        <h1>CryptoGuard</h1>
        <p>Protect your assets with AI-driven fraud detection.</p>
      </header>
      <AnalyzeForm setResult={setResult} />
      {result && <Result result={result} />}
      <Footer />
    </div>
  );
}

export default App;
