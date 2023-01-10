import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './globalstyle';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles/>
      <App /> 
      <ToastContainer />
      </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
