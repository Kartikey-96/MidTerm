import React from "react";
import Myproduct from "../component/Myproduct";
import { Link } from "react-router-dom";
import "../style/productStyle.css";
import Categoriy from "../component/Categoriy";

function Product() {
  return (
    <div>
      {/* <div>
        <div className="middleHeading">
          <h2 className="fontHeading">Latest-Poducts</h2>
        </div>
        <div className="prouctsBtn">
          <button>
            <Link to="/myproduct">ALL-Products </Link>
          </button>
          <button>Men's Clothing</button>
          <button>Women Clothing</button>

          <button>jewellery</button>
          <button>Shoes</button>
        </div> */}
      {/* </div> */}
      <Categoriy />

      <Myproduct />
    </div>
  );
}

export default Product;
