import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import traveldata from './traveldata';

function App() {

  const travelDetails = traveldata.map(travel => {
    return (
      <Card 
          key = {travel.ID}
          travelCard = {travel}
      />
    )
  })


  return (
    <div className="App">
      <Navbar />

      <section className='card-list'>
        {travelDetails}
      </section>
    </div>
  );
}

export default App;
