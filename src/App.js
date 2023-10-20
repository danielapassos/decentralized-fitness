import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage'
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={LandingPage} />
        <Route path="/sign-in" component={SignInPage} />
        <Route path="/home" component={HomePage} />
      </Routes>
    </Router>
  );
}