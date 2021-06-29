import { useState } from "react";

const Product = ({ addToBasket, logBasket }) => {
  // item name
  // quantity

  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(0);

  const add = (e) => {
    e.preventDefault();
    const item = {
      productName: productName,
      quantity: quantity,
    };
    addToBasket(item);
    console.log(`Item has been added!`);
    setProductName("");
    setQuantity("");
  };

  return (
    <div>
      <h3> Product </h3>
      <form onSubmit={add}>
        <label> Enter Product name: </label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <label> Enter Quantity: </label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit"> Add Product! </button>
      </form>
      <button type="button" onClick={logBasket}> Log out the basket </button>
    </div>
  );
};

export default Product;
