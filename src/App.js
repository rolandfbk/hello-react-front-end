import React from 'react';
import Greeting from './components/Greeting';
import { Route, Routes } from "react-router-dom"
import './App.css';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<div><Greeting /></div>} />
    </Routes>
  </>
);

export default App;
