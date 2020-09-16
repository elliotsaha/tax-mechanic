import React from 'react'
import { Link, graphql } from "gatsby"

export default function blogPost({data}) {
    console.log(data)
    return (
        <div>
            
        </div>
    )
}

export const pageQuery = graphql`
  query Blog($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`