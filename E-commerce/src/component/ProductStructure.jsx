import React, { useState } from "react";
import "../style/productStyle.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { favoriteItem } from "../Reducer/CreateSlice";
import { addToCart } from "../Reducer/CreateSlice";
import { deleteFromFavorites } from "../Reducer/CreateSlice";
function ProductStructure(props) {
  const selector = useSelector((state) => {
    return state.cart.cartCount;
  });

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToCart(props.object));
  };

  const { title, image, description, id, price } = props.object;

  const [isWishlisted, setIsWishlisted] = useState(false);

  const wishlist = () => {
    if (!isWishlisted) {
      setIsWishlisted(true);
      dispatch(favoriteItem({ title, image, description, id, price }));
    } else {
      setIsWishlisted(false);

      dispatch(deleteFromFavorites(id));
    }
  };

  return (
    <div className="col-sm-3 card">
      <div
        className="myStructure"
        style={{
          position: "relative",
          width: "105%",
          height: "100%",
          paddingLeft: "3px",
        }}
      >
        <button onClick={wishlist} className="wishlist-btn">
          {isWishlisted ? "❤️" : "🖤"}
        </button>
        <Link to={`/product/productDetails/${id}`}>
          <img
            style={{
              width: "100%",
              height: "78%",
              padding: "10px",
            }}
            src={image}
            alt={title}
            className="forhover"
          />
        </Link>

        <div className="description">
          <p className="paragraph">{title.slice(0, 20)}</p>
          <h3 className="head">
            <span>&#8377;</span> {price}
          </h3>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary btn-primary"
        style={{ width: "103%" }}
        onClick={handleClick}
      >
        <Link
          // to={`/product/productDetails/${id}`}
          style={{ color: "black", textDecoration: "none", fontSize: "18px" }}
        >
          Add-Cart
        </Link>
      </button>
    </div>
  );
}

export default ProductStructure;
