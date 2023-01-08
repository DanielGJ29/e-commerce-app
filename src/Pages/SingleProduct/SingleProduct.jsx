import { useParams, useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

//Component
import Loader from "../../component/Custom/Loader/Loader";

//Hooks
import { useFetchData } from "../../Hooks/useFetchData";

//Context
import DarkModeContext from "../../Context/DarkModeContext";
import StoreContext from "../../Context/StoreContext";

const SingleProduct = () => {
  const { id } = useParams();
  const { loader } = useFetchData(
    `${process.env.REACT_APP_API_STORE}products/${id}`
  );
  const { darkMode } = useContext(DarkModeContext);
  const { state, dispatch } = useContext(StoreContext);
  const [product, setProduct] = useState();
  const history = useHistory();

  useEffect(() => {
    setProduct(state.list?.filter((item) => item.id === +id));
  }, [state.list, id]);

  //Functions
  // const handleSelectQuantity = (e) => {
  //   const value = e.target.value;
  //   setValueQuantity(value);
  // };

  const handleAddCart = () => {
    const { id, title, price, description, image, rating } = product[0];

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
    });

    history.push("/cart");
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        product && (
          <div className="w-3/4 h-auto mt-10 mx-auto bg-white  rounded-md  mb-10 shadow-lg">
            <div className="border-b-2 flex items-center">
              <div className="w-[65%] h-auto flex items-center justify-center">
                <div className="w-1/2 h-auto">
                  <img
                    className="w-full h-full object-contain p-2"
                    src={product[0]?.image}
                    alt={product[0]?.title}
                  />
                </div>
              </div>
              <div className="w-[35%] border-l-2 p-3">
                <p className="text-xl font-semibold">
                  {product[0]?.title}
                  {/* {singleProductData?.description} */}
                </p>
                <p className="mt-2 text-4xl">${product[0]?.price}</p>
                {/* <p className="mt-5 border-t-2 pt-3">
                  Stock disponible{" "}
                  <span className="text-lg font-semibold">56</span>
                </p> */}
                {/* <div className="mt-5">
                  <label>Cantidad: </label>
                  <select
                    name="select"
                    className="font-semibold"
                    onChange={(e) => handleSelectQuantity(e)}
                  >
                    <option value="1">1 articulo</option>
                    <option value="2">2 articulo</option>
                    <option value="3">3 articulo</option>
                  </select>
                </div> */}
                <div className="flex flex-col items-center gap-2 mt-10">
                  <button
                    className={`bg-${darkMode} px-3 w-11/12 h-9 rounded-md text-white`}
                  >
                    Comprar ahora
                  </button>
                  <button
                    className={`bg-${darkMode} px-3 w-11/12 h-9 rounded-md text-white`}
                    onClick={handleAddCart}
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
            <div className="">
              <p className="text-xl font-semibold pt-5 pl-5 ">Descripción</p>
              <p className="text-xl p-5">{product[0]?.description}</p>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default SingleProduct;
