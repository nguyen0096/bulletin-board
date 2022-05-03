import React from 'react';
import './App.css';

import BulletinBoard from './pages/BulletinBoard';
import NavBar from './containers/Navbar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <BulletinBoard />
    </div>
  );
}

export default App;
