import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Component
import Loader from "../../component/Custom/Loader/Loader";

//Hooks
import { useFetchData } from "../../Hooks/useFetchData";

//Actions
import { handleAddProductsAction } from "../../redux/actions/shop.action";

const SingleProduct = () => {
  const { id } = useParams();
  const { loader } = useFetchData(
    `${process.env.REACT_APP_API_STORE}products/${id}`
  );

  const [product, setProduct] = useState();
  const history = useHistory();
  const dispatch = useDispatch();
  const { list } = useSelector((store) => store.shop);
  const { color } = useSelector((store) => store.darkmode);

  useEffect(() => {
    setProduct(list?.filter((item) => item.id === +id));
  }, [list, id]);

  //Functions
  const handleAddCart = () => {
    const { id, title, price, description, image, rating } = product[0];

    // dispatch({
    //   type: "ADD_TO_CART",
    //   payload: {
    //     id,
    //     title,
    //     price,
    //     description,
    //     image,
    //     rating,
    //     quantity: 1,
    //   },
    // });

    dispatch(
      handleAddProductsAction({
        id,
        title,
        price,
        description,
        image,
        rating,
        quantity: 1,
      })
    );

    history.push("/cart");
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        product && (
          <div className="w-3/4 h-auto mt-10 mx-auto bg-white  rounded-md  mb-10 shadow-lg">
            <div className="border-b-2 flex flex-col-reverse md:flex-row items-center">
              <div className="w-full md:w-[65%] h-auto flex items-center justify-center md:border-r-2">
                <div className="w-3/4 h-auto">
                  <img
                    className="w-full h-full object-contain p-2"
                    src={product[0]?.image}
                    alt={product[0]?.title}
                  />
                  <p className="md:hidden  mt-2 text-center text-4xl">
                    ${product[0]?.price}
                  </p>
                  <div className="md:hidden flex flex-col gap-2 mt-4 mb-4 items-center">
                    <button
                      className={`bg-${color} px-3 w-11/12 h-9 rounded-md text-white`}
                    >
                      Comprar ahora
                    </button>
                    <button
                      className={`bg-${color} px-3 w-11/12 h-9 rounded-md text-white`}
                      onClick={handleAddCart}
                    >
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-full md:w-[35%]  p-3">
                <p className="text-xl text-center font-semibold">
                  {product[0]?.title}
                </p>
                <p className="hidden md:block mt-2 text-4xl">
                  ${product[0]?.price}
                </p>

                <div className="hidden md:flex flex-col items-center gap-2 mt-10">
                  <button
                    className={`bg-${color} px-3 w-11/12 h-9 rounded-md text-white`}
                  >
                    Comprar ahora
                  </button>
                  <button
                    className={`bg-${color} px-3 w-11/12 h-9 rounded-md text-white`}
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
