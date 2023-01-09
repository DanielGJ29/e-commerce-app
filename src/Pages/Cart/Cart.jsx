import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

//Component
import CartItem from "../../component/Cart/CartItem";

//Styles
import "./Cart.Style.css";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const [newCart, setNewCart] = useState([]);
  const history = useHistory();
  const { cart, total } = useSelector((store) => store.shop);
  const { color } = useSelector((store) => store.darkmode);

  useEffect(() => {
    const aux = {};
    const newData = [];

    cart?.map((item, index) => (aux[item.id] = item));
    for (let i in aux) {
      newData.push(aux[i]);
    }

    setNewCart(newData);
  }, [cart]);

  //Functions
  const handleGoShopping = () => {
    history.push("/");
  };

  return (
    <>
      {cart?.length !== 0 ? (
        <div className="bg-white w-11/12 md:w-9/12  mx-auto mt-5">
          <div className="flex justify-center items-center bg-transparent">
            <p className="font-semibold text-lg">
              Productos en el carrito <span className="">{cart?.length}</span>
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
              <p className="font-semibold text-xl md:text-2xl">
                Total, a pagar
              </p>
            </div>
            <div className="font-semibold text-xl md:text-2xl">
              <p>${new Intl.NumberFormat().format(total)}</p>
            </div>
          </div>
          <div className="flex justify-end mx-3 py-3">
            <button className={`btn bg-${color}`}>Pagar</button>
          </div>
        </div>
      ) : (
        <div className="h-96 flex justify-center items-center">
          <div className="flex flex-col gap-7">
            <p className="text-secondary">Carrito vacío</p>
            <FontAwesomeIcon
              icon={faCartShopping}
              size="4x"
              className={`text-${color}`}
            />
            <button
              className={`rounded-md bg-${color} p-3`}
              onClick={handleGoShopping}
            >
              Ir a Productos
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
