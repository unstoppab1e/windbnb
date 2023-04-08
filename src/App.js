import data from './stays.json'
import './App.css';
import { Card } from './components/Card';
import { useEffect, useState } from 'react';



function App() {
  return (
    <div className="wrapper">
      <Card />
    </div>
  );
}

export default App;
