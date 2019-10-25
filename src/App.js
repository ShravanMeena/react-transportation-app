import React from 'react';
import './App.css';
import Title from './components/Title/Title';
import Options from './components/Options/Options';

function App (props) {
  return (
    <div className="m-4">
      <Title 
        title='Welcome to React Transportation' 
        subtitle='The best place to buy vehicles online' />
      <Options option='Filters' />
     
    </div>
  );
};

export default App;
