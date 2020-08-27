import React, { useState } from 'react';
import './App.css';
import {} from "@material-ui/core";
// https://api.themoviedb.org/3/movie/550?api_key=e27360cf2395882b7bf80144296bb76d
// react-text-truncate  - for text wrapp

import Header from "./Header"
import Nav from './Nav';
import Results from './Results';

function App() {
  const [selectedOptions,setSelectedOptions] = useState('');
  return (
    <div className="App">

      <Header />

      {/* Nav */}
      <Nav setSelectedOptions={setSelectedOptions} />

      {/* Result */}
      <Results selectedOptions={selectedOptions} />
    </div>
  );
}

export default App;
