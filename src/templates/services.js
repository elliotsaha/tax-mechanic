import React from "react"
import { Link, graphql } from "gatsby"
import PanelOne from "./services/PanelOne"
import PanelTwo from "./services/PanelTwo"
import Layout from "../components/layout"
import SEO from "../components/seo"
export default function services({data}) {
  return (
    <Layout>
      <SEO title={data.markdownRemark.frontmatter.title} />
      <PanelOne title={data.markdownRemark.frontmatter.title} image={data.markdownRemark.frontmatter.image.childImageSharp.fluid}/>
      <PanelTwo data={data.markdownRemark} />
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
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
