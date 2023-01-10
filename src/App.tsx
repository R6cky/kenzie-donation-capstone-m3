import React from 'react';
import ModalEditProvider from './modalProfile/contexts';
import { RoutesMain } from './routes/routsmain';

function App() {
  return (
    <div className="App">
      <ModalEditProvider>
        <RoutesMain />
      </ModalEditProvider>
    </div>
  );
}

export default App;
