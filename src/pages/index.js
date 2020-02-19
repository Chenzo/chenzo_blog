import React from "react"
import { Link, graphql  } from "gatsby"

import Layout from "../components/layout"
import Avatar from "../components/avatar"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout headTitle="Musings from the Sea Of Thieves">
    <SEO title="Home" />
    
    <Avatar />

    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link to={node.fields.slug}>
          <h3>
            {node.frontmatter.title}{" "}
            <span>
              — {node.frontmatter.date}
            </span>
          </h3>
          <p>Time To Read: {node.timeToRead}</p>
          <p>{node.excerpt}</p>
        </Link>
      </div>
    ))}
  </Layout>
)



export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
    avatar: file(absolutePath: { regex: "/avatar.png/" }) {
      childImageSharp {
        fixed(width: 150, height: 150, quality: 90) {
          base64
          width
          height
          src
          srcSet
        }
      }
    }
  }
`

export default IndexPage
