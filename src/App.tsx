import { UserProvider } from "./pages/register/contextRegister/ContextRegister";
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

export default App
