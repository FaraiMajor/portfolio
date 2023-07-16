import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { useLocation } from "react-router-dom"

import Main from './component/main';

import './App.css';


function App() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.key}>
      <Route path='/' component={App}>
        <Route index element={<Main />} />
        <Route path="main" element={<Main />} />
      </Route>
    </Routes>
  );
}
export default App;
