import React from "react";
import ProductCard from "../components/ProductCard";

const ProductsPage = ({
  products,
  onAddToCart,
  onIncrementQty,
  onDecrementQty,
}) => {
  return (
    <div>
      <ProductCard
        products={products}
        onAddToCart={onAddToCart}
        onIncrementQty={onIncrementQty}
        onDecrementQty={onDecrementQty}
      />
    </div>
  );
};

export default ProductsPage;
