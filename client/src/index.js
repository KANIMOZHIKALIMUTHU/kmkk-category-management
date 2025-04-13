import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { AuthProvider } from './contexts/AuthContext'; // Import AuthProvider
import App from './App'; // Import App component

const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrap BrowserRouter around AuthProvider and App
root.render(
  <BrowserRouter>
    <AuthProvider> 
      <App />
    </AuthProvider>
  </BrowserRouter>
);
