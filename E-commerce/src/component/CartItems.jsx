import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../style/cartstyle.css";
import { useParams } from "react-router-dom";
import { deleteToCart } from "../Reducer/CreateSlice";
function CartItems() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => {
    return state.cart.cartItems;
  });

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const deleteItem = (itemId) => {
    dispatch(deleteToCart({ id: itemId }));
  };

  return (
    <div className="cart-container">
      <div className="cart-products">
        {cartItems.map((item) => (
          <div key={item.id}>
            <img src={item.image} style={{ height: "300px", width: "300px" }} />
            {/* <h3 className="headingproduct">{item.title.slice(0, 14)}</h3> */}
            <p
              style={{
                marginLeft: "18px",
                fontWeight: "600",
                fontSize: "21px",
              }}
            >
              Price <span>&#8377;</span> {item.price}
            </p>
            <button
              onClick={() => deleteItem(item.id)}
              type="button"
              className="btn btn-secondary btn-sm"
              style={{ position: "relative", top: "-321px", left: "564px" }}
            >
              Delete-Cart
            </button>
          </div>
        ))}
      </div>
      <div className="order-summary">
        <h3>Order Summary</h3>
        {cartItems.map((item) => (
          <div
            key={item.id}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <p>{item.title.slice(0, 15)}</p>
            <p className="price">
              <span>&#8377;</span> {item.price}
            </p>
          </div>
        ))}
        <div className="total-price">
          <h3>Total:</h3>
          <p>
            <span>&#8377;</span> {totalPrice}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
