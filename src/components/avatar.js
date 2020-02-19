import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image'
// import Img from "gatsby-image"


function Avatar(props) {
  let imgw = 150;

  if (props.width) {
    imgw = props.width;
  }

  // fixed(width: 150, height: 150, quality: 80) {

const vdata = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
          fixed {
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


/*   const data = graphql`
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
  `  */

  return (
    <div className="avatar_circle">
      {/* <Img fluid={vdata.placeholderImage.childImageSharp.fluid} /> */}
      {/* fixed={vdata.placeholderImage.childImageSharp.fixed} */}

      <Image
        fixed={vdata.placeholderImage.childImageSharp.fixed}
        alt="Mr. Chenzo"
        style={{
          marginBottom: 0,
          borderRadius: '100%',
          border: '4px solid lavender',
          width: imgw,
          height: imgw
        }}
        imgStyle={{
          borderRadius: '50%',
        }}
      />
    </div>
    
  )
}


export default Avatar