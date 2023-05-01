import { useState } from "react";
import { useProductsActions } from "../Providers/ProductsProvider";
import styles from "./Filter.module.css";
import SelectComponent from "../../common/Select/Select";
import SearchBar from "../../common/search/Search";

const filterOptions = [
  { value: "", label: "All" },
  { value: "xs", label: "xs" },
  { value: "s", label: "s" },
  { value: "m", label: "m" },
  { value: "l", label: "l" },
  { value: "xl", label: "xl" },
  { value: "xxl", label: "xxl" },
];
const sortoptions = [
  { value: "highest", label: "highest" },
  { value: "lowest", label: "lowest" },
];
const Filter = () => {
  const dispatch = useProductsActions();
  const [filter, setFilter] = useState("");
  const [sort, setsort] = useState("");

  const FilterHandeler = (selectedOption) => {
    console.log(selectedOption);
    dispatch({ type: "filter", selectedOption }); //
    dispatch({ type: "sort", selectedOption: sort });
    setFilter(selectedOption);
  };

  const sortHandeler = (selectedOption) => {
    console.log(selectedOption);
    dispatch({ type: "sort", selectedOption });
    setsort(selectedOption);
  };

  return (
    <section>
      <SearchBar filter={filter} />
      <div className={styles.filter}>

        <p>filter products based on:</p>
        <SelectComponent
          title="sort by size"
          value={filter}
          onChange={FilterHandeler}
          options={filterOptions}
        />
        
        <SelectComponent
          title="sort by price"
          value={sort}
          onChange={sortHandeler}
          options={sortoptions}
        />
      </div>
    </section>
  );
};

export default Filter;
