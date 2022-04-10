import "./App.css";
import NavBar from "./navBar";
import Products from "./products";
import { useState } from "react";
import Cart from "./cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [cartNum, setCartNum] = useState(0);
  const [products, setProducts] = useState([
    {
    id: 1,
    title: "Sladoled",
    description: "Zaledjeno voce",
    amount: 0,
    image: "/1-Sladoled-front.jpg"
  },
  {
    id: 2,
    title: "Cheesecake",
    description: "Vocni kolac",
    amount: 0,
    image: "/download.jpg"
  },
  {
    id: 3,
    title: "Topla cokolada",
    description: "topli napitak od čokolade",
    amount: 0,
    image: "/hotchocolate.jpg"
  },
]);
const addToCart = (id) => {
  products.map((product) => {
    if (product.id === id) {
      product.amount = product.amount + 1;
      const a = cartNum + 1;
        setCartNum(a);
      console.log("product id=", product.id, "amount=", product.amount);
    }
  });
};

const remFromCart = (id) => {
  products.map((product) => {
    if (product.id === id) {
      if (product.amount > 0) {
        product.amount = product.amount - 1;
        const a = cartNum - 1;
        setCartNum(a);
        console.log("product id=", product.id, "amount=", product.amount);
      } else {
        alert("Amount of product is already 0.");
      }
    }
  });
  };

  return (
    <BrowserRouter>
    <NavBar cartNum={cartNum}/>
    <Routes>
      <Route
        path="/"
        element={
          <Products
            products={products}
            onAdd={addToCart}
            onRemove={remFromCart}
          />
        }
      />
      <Route 
        path="/cart"element={<Cart cart={cartNum}/>}

      />
    </Routes>
  </BrowserRouter>

  );
}

export default App;
