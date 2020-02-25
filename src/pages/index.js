import React from "react"
import { Link, graphql  } from "gatsby"

import Layout from "../components/layout"
// import Avatar from "../components/avatar"
import Image from 'gatsby-image'
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout headTitle="Musings from the Sea Of Thieves">
    <SEO title="Home" />

    <div className="post_container">
    {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <article key={node.id} className="one_blog_post">
        <Link to={node.fields.slug} className="singlePost">
          <Image
            fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
            alt="Mr. Chenzo"
            style={{
              height: 100,
            }}
            imgStyle={{ objectFit: 'cover' }}
          />
          <h3>
            {node.frontmatter.title}{" "}
          </h3>
          
          <span>
              {node.frontmatter.date} | Time To Read: {node.timeToRead}
          </span>
          <p>{node.excerpt}</p>
        </Link>
      </article>
    ))}
    </div>
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
            published
            categories
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
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
