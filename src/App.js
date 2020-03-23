import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList/TourList';
import Tour from './components/Tour/Tour';
function App() {
  return (
    <React.Fragment> 

      <Navbar />
      <Tour />
      <TourList />
      
    </React.Fragment>
  );
}

export default App;
