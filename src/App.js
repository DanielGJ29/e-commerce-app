import MainRouter from "./routers/MainRouter";

//Context
import { CartProvider } from "./Context/CartContext";
import { StoreProvider } from "./Context/StoreContext";
import { LoginProvider } from "./Context/LoginContext";
import { PostProvider } from "./Context/PostContext";
import { DarkModeProvider } from "./Context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <StoreProvider>
        <LoginProvider>
          <PostProvider>
            <MainRouter />
          </PostProvider>
        </LoginProvider>
      </StoreProvider>
    </DarkModeProvider>
  );
}

export default App;
