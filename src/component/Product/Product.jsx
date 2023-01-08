import { useContext } from "react";
import { useHistory } from "react-router-dom";

//Context
import StoreContext from "../../Context/StoreContext";

//icons
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Product = ({ id, title, price, description, image, rating }) => {
  const { state, dispatch } = useContext(StoreContext);
  const history = useHistory();

  //Functions
  const handleClickItem = () => {
    history.push(`/SingleProduct/${id}`);
  };

  return (
    <div className="bg-white w-72 h-[420px] rounded-sm mx-auto flex flex-col justify-between hover:shadow-lg">
      <div
        className="w-full h-72 mx-auto border-b-[0.5px] p-2 cursor-pointer"
        onClick={handleClickItem}
      >
        <img
          className="w-full h-full object-contain "
          src={image}
          alt={title}
        />
      </div>

      <div className="p-2">
        <p className="text-justify text-sm">{title}</p>
      </div>

      <div className="flex justify-between items-center p-2">
        <p className="mt-2 font-semibold text-2xl">${price}</p>
        <button
          className={`bg-${state?.color} rounded-md px-4 py-0 h-7`}
          onClick={() =>
            dispatch({
              type: "ADD_TO_CART",
              payload: {
                id,
                title,
                price,
                description,
                image,
                rating,
                quantity: 1,
              },
            })
          }
        >
          + <FontAwesomeIcon icon={faCartShopping} size="lg" />{" "}
        </button>
      </div>
    </div>
  );
};
export default Product;
