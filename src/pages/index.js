import React from "react"
import { Link, graphql } from "gatsby"
import Image from 'gatsby-image'
import Layout from "../components/layout"
/*  import Image from "../components/image"  */
import SEO from "../components/seo"


export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <Image
          className="avatar"
          fixed={data.avatar.childImageSharp.fixed}
          alt="Mr. Chenzo"
          style={{
            marginBottom: 0,
            minWidth: 150,
            borderRadius: '100%',
            border: '8px solid lavender',
          }}
          imgStyle={{
            borderRadius: '50%',
          }}
        />

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
      </div>
    </Layout>
  )
}
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