import React, { useEffect, useState } from "react";
import "./Products.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { getShoppingCart } from "../../../utilities/store";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const addToCart = getShoppingCart();
    const savedCart = [];
    for (const id in addToCart) {
      const savedProduct = products.find((product) => product.id === id);
      if (savedProduct !== undefined && savedProduct !== null) {
        const quantity = addToCart[id];
        savedProduct.quantity = quantity;
        savedCart.push(savedProduct);
      }
    }
    setCartItems(savedCart);
  }, [products]);


  const addToCart = (product) => {
    // setCartItems([...cartItems, product]);
    let newCart = [];
    const exist = cartItems.find(item => item.id === product.id)
    if (!exist){
        product.quantity = 1;
        newCart = [...cartItems, product];
    }else{
        exist.quantity += 1;
        const remaining = cartItems.filter(item => item.id !== product.id)
        newCart = [...remaining , exist ];
    }
    setCartItems(newCart);
  };

  return (
    <div className="products-section">
      <div className="display-section">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
      <div>
        <Cart cartItems={cartItems}></Cart>
      </div>
    </div>
  );
};

export default Products;
