import { useContext } from "react";
import { Link } from "react-router-dom";

//Component
import Form from "../../component/Form/Form";

//context
import StoreContext from "../../Context/StoreContext";

//icons
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  //context
  const { state, dispatch } = useContext(StoreContext);

  //Funciones
  const handleDarkMode = (color) => {
    dispatch({ type: "DARKMODE", payload: color });
  };

  return (
    <div
      className={`w-full h-14 flex justify-around items-center bg-${state?.color}`}
    >
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

      <div className="w-10">
        <select
          className="text-white border-none rounded-lg w-full"
          onChange={(e) => handleDarkMode(e.target.value)}
        >
          <option className="bg-primary" value="primary"></option>
          <option className="bg-black" value="black"></option>
          <option className="bg-yellow-400" value="yellow-400"></option>
        </select>
      </div>
    </div>
  );
};
export default Header;
