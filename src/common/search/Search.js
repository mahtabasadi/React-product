import { useState } from "react";
import { useProductsActions } from "../../Components/Providers/ProductsProvider";
import styles from "./Search.module.css";

const SearchBar = ({filter}) => {
  const dispatch = useProductsActions();
  const [value, setValue] = useState("");

  const changeHandeler = (e) => {
    console.log(e.target.value);
    dispatch({ type: "filter", selectedOption: filter });
    dispatch({ type: "search", event: e });
    setValue(e.target.value);
  };

  return (
    <div className={styles.formControl}>
      <div>search for: </div>
      <input
        type="text"
        placeholder="Search for ..."
        onChange={changeHandeler}
        value={value}
      />
    </div>
  );
};

export default SearchBar;
