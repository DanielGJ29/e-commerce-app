import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Actions
import {
  handleAddQuantityProductsAction,
  handleDeleteProductsAction,
} from "../../redux/actions/shop.action";

const CartItem = ({
  id,
  title,
  price,
  image,
  description,
  rating,
  quantity,
  totalPrice,
}) => {
  const history = useHistory();
  const [option, setOption] = useState();
  const dispatch = useDispatch();
  const { color } = useSelector((store) => store.darkmode);

  useEffect(() => {
    const array = [];
    for (let i = 1; i <= rating?.count; i++) {
      array.push(i);
    }
    setOption(array);
  }, [rating]);

  //Functions
  const handleClickItem = () => {
    history.push(`/SingleProduct/${id}`);
  };

  const handleSelectQuantity = (e) => {
    let value = parseInt(e.target.value);
    dispatch(
      handleAddQuantityProductsAction({
        id,
        title,
        price,
        image,
        description,
        rating,
        quantity: value,
      })
    );
    // dispatch({
    //   type: "ADD_QUANTITY",
    //   payload: {
    //     id,
    //     title,
    //     price,
    //     image,
    //     description,
    //     rating,
    //     quantity: value,
    //   },
    // });
  };

  const handleDeleteItem = () => {
    // dispatch({
    //   type: "DELETE_FROM_CART",
    //   payload: id,
    // });
    dispatch(handleDeleteProductsAction(id));
  };

  return (
    <div className="flex justify-between px-0 md:px-3 py-3 mt-3 border-t-2 ">
      <div className="flex w-4/5 gap-x-2 md:gap-x-4 gap-y-4">
        <div>
          <div className="w-14">
            <img src={image} alt={title} />
          </div>
        </div>
        <div className="flex flex-col w-2/5  md:w-full">
          <div
            className="w-3/4 cursor-pointer"
            onClick={(e) => handleClickItem(e)}
          >
            <p className="font-semibold text-sm md:text-xl">{title}</p>
          </div>
          <p
            className={`cursor-pointer hover:text-${color} text-sm md:text-base`}
            onClick={handleDeleteItem}
          >
            Eliminar
          </p>
        </div>

        <div className="w-[30%]">
          <select
            name="select"
            className="font-semibold rounded-lg px-2 w-[85px] md:w-28  text-sm md:text-sm"
            value={quantity}
            onChange={(e) => handleSelectQuantity(e, id)}
          >
            {option?.map((item) => (
              <option key={item} value={item}>
                {item} Articulo
              </option>
            ))}
          </select>
          <p>{rating?.count} Disponibles</p>
        </div>
      </div>

      <p className="font-semibold text-base  md:text-2xl">
        ${new Intl.NumberFormat().format(totalPrice)}
      </p>
    </div>
  );
};
export default CartItem;
