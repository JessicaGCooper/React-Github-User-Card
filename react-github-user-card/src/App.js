import React from 'react';
import './App.css';
import GitHubFollowers from './components/GitHubFollowers';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title" >GitHub User</h1>
      </header>
      <GitHubFollowers />
    </div>
  );
}

export default App;
