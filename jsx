import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="logo">Unfluke</div>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="cta-button">Get Started</button>
        </nav>
      </header>
      <main className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Unfluke</h1>
          <p>Your ultimate platform for algorithmic solutions.</p>
          <button className="cta-button">Learn More</button>
        </div>
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Unfluke. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
