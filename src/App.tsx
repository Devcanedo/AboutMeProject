import React from 'react';
import './App.css'
import AppRouter from './routes';
import { GlobalStyles } from './GlogalStyles';

function App() {
  return (
    <div>
      <AppRouter />\
      <GlobalStyles />
    </div>
  )
}

export default App;