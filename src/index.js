import React from "react";
import {createRoot} from 'react-dom/client';
import App from './App';
import { StrictMode } from 'react';

// 👇️ IMPORTANT: make sure to specify correct ID
// must be the ID of the div element in your index.html file
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);