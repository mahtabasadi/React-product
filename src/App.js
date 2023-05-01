import ProductList from "./Components/ProductList/ProductList";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import Filter from "./Components/Filter/Filter";
import Wrapper from "./Components/hoc/Wrapper";
import ProductsProvider from "./Components/Providers/ProductsProvider";

const App = () => {
  return (
    <>
      <ProductsProvider>
          <>
            <NavBar />
            <Filter/>
            <ProductList
            />
          </>
      </ProductsProvider>
    </>
  );
};

export default Wrapper(App, "container");
