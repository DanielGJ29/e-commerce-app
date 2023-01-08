import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useContext } from "react";

//Layout
import LayoutMain from "../Layout/LayoutMain";

//Component
import Home from "../Pages/Home/Home";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import Cart from "../Pages/Cart/Cart";
import Login from "../component/Login/Login";

//Context
import LoginContext from "../Context/LoginContext";

const MainRouter = () => {
  const { state } = useContext(LoginContext);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>

        <LayoutMain>
          <Route
            path="/"
            exact
            render={() => (state.user ? <Home /> : <Redirect to="/login" />)}
          />

          <Route path="/SingleProduct/:id" exact>
            <SingleProduct />
          </Route>

          <Route path="/cart" exact>
            <Cart />
          </Route>
        </LayoutMain>
      </Switch>
    </BrowserRouter>
  );
};
export default MainRouter;
