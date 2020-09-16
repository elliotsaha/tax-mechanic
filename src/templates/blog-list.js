import React from "react"
import { graphql, Link } from "gatsby"
import Pagination from "@material-ui/lab/Pagination"
import PaginationItem from "@material-ui/lab/PaginationItem"
import PanelOneRoot from "../components/blog/PanelOneRoot"
import Layout from "../components/layout"
export default function blogList({ data, pageContext }) {
  console.log(data)
  return (
    <Layout>
      <div>
        <PanelOneRoot title={"Blog"} downProp={`Page ${pageContext.currentPage}`}/>
        <div>
          {data.allMarkdownRemark.edges.map(data => (
            <div key={data.node.frontmatter.title}>
              {data.node.frontmatter.title}
            </div>
          ))}
        </div>
        <Pagination
          count={pageContext.numPages}
          page={pageContext.currentPage}
          renderItem={item => (
            <PaginationItem
              component={Link}
              to={`/blog/${item.page}`}
              {...item}
            />
          )}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(content)/(blog)/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMM, YYYY")
            title
          }
        }
      }
    }
  }
`
