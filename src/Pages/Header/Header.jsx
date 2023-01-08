import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//Actions
import { handleDarkModeAction } from "../../redux/actions/darkmode.action";

//Component
import Form from "../../component/Form/Form";

//context
//mport CartContext from "../../Context/CartContext";
import StoreContext from "../../Context/StoreContext";
import DarkModeContext from "../../Context/DarkModeContext";

//icons
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  // redux;
  const dispatch = useDispatch();
  const { color } = useSelector((store) => store.darkmode);

  //context
  const { darkMode } = useContext(DarkModeContext);
  const { state } = useContext(StoreContext);

  //Funciones
  const handleDarkMode = (color) => {
    dispatch(handleDarkModeAction(color));
  };

  return (
    <div className={`w-full h-14 flex justify-around items-center bg-${color}`}>
      <div className="text-white">
        <Link to="/">
          <p>ECOMMERCE</p>
        </Link>
      </div>
      <div className="w-1/3">
        <Form />
      </div>
      <div className="flex gap-6  text-white">
        <p className="cursor-pointer">Crea tu cuenta</p>
        <p className="cursor-pointer">Iniciar Sesion</p>
        <Link to="/cart">
          <p className="cursor-pointer">
            <FontAwesomeIcon icon={faCartShopping} size="lg" />{" "}
            <span className="font-bold">{state.cart.length}</span>
          </p>
        </Link>
      </div>

      <div>
        <select onChange={(e) => handleDarkMode(e.target.value)}>
          <option value="primary">blue</option>
          <option value="black">Dark</option>
          <option value="yellow-400">Yellow</option>
        </select>
      </div>
    </div>
  );
};
export default Header;
