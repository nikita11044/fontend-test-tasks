import React from 'react';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { CharacterInfo, Home } from './pages';

function App() {
  return (
    <div className="App">
      <Header />
      <Container style={{ marginTop: 20 }}>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/characters/:id" element={<CharacterInfo />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
