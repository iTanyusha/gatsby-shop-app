import React from 'react';
import { BlockRendererProvider } from '@webdeveducation/wp-block-tools';
import { Link } from 'gatsby';

import { blockRendererComponents } from '../config/blockRendererComponents';
import { Layout } from '../components';


const Page = (props) => {
    return (
        <Layout>
            <h1>{props.pageContext.title}</h1>
            <section className='products'>
                <BlockRendererProvider
                    allBlocks={props.pageContext.blocks}
                    renderComponent={blockRendererComponents}
                    siteDomain={process.env.GATSBY_WP_URL}
                    customInternalLinkComponent={(
                        { children, internalHref, className }
                        , i) => (
                        <Link
                            key={i}
                            className={className}
                            to={internalHref}>
                            {children}
                        </Link>
                    )} />
            </section>
        </Layout>
    )
}

export default Page;