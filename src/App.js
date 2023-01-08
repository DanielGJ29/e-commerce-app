import MainRouter from "./routers/MainRouter";

//Context

import { StoreProvider } from "./Context/StoreContext";
import { LoginProvider } from "./Context/LoginContext";

function App() {
  return (
    <StoreProvider>
      <LoginProvider>
        <MainRouter />
      </LoginProvider>
    </StoreProvider>
  );
}

export default App;
