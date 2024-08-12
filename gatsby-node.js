const path = require('path');
const fs = require('fs');
const { assignIds, assignGatsbyImage } = require("@webdeveducation/wp-block-tools");

exports.createPages = async ({ actions, graphql }) => {
    const pageTemplate = path.resolve('src/templates/page.js');
    const productTemplate = path.resolve('src/templates/product.js');
    const { createPage } = actions;

    const { data } = await graphql(`
        query AllPagesQuery {
            wp {
                themeStylesheet
            }
            allWpProduct {
                nodes {
                    title
                    databaseId
                    uri
                    blocks
                    productDetails {
                        price
                        releaseDate
                        description
                    }
                    excerpt
                    featuredImage {
                        node {
                            localFile {
                                childImageSharp {
                                    gatsbyImageData(
                                        placeholder: DOMINANT_COLOR
                                        formats: [JPG]
                                    )
                                }
                            }
                        }
                    }
                }
            }
            allWpPage {
                nodes {
                    title
                    databaseId
                    uri
                    blocks
                }
            }
        }
    `)

    try {
        fs.writeFileSync('./public/themeStylesheet.css', data.wp.themeStylesheet);
    }
    catch (e) { }

    for (let i = 0; i < data.allWpPage.nodes.length; i++) {
        const page = data.allWpPage.nodes[i];

        let blocks = page.blocks;
        blocks = assignIds(blocks);
        blocks = await assignGatsbyImage({
            blocks,
            graphql,
            coreMediaText: true
        });

        createPage({
            path: page.uri,
            component: pageTemplate,
            context: {
                title: page.title,
                blocks
            }
        })
    }

    for (let i = 0; i < data.allWpProduct.nodes.length; i++) {
        const page = data.allWpProduct.nodes[i];

        createPage({
            path: page.uri,
            component: productTemplate,
            context: {
                title: page.title,
                excerpt: page.excerpt,
                price: page.productDetails?.price,
                description: page.productDetails?.description,
                releaseDate: page.productDetails?.releaseDate,
                image: page.featuredImage
            }
        })
    }
}