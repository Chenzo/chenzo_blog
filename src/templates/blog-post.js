import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { formatPostDate, formatReadingTime } from '../utils/dates'

import "./blog-post.scss";

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout headTitle={post.frontmatter.title} isBlogPost="true">
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div className="postMeta">
        Written By: Mr. Chenzo<br/>
        {formatPostDate(post.frontmatter.date)} {` • ${formatReadingTime(post.timeToRead)}`}
      </div>
      <div>
        {/* <h1>{post.frontmatter.title}</h1> */}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date
      }
      excerpt
    }
  }
`