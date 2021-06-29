const Basket = ({ info }) => {
  return (
    <div>
      <h3> Basket </h3>
      {info.map((product) => (
        <div>
          <p>Product name: {product.productName}</p>
          <p>Product Quantity: {product.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Basket;
