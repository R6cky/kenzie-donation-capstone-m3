
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './globalstyle';
import { BrowserRouter } from 'react-router-dom';
import { DashboardListProvider } from './components/dashboardUl/contextList';
import { CreatePostProvider } from './modais/createPost/contextCreatePost';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
