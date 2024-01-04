import React from "react";
import { useDispatch, useSelector } from "react-redux";
import favorite from "../Assist/favorite.png";
import "../style/favorite.css";
import { deleteToCart } from "../Reducer/CreateSlice";
function Heartitems() {
  const dispatch = useDispatch();
  const favoriteObject = useSelector((state) => {
    return state.cart.favoriteItems;
  });
  console.log(favoriteObject);

  return (
    <div className="favoriteItem">
      <h2>Favorite Items</h2>
      <div>
        {favoriteObject.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              widows: "76%",
              margin: "47px",
              boxShadow: "1px 1px 10px brown",
            }}
          >
            <img src={item.image} />
            <div className="align">
              <p>
                Price <span>&#8377;</span> {item.price}
              </p>
              <h4> {item.title} </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Heartitems;
