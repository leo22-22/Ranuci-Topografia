import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // You might want a global index.css or keep it minimal
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);