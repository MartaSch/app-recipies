import React from 'react'
import ReactDOM from 'react-dom/client'
import './root.css'
import '../src/assets/fonts/fonts.css';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App }   from "./App";

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>
);
