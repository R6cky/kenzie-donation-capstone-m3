<<<<<<< HEAD
import { UserProvider } from "./pages/register/contextRegister/ContextRegister";
import { RoutesMain } from "./routes/routsmain";
=======
import React from 'react';

import { RoutesMain } from './routes/routsmain';
>>>>>>> 35821027d8222009b021a0ec4c2752edba6a12fc

function App() {
  return (
    <div className="App">
      <UserProvider>
        <RoutesMain />
      </UserProvider>
    </div>
  );
}

export default App
