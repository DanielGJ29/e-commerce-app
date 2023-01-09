import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//Actions
import { handleDarkModeAction } from "../../redux/actions/darkmode.action";

//icons
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  // redux;
  const dispatch = useDispatch();
  const { color } = useSelector((store) => store.darkmode);
  const { cart } = useSelector((store) => store.shop);

  //Funciones
  const handleDarkMode = (color) => {
    dispatch(handleDarkModeAction(color));
  };

  return (
    <div className={`w-full h-14 flex justify-around items-center bg-${color}`}>
      <div className="text-white">
        <p>E-COMMERCE</p>
      </div>

      <div className="flex gap-6  text-white">
        <Link to="/">
          <p className="cursor-pointer">Productos</p>
        </Link>

        <p className="cursor-pointer hidden md:block">Iniciar Sesion</p>

        <Link to="/cart">
          <p className="cursor-pointer">
            <span className="hidden">Carrito</span>
            <FontAwesomeIcon
              icon={faCartShopping}
              size="lg"
              className="ml-2"
            />{" "}
            <span className="font-bold">{cart.length}</span>
          </p>
        </Link>
      </div>

      <div className="hidden gap-2 text-white md:flex">
        <p>Tema: </p>
        <select
          className={`bg-${color} text-white hover:bg-white hover:bg-opacity-20`}
          onChange={(e) => handleDarkMode(e.target.value)}
        >
          <option className="bg-primary" value="primary">
            Blue
          </option>
          <option className="bg-gray-900" value="gray-900">
            Dark
          </option>
          <option className="bg-yellow-400" value="yellow-400">
            Yellow
          </option>
        </select>
      </div>
    </div>
  );
};
export default Header;
