import React from "react";
import styles from "./Product.module.css";
import { BiTrash } from "react-icons/bi";




const Product = ({product , onChange , onDecrement , onIncrement , onDelete}) => {
  return (
    <div className={styles.product} id="test">
      <p>ProductName : {product.title}</p>
      <p>productPrice: {product.price}</p>
      <p className={styles.value}>{product.quantity}</p>
      <button
        className={`${styles.button} ${
          product.quantity === 1 && styles.remove
        }`}
        onClick={onDecrement}
      >
        {product.quantity > 1 ? "-" : <BiTrash />}
      </button>
      <button
        className={`${styles.button} ${styles.inc}`}
        onClick={onIncrement}
      >
        +
      </button>
      <button className={styles.button} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Product;
