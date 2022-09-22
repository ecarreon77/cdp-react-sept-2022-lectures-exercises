import React from "react";
import ProductsForm from "../components/ProductsForm";

const AddProductPage = ({ onAddProduct }) => {
  return (
    <div>
      <ProductsForm onAddProduct={onAddProduct} />
    </div>
  );
};

export default AddProductPage;
