import React from 'react';
import { ToastContainer } from 'react-toastify';
import ModalEditProvider from './modalProfile/contexts';
import { UserProvider } from './pages/register/contextRegister/ContextRegister';
import { RoutesMain } from './routes/routsmain';


function App() {
  return (
    <div className="App">

      <UserProvider>
        <ModalEditProvider>
          <RoutesMain />
        </ModalEditProvider>
      </UserProvider>
    </div>
  );
}

export default App
