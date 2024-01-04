import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cart from "../Assist/cart.png";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../Reducer/CreateSlice";
import "../style/productStyle.css";
function ProductDetails() {
  const dispatch = useDispatch();
  // const addCart = useSelector((state) => {
  //   return state.cart.cartCount;
  // });

  const handleClick = () => {
    return dispatch(addToCart(product));
  };

  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);
  console.log(product);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          width: "200px",
          margin: "auto",
          marginRight: "106px",
          marginTop: "36px",
        }}
      >
        <img src={cart} alt="" style={{ height: "37px", marginRight: "5px" }} />
        <span className="icon" style={{ fontSize: "16px", fontWeight: "700" }}>
          <span className="cart"> {addCart} </span>
          Cart
        </span>
      </div> */}

      <div className="myProduct">
        <div
          style={{
            width: "62em",
            height: "32em",
            backgroundColor: "rgb(255 215 79 / 69%)",
            display: "flex",
            margin: "auto",
            marginTop: "66px",
          }}
        >
          <img
            src={product.image}
            alt=""
            style={{
              width: "75%",
              height: "75%",
              marginLeft: "10px",
              padding: "10px",
            }}
          />
          <div className="middlePart">
            <p
              style={{
                fontSize: "23px",
                fontFamily: "fantasy",

                marginTop: "37px",
              }}
            >
              {product.title}
            </p>
            <p
              style={{
                fontSize: "23px",
                fontFamily: "fantasy",
              }}
            >
              Price: <span>&#8377;</span> {product.price}
            </p>
            <p
              style={{
                fontSize: "12px",
                fontFamily: " cursive",

                padding: "25px",
              }}
            >
              <span>description:- &gt;</span> {product.description}
            </p>
            <div>
              <button
                className="btn btn-dark"
                onClick={handleClick}
                style={{ marginLeft: "40px" }}
              >
                Add-Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
