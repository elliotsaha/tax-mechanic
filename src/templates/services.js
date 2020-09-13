import React from "react"
import { Link, graphql } from "gatsby"
import PanelOne from "./services/PanelOne"
import Layout from "../components/layout"
export default function services({data}) {
  console.log(data)
  return (
    <Layout>
      <PanelOne />
    </Layout>
  )
}

export const pageQuery = graphql`
  query Services($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 450, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
