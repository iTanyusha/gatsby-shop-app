import React from 'react';
import { BlockRenderer, getClasses, getStyles } from '@webdeveducation/wp-block-tools';
import { MediaText, Product } from '../components';

export const blockRendererComponents = (block) => {
    switch (block.name) {
        case "shop/product": {
            return <Product
                key={block.id}
                product={block.attributes.data.product}
                price={block.attributes.price}
                releaseDate={block.attributes.releaseDate}
                image={block.attributes.image}
            />;
        }
        case "core/media-text": {
            return <MediaText
                key={block.id}
                className={getClasses(block)}
                style={getStyles(block)}
                verticalAlignment={block.attributes.verticalAlignment}
                gatsbyImage={block.attributes.gatsbyImage}
                mediaPosition={block.attributes.mediaPosition}
            >
                <BlockRenderer blocks={block.innerBlocks} />
            </MediaText>
        }

        default: {
            return null;
        }
    }
}