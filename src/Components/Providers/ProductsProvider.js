import React, { useContext, useReducer } from "react";
import { productsData } from "../../db/products";
import _ from "lodash";
const ProductContext = React.createContext();
const ProductContextdispatcher = React.createContext();

const Reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      const Index = state.findIndex((p) => p.id === action.id);
      // clone the selected Index and update the quantity
      const product = { ...state[Index] };
      product.quantity++;
      const updatedproducts = [...state];
      updatedproducts[Index] = product;
      return updatedproducts; //
    }

    case "decrement": {
      const Index = state.findIndex((p) => p.id === action.id);
      const product = { ...state[Index] };
      if (product.quantity === 1) {
        const FilterHandeler = state.filter((p) => p.id !== action.id);
        return FilterHandeler;
      } else {
        const updatedproducts = [...state];
        product.quantity--;
        updatedproducts[Index] = product;
        return updatedproducts; //
      }
    }

    case "remove": {
      const FilterHandeler = state.filter((p) => p.id !== action.id);
      return FilterHandeler;
    }

    case "filter": {
      const value = action.selectedOption.value;
      if (value === "") {
        return productsData;
      } else {
        const updatedProducts = productsData.filter(
          (p) => p.availableSize.indexOf(value) >= 0
        );
        return updatedProducts;
      }
    }

    case "sort": {
      const value = action.selectedOption.value;
      const products = [...state];
      if (value === "lowest") {
        return _.orderBy(products, ["price"], ["asc"]);
      } else {
        return _.orderBy(products, ["price"], ["desc"]);
      }
    }

    case "search": {
      const value = action.event.target.value;
      if (value === "") {
        return state;
      } else {
        const filteredProducts = state.filter((p) =>
          p.title.toLowerCase().includes(value.toLowerCase())
        );
        return filteredProducts;
      }
    }

    default:
      return state;
  }
};

const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(Reducer, productsData);

  return (
    <ProductContext.Provider value={products}>
      <ProductContextdispatcher.Provider value={dispatch}>
        {children}
      </ProductContextdispatcher.Provider>
    </ProductContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductContext);

export const useProductsActions = () => {
  return useContext(ProductContextdispatcher);
};
