import React from 'react';

import { Layout } from '../components';
import { GatsbyImage } from 'gatsby-plugin-image';



const ProductPage = ({ pageContext }) => {
    console.log(pageContext);
    const { title, image, price, description } = pageContext;



    return (
        <Layout>
            <h1>{title}</h1>
            <section className='product-page'>
                <div className='product-image'>

                    {image && <GatsbyImage image={image.node.localFile.childImageSharp.gatsbyImageData} alt={title} />}

                    <div className='action sm'>
                        <p className='price'>$ {price}</p>
                        <button className='buy-button'>Add to cart</button>
                    </div>
                </div>

                <aside className='product-description'>

                    <p dangerouslySetInnerHTML={{ __html: description }}></p>

                    <div className='action xl'>
                        <p className='price'>$ {price}</p>
                        <button className='buy-button'>Add to cart</button>
                    </div>

                </aside>
            </section>
        </Layout>
    )
}

export default ProductPage;