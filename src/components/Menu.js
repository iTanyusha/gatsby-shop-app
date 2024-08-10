import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const Menu = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allWpCategory {
                nodes {
                    name
                    slug
                }
            }
        }
    `);

    console.log(data);


    return (
        <nav>
            All Products
            {data.allWpCategory.nodes.map(cat => (
                <div key={cat.name}>{cat.name}</div>
            ))}
        </nav>
    )

}