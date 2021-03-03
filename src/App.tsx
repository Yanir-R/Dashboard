import './App.css';
import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { Dashboard } from './components/dashboard/dashboard';

export const App: React.FC = () => {

  return (
    <Router>
      <Dashboard />
    </Router>
  );
}


