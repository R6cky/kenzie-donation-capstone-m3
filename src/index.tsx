<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { GlobalStyles } from './globalstyle'
import { BrowserRouter } from 'react-router-dom'
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './globalstyle';
import { BrowserRouter } from 'react-router-dom';
import { DashboardListProvider } from './components/dashboardUl/contextList';
import { CreatePostProvider } from './modais/createPost/contextCreatePost';

>>>>>>> 8f6cef14d6010831f7c0d6390f0906f7a0b8a14b

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
<<<<<<< HEAD
   <React.StrictMode>
      <BrowserRouter>
         <GlobalStyles />
         <App />
      </BrowserRouter>
   </React.StrictMode>
)
=======
  <React.StrictMode>
    <BrowserRouter>
    <DashboardListProvider>
      <CreatePostProvider>
          <GlobalStyles/>
          <App /> 
      </CreatePostProvider>
    </DashboardListProvider>
          </BrowserRouter>
  </React.StrictMode>
);
>>>>>>> 8f6cef14d6010831f7c0d6390f0906f7a0b8a14b

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
