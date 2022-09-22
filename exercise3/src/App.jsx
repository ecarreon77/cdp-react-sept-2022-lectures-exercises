import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { PRODUCTS_DATA } from "./data/products";

import Nav from "./components/Nav";
import { Route, Routes, Navigate } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import AddProductPage from "./pages/AddProductPage";

function App() {
  const [products, setProducts] = useState(PRODUCTS_DATA);
  const getCartCount = () => {
    return products.filter((product) => product.qty > 0);
  };

  const handleAddToCart = (id) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          product.qty = 1;
          product.added = true;
        }
        return product;
      })
    );
  };

  const handleIncrementQty = (id) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          product.qty++;
          product.quantityInStock--;
          product.added = true;
          console.log(product.quantityInStock);
        }
        return product;
      })
    );
  };

  const handleDecrementQty = (id) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          product.qty--;
          product.quantityInStock++;
          console.log(product.quantityInStock);
        }
        return product;
      })
    );
  };

  const handleAddProduct = (product) => {
    setProducts([...products, { ...product, id: products.length * 10 + 1 }]);
  };

  return (
    <>
      <CssBaseline />
      <Nav totalCount={getCartCount().length} />
      <Container>
        <Routes>
          <Route
            path="/products"
            element={
              <ProductsPage
                products={products}
                onAddToCart={handleAddToCart}
                onIncrementQty={handleIncrementQty}
                onDecrementQty={handleDecrementQty}
              />
            }
          />
          <Route path="/" element={<Navigate to="/products" />} />
          <Route
            path="/products/new"
            element={<AddProductPage onAddProduct={handleAddProduct} />}
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
