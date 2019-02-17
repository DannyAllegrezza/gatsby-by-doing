import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

export default ({ data }) => (
    <Layout>
        <div>
            <Header headerText={data.site.siteMetadata.title} />
            <p>Re-di-di-de-doooo</p>
        </div>
    </Layout>
)

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`