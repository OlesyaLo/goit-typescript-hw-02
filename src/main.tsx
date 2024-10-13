import React from "react";
import ReactDOM from "react-dom/client";
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import App from '../src/components/App/App'
import './index.css'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);