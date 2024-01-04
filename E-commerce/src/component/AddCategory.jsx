import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Reducer/CreateSlice";
import "../style/category.css";
import { Link } from "react-router-dom";
import { favoriteItem } from "../Reducer/CreateSlice";
import { deleteToCart } from "../Reducer/CreateSlice";
function AddCategory(props) {
  const dispatch = useDispatch();

  const [isWishlisted, setIsWishlisted] = useState(false);

  const { image, price, title, id } = props.object;
  const handleClick = () => {
    return dispatch(addToCart(props.object));
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    if (!isWishlisted) {
      dispatch(favoriteItem({ title, image, price }));
    }
  };

  return (
    <div className="col-sm-3 mycategory">
      <div className="category-content">
        <div className="wishlist-wrapper" onClick={handleWishlist}>
          <button className="wishlist-btn">{isWishlisted ? "❤️" : "🖤"}</button>
        </div>
        <img
          src={image}
          style={{ width: "90%", height: "300px" }}
          alt={title}
        />

        <h3>{title.slice(0, 17)}</h3>
        <h3>
          <span>&#8377;</span> {price}
        </h3>
        <button className="btn btn-dark" onClick={handleClick}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default AddCategory;
