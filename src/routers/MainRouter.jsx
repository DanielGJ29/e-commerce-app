import { BrowserRouter, Switch, Route } from "react-router-dom";

//Layout
import LayoutMain from "../Layout/LayoutMain";

//Component
import Home from "../Pages/Home/Home";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import Cart from "../Pages/Cart/Cart";
import Login from "../component/Login/Login";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>

        <LayoutMain>
          <Route path="/" exact>
            <Home />
          </Route>

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
