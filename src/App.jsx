import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Components/Auth/AuthContext';
import AppContent from './AppContent';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}