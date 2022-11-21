import logo from './logo.svg';
import React, { Component, Suspense } from 'react'
import {
  Routes,
  Route
} from "react-router-dom";

const Home = React.lazy(() => import('./Pages/home'))


function App() {
  return (
    <div className="App">
     <Routes>
        {/* Componente da tela inicial */}
        <Route index element={<Home />} />
       
      </Routes>
    </div>
  );
}

export default App;
