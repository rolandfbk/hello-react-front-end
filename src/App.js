import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';
import './App.css';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<div><Greeting /></div>} />
    </Routes>
  </>
);

export default App;
