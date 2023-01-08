import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

//Component
import CartItem from "../../component/Cart/CartItem";

//useContext
import StoreContext from "../../Context/StoreContext";

//Styles
import "./Cart.Style.css";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const { state } = useContext(StoreContext);
  const [newCart, setNewCart] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const aux = {};
    const newData = [];

    state?.cart.map((item, index) => (aux[item.id] = item));
    for (let i in aux) {
      newData.push(aux[i]);
    }

    setNewCart(newData);
  }, [state?.cart]);

  //Functions
  const handleGoShopping = () => {
    console.log(history);
    history.push("/");
  };

  return (
    <>
      {state.cart.length !== 0 ? (
        <div className="bg-white w-11/12 mx-auto mt-5">
          <div className="flex justify-center items-center bg-transparent">
            <p className="font-semibold text-lg">
              Productos en el carrito{" "}
              <span className="">{state.cart.length}</span>
            </p>
          </div>
          {newCart?.map(
            ({
              id,
              title,
              price,
              image,
              description,
              rating,
              quantity,
              totalPrice,
            }) => (
              <CartItem
                key={id}
                id={id}
                title={title}
                price={price}
                image={image}
                description={description}
                rating={rating}
                quantity={quantity}
                totalPrice={totalPrice}
              />
            )
          )}

          <div className="flex justify-end gap-10 px-3 py-3 mt-3 border-t-2 border-b-2">
            <div>
              <p className="font-semibold text-2xl">Total, a pagar</p>
            </div>
            <div className="font-semibold text-2xl">
              <p>${new Intl.NumberFormat().format(state.total)}</p>
            </div>
          </div>
          <div className="flex justify-end mx-3 py-3">
            <button className="btn btn-blue">Pagar</button>
          </div>
        </div>
      ) : (
        <div className="h-96 flex justify-center items-center">
          <div className="flex flex-col gap-7">
            <p className="text-secondary">Carrito vacío</p>
            <FontAwesomeIcon
              icon={faCartShopping}
              size="4x"
              className="text-primary"
            />
            <button className="rounded-md" onClick={handleGoShopping}>
              Comprar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
