const path = require('path');
const fs = require('fs');
const { assignIds, assignGatsbyImage } = require("@webdeveducation/wp-block-tools");

exports.createPages = async ({ actions, graphql }) => {
    const pageTemplate = path.resolve('src/templates/page.js');
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

    const allPages = [...data.allWpPage.nodes, ...data.allWpProduct.nodes];

    for (let i = 0; i < allPages.length; i++) {
        const page = allPages[i];

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
}