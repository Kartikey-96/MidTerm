import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Reducer/CreateSlice";
import AddCategory from "./AddCategory";

function CategoryProducts() {
  const dispatch = useDispatch();
  const handleClick = () => {
    return dispatch(addToCart());
  };

  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [category]);

  return (
    <div>
      <div className="row">
        {products.map((product) => (
          <AddCategory object={product} />
        ))}
      </div>
    </div>
  );
}

export default CategoryProducts;
