import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import UserForm from "./component/UserForm";
import Login from "./pages/Login";
import Categoriy from "./component/Categoriy";
import Myproduct from "./component/Myproduct";

import Navbar from "./component/Navbar";
import CartItems from "./component/CartItems";
import CategoryProducts from "./component/CategoryProducts";
import Heartitems from "./FavoriteItem/HeartItems";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route
            path="product/productDetails/:id"
            element={<ProductDetails />}
          />

          <Route path="form" element={<UserForm />} />
          <Route path="login" element={<Login />} />

          <Route path="myproduct" element={<Myproduct />} />
          <Route path="cartitem" element={<CartItems />} />
          <Route path="category" element={<Categoriy />} />
          <Route path="myproduct/:category" element={<CategoryProducts />} />
          <Route path="heartitem" element={<Heartitems />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
