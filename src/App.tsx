import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import { RoutesConfig } from './constants/routes.constant';
import ShowDetails from './components/show/SHowDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={RoutesConfig.dashboard} element={<Dashboard/>}>
        </Route>
        <Route path={RoutesConfig.showDetails} element={<ShowDetails/>}>
        </Route>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
