import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Resources from './pages/Resources' 
import Guide from './pages/Guide'
import { useState } from 'react'
import './App.css'

function App() {
  
  return (
    <Router> 
      <div className="App">
        <div className="header">
          <Link to="/"><button className="headerBtn"> Home </button></Link>
          <Link to="/resources"><button className="headerBtn"> Resources </button></Link>
          <Link to="/guide"><button className="headerBtn"> Guide </button></Link>
        </div>
        <h1 className="title">EzRecycle</h1>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/resources" element={<Resources/>} />
          <Route path="/guide" element={<Guide/>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
