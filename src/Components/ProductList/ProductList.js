import Product from "../product/Product";
import { useProducts, useProductsActions } from "../Providers/ProductsProvider";

const ProductList = () => {
  const products = useProducts();
  const dispatch = useProductsActions();

  const renderProduct = () => {
    if (products.length === 0) return <div>there is not product in cart</div>;

    return products.map((product, index) => {
      return (
        <Product
          product={product}
          key={index}
          onDelete={() => dispatch({ type: "remove", id: product.id })}
          onIncrement={() => dispatch({ type: "increment", id: product.id })}
          onDecrement={() =>dispatch({ type: "decrement", id: product.id })}
        />
      );
    });
  };
  return (
    <div>
      {!products.length && <div>go to shoppings</div>}
      {renderProduct()}
    </div>
  );
};

export default ProductList;
