import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/HomePage';
import { Container } from 'react-bootstrap';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';


function App() {
  return (
    
    <Router>
      <Header/>
      <div className='app-container'>
        <main className='py-3'>
          <Container>
            <Routes>
              <Route exact path="/" Component={HomeScreen}/>
              <Route path="/product/" Component={ProductPage}/>
            </Routes>

          </Container>
        </main>
        
      </div>
    </Router>
  )
}

export default App;
