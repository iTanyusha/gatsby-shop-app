import React from 'react';

import { GatsbyImage } from 'gatsby-plugin-image';

export const MediaText = ({ verticalAlignment, style, className, mediaPosition, gatsbyImage, children }) => {
    const textContent = <div className={`p-4 flex ${verticalAlignment === 'center' ? 'items-center' : ''}`}>
        <div>
            {children}
        </div>
    </div >;

    return (
        <div style={style} className={className}>
            {mediaPosition === 'right' && textContent}

            <div><GatsbyImage alt='' image={gatsbyImage} /></div>

            {mediaPosition !== 'right' && textContent}
        </div>
    )
} 