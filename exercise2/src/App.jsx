import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { PRODUCTS_DATA } from "./data/products";
import ProductList from "./components/ProductList";
import Navbar from "./components/Nav";

function App() {
  const [products, setProducts] = useState(PRODUCTS_DATA);
  const getCartCount = () => {
    return products.filter((prod) => prod.qty > 0);
  };

  const handleAddToCart = (id) => {
    setProducts(
      products.map((prod) => {
        if (prod.id === id) {
          prod.qty = 1;
          prod.added = true;
          console.log(prod);
        }
        return prod;
      })
    );
  };

  const handleIncrementQty = (id) => {
    setProducts(
      products.map((prod) => {
        if (prod.id === id) {
          prod.qty += 1;
          prod.added = true;
          console.log(prod.qty);
        }
        return prod;
      })
    );
  };

  const handleDecrementQty = (id) => {
    setProducts(
      products.map((prod) => {
        if (prod.id === id) {
          prod.qty -= 1;
          console.log(prod.qty);
        }
        return prod;
      })
    );
  };

  return (
    <>
      <CssBaseline />
      <Navbar totalCount={getCartCount().length} />
      <Container>
        <ProductList
          products={products}
          onAddToCart={handleAddToCart}
          onIncrementQty={handleIncrementQty}
          onDecrementQty={handleDecrementQty}
        />
      </Container>
    </>
  );
}

export default App;
