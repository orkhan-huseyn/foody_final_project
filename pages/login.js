import React from 'react';
import './App.css';
import adminImage from './admin-image.png'; // Replace with your image path

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">Foody.</div>
        <div className="view-mode">Admin Login | <span id="view-mode-text">Desktop</span></div>
      </header>
      <div className="login-container">
        <div className="login-box">
          <h2>Welcome Admin</h2>
          <form>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
            </div>
            <button type="submit" className="sign-in-button">Sign in</button>
          </form>
        </div>
        <div className="image-container">
          <img src={adminImage} alt="Admin Illustration" />
        </div>
      </div>
    </div>
  );
}

export default App;
