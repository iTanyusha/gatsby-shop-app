import React from 'react';

export const Product = ({ product, price, releaseDate }) => {

    const showProduct = new Date(releaseDate) <= new Date();

    console.log(product.post_title, new Date(releaseDate), new Date(), new Date(releaseDate) <= new Date());


    if (!showProduct) return null;

    return <div>
        {product.post_title} - {price} - {releaseDate}
    </div>
}