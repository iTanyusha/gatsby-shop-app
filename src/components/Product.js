import { Link } from 'gatsby';
import React from 'react';

export const Product = ({ product, price, releaseDate, image }) => {
    const showProduct = new Date(releaseDate) <= new Date() || !releaseDate;

    if (!showProduct) return null;

    return <Link to={'/product' + product.uri} className='product' >
        <h3 className='title'> {product.post_title} </h3>
        {image && <img src={image} className='image' alt={product.post_title} />}
        <p dangerouslySetInnerHTML={{ __html: product.post_excerpt }}></p>
        <p className='price'>$ {price}</p>
        <button className='buy-button'>Add to cart</button>
    </Link>
}