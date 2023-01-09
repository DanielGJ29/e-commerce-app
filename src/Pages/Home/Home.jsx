import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Actions
import { handleShowProductsAction } from "../../redux/actions/shop.action";

//Component
import Loader from "../../component/Custom/Loader/Loader";
import Product from "../../component/Product/Product";

//Hooks
import { useFetchData } from "../../Hooks/useFetchData";

const Home = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((store) => store.shop);

  const { loader, fetchResult } = useFetchData(
    `${process.env.REACT_APP_API_STORE}products?limit=${12}`
  );

  useEffect(() => {
    dispatch(handleShowProductsAction(fetchResult));
  }, [dispatch, fetchResult]);

  return (
    <div className="w-4/5 mx-auto mt-10 flex flex-wrap gap-y-9 gap-x-5 pb-5">
      {loader ? (
        <Loader />
      ) : (
        list?.map(({ id, title, price, description, image, rating }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            image={image}
            rating={rating}
          />
        ))
      )}
    </div>
  );
};

export default Home;
