import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main, Login, Signup } from '../pages';

function MainRouter() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </Router>
  );
}

export default MainRouter;