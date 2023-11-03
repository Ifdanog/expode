import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { useEffect } from "react";

useEffect(() => {
  const cursor = document.querySelector('.custom-cursor');

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  });
}, []);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="custom-cursor"></div>
    <App />
  </React.StrictMode>,
)
