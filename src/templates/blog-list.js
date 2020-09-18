import React from "react"
import { graphql, Link } from "gatsby"
import Pagination from "@material-ui/lab/Pagination"
import PaginationItem from "@material-ui/lab/PaginationItem"
import PanelOneRoot from "../components/blog/PanelOneRoot"
import Layout from "../components/layout"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import Img from "gatsby-image"
import "./blog.css"
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: "black",
    },
    imageContainer: {
      margin: 0,
      marginLeft: "auto",
      marginRight: '1rem',
      [theme.breakpoints.down(850)]: {
        marginRight: "auto",
        marginLeft: "1rem",
      },
    },
    image: {
      width: "15.5rem",
      objectFit: "cover",
      height: "15.5rem",
      borderRadius: "1.5rem",
      [theme.breakpoints.down(400)]: {
        width: "10.5rem",
        objectFit: "cover",
        height: "10.5rem",
        borderRadius: "1.1rem",
      },
    },
    cardBody: {
      overflow: "auto",
      paddingBottom: "4rem",
      paddingTop: "0em",
    },
    title: {
      margin: "1rem",
      marginBottom: 0,
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bold",
      fontSize: "2.35rem",
      lineHeight: '3rem',
      color: "white",
      [theme.breakpoints.down(850)]: {
        fontSize: "2.3rem",
        lineHeight: '2.7rem',
      },
      [theme.breakpoints.down(450)]: {
        fontSize: "1.7rem",
        lineHeight: '2.2rem',
      },
    },
    date: {
      marginTop: '0.5rem',
      marginBottom: '0.5rem',
      marginLeft: "1rem",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bold",
      color: "#F3881A",
      opacity: 1,
      fontSize: "1.1rem",
    },
    container: {
      display: "flex",
      flexDirection: "row",
      [theme.breakpoints.down(850)]: {
        flexDirection: "column-reverse",
        marginRight: "auto",
        marginLeft: "auto",
      },
    },
    paragraph: {
      marginLeft: "1rem",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 650,
      color: "#EFEFEF",
      opacity: 0.5,
      fontSize: "1.1rem",
    },
    textContainer: {
      paddingRight: "3rem",
      marginTop: "auto",
      marginBottom: "auto",
      [theme.breakpoints.down(850)]: {
        maxWidth: "30rem",
      },
      [theme.breakpoints.down(400)]: {
        fontSize: "0.9rem",
      },
    },
    link: {
      boxShadow: "none",
      margin: 0,
      textDecoration: "none",
    },
    panelTwoContainer: {
      [theme.breakpoints.down(850)]: {
        marginRight: "auto",
        marginLeft: "auto",
      },
    },
    gridContainer: {
      display: "grid",
      maxWidth: "52.5rem",
      marginLeft: "auto",
      marginRight: "auto",
      gridGap: "2rem",
      paddingTop: "3rem",
    },
    pagination: {
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bold",
      color: "white",
    },
    background: {
      backgroundColor: "#0C0C0C",
    },
    paginationContainer: {
      display: "flex",
      justifyContent: "center",
      paddingBottom: '3rem',
    },
    largePagination: {
      display: 'block',
      [theme.breakpoints.down(350)]: {
        display: 'none'
      },
    },
    smallPagination: {
      display: 'none',
      [theme.breakpoints.down(350)]: {
        display: 'block'
      },
    }
  })
)

export default function blogList({ data, pageContext }) {
  const classes = useStyles()
  return (
    <Layout>
      <div>
        <PanelOneRoot
          title={"Blog"}
          downProp={`Page ${pageContext.currentPage}`}
        />
        <div className={classes.background}>
          <div className={classes.gridContainer}>
            <div className={classes.panelTwoContainer}>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.fields.slug} className={classes.cardBody}>
                  <Link className={classes.link} to={node.fields.slug}>
                    <div className={classes.container}>
                      <div className={classes.textContainer}>
                        <h3 className={classes.title}>
                          {node.frontmatter.title}
                        </h3>
                        <div className={classes.date}>
                          {node.frontmatter.date}
                        </div>

                        <div className={classes.paragraph}>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                node.frontmatter.description || node.excerpt,
                            }}
                          />
                        </div>
                      </div>
                      <div className={classes.imageContainer}>
                        <Img
                          fluid={
                            node.frontmatter.thumbnail.childImageSharp.fluid
                          }
                          className={classes.image}
                        />
                      </div>
                    </div>
                  </Link>{" "}
                </div>
              ))}
            </div>
          </div>
          <div className={classes.paginationContainer}>

            <Pagination
              size={"large"}
              className={classes.largePagination}
              count={pageContext.numPages}
              page={pageContext.currentPage}
              renderItem={item => (
                <PaginationItem
                  className={classes.pagination}
                  component={Link}
                  to={`/blog/${item.page}`}
                  {...item}
                />
              )}
            />
            
            <Pagination
              size={"medium"}
              className={classes.smallPagination}
              count={pageContext.numPages}
              page={pageContext.currentPage}
              renderItem={item => (
                <PaginationItem
                  className={classes.pagination}
                  component={Link}
                  to={`/blog/${item.page}`}
                  {...item}
                />
              )}
            />

          </div>
        </div>
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
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMM, YYYY")
            title
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 750, quality: 65) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
