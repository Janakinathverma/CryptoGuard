import React, { useState } from 'react';
import detectScam from '../services/scamDetector';

function AnalyzeForm({ setResult }) {
  const [walletAddress, setWalletAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await detectScam(walletAddress);
    setResult(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="walletAddress">Enter Wallet Address:</label>
      <input
        type="text"
        id="walletAddress"
        value={walletAddress}
        onChange={(e) => setWalletAddress(e.target.value)}
        required
      />
      <button type="submit">Analyze</button>
    </form>
  );
}

export default AnalyzeForm;
