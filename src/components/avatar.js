import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image'
import Img from "gatsby-image"


function Avatar(props) {

const vdata = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
          fixed(width: 150, height: 150, quality: 80) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
    }
  `)


  const data = graphql`
    query {
      avatar: allFile(filter: {absolutePath: {regex: "/avatar.png/"}}) {
        edges {
          node {
            id
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
      }
    }
  ` 

  return (
    <div className="avatar_circle">
      {/* <Img fluid={vdata.placeholderImage.childImageSharp.fluid} /> */}
      <Image
        fixed={vdata.placeholderImage.childImageSharp.fixed}
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
    </div>
    
  )
}


export default Avatar