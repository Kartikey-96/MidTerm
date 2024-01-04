import React from "react";
import img from "../Assist/home.png";
import product from "../Assist/product.png";
import cart from "../Assist/cart.png";
import signup from "../Assist/signup.png";
import "../style/navbar.css";
import { Link } from "react-router-dom";
import favorite from "../Assist/favorite.png";
import { useLocation } from "react-router-dom";
import { addToCart } from "../Reducer/CreateSlice";
import { useSelector } from "react-redux";

function Navbar() {
  const myWholeCount = useSelector((state) => {
    return state.cart.cartCount;
  });

  const location = useLocation();
  const forPosition = location.pathname === "/product";
  const navbarClass = forPosition ? "fixed" : "";

  return (
    <div className={`myNav ${navbarClass}`}>
      <div className="logo">
        <h4>Shopy</h4>
      </div>

      <div className="content">
        <div>
          <img src={img} alt="" style={{ height: "25px" }} />
          <span className="icon">
            <Link to="/">Home </Link>
          </span>
        </div>
        <div>
          <img src={product} alt="" style={{ height: "25px" }} />
          <span className="icon">
            <Link to="/product">Products </Link>
          </span>
        </div>
        <div>
          <img src={cart} alt="" style={{ height: "25px" }} />
          <span className="icon">
            <Link to="/cartitem">Cart {myWholeCount} </Link>
          </span>
        </div>
        <div>
          <img src={signup} alt="" style={{ height: "25px" }} />
          <span className="icon">
            <Link to="/login"> Login</Link>
          </span>
        </div>
        <div>
          <img src={signup} alt="" style={{ height: "25px" }} />
          <span className="icon">
            <Link to="/form"> Sign-Up</Link>
          </span>
        </div>
        <div>
          <img src={favorite} alt="" style={{ height: "25px" }} />
          <span className="icon">
            <Link to="/heartitem"> Favorite-Item</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
