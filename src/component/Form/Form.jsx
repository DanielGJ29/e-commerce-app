import { faSquareCaretLeft } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";

//UseContex
import StoreContext from "../../Context/StoreContext.jsx";

const Form = () => {
  const { state, dispatch } = useContext(StoreContext);

  //Funtions
  const handleSearch = (e) => {
    const value = e.target.value;
    dispatch({
      type: "SEARCH",
      payload: value,
    });
  };
  return (
    <form className="bg-white h-9 px-1 py-1 rounded-sm w-full flex justify-between">
      <input
        className="border-r-[1px] w-full mr-3 text-slate-800 border-slate-400 px-2 outline-none"
        type="text"
        onChange={(e) => handleSearch(e)}
      />

      <button>
        <FontAwesomeIcon
          icon={faSearch}
          size="lg"
          className="from-neutral-200"
        />
      </button>
    </form>
  );
};

export default Form;
