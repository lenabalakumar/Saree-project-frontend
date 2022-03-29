import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="Product-card-container">
      <img
        className="Product-image"
        src="https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
      <div className="Product-category-text">
        <p>Wedding sarees</p>
      </div>
      <div className="Product-price-text">
        <p>Rs. 10,000 onwards</p>
      </div>
    </div>
  );
};

export default ProductCard;
