import React, { useState } from 'react';
import './Product.css';
import { addToDb } from '../../../utilities/store';

const Product = (props) => {
    const {name, category, seller, price, stock, ratings, img, id} = props.product;
    const addToCart = props.addToCart;
    const [stocks, setStocks] = useState(stock);
    const remainingStocks = () => {
        setStocks(stocks - 1);
        addToCart(props.product)
        addToDb(id)
    }
    return (
        <div className='all-product'>
            <div className='product'>
                <img src={img} alt=""/>
                <h2>{name}</h2>
                <p>Category: {category}</p>
                <p>Seller: {seller}</p>
                <h3>Price: ${price}</h3>
                <p>Stock: {stocks}</p>
                <p>Ratings: {ratings} Stars</p>
             </div>
            <div className='btn'>
                <button onClick={() => remainingStocks()}>Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;