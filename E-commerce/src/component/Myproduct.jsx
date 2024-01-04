import React, { useEffect, useState } from "react";
import ProductStructure from "./ProductStructure";

function Myproduct() {
  const [products, updateProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        updateProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div>
      <div className=" product">
        <div className="row">
          {products.map((product, index) => (
            <ProductStructure object={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Myproduct;
