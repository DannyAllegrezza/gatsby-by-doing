import React from "react";
import Layout from '../components/layout';
import Header from '../components/header';
import { graphql } from "gatsby";

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <Header headerText={data.site.siteMetadata.title} />
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>
              {node.frontmatter.title}{" "}
              <span>
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
        siteMetadata {
            title
        }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}){
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`