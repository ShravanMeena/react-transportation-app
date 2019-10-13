import React from 'react';
import './App.css';
import Title from './components/Title';
import Options from './components/Options';
import VehicleInfo from './components/VehicleInfo';

function App (props) {
  return (
    <div>
      <Title title='Welcome to React Transportation' subtitle='The best place to buy vehicles online' />
      <Options option='Choose Options' />
      <VehicleInfo />
    </div>
  );
};

export default App;
