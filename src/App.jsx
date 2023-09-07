import React from 'react';
import './App.css';
import AppRouter from './modules/routes';


function App() {
  return (
  <div className="App">
    <header>
            <h1>User Management App</h1>
          </header>
    <main>
      <AppRouter />
    </main>
    
  </div> 
  );
};

export default App;
