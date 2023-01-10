import React from "react";
import { UserProvider } from "./contexts/UserContext";
import { RoutesMain } from "./routes/routsmain";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <RoutesMain />
      </UserProvider>
    </div>
  );
}

export default App;
