import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ContextProvider } from './Context';
import Home from './Home';
import Room from './Room';
import Start from './components/Start';

const App = () => {

  return (
   <>
   <ContextProvider>
     <Router>
    <Routes>
    <Route path="/" element={<Start />} />
    <Route path="/WaitingRoom" element={<Home />} />
    <Route path="/room/:roomID" element={<Room />} />
    </Routes>
  </Router>
  </ContextProvider>,
   </>
  );
};

export default App;
