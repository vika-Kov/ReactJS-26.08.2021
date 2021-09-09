import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes } from './components/Routes'; 

// const initPost = ["Hello, "]

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Routes />
      </header>
    </div>
  );
}

export default App;
