import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = () => {
  //Funtions
  const handleSearch = (e) => {};
  return (
    <form className="bg-white h-9 px-1 py-1 rounded-sm w-full flex justify-between">
      <input
        className="border-r-[1px] w-full mr-3 text-slate-800 border-slate-400 px-2 outline-none"
        type="text"
        onChange={(e) => handleSearch(e)}
      />

      <label>
        <FontAwesomeIcon
          icon={faSearch}
          size="lg"
          className="from-neutral-200"
        />
      </label>
    </form>
  );
};

export default Form;
