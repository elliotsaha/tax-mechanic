import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import PanelOne from "../components/blog/PanelOneSub"
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: "#0c0c0c",
      fontFamily: "Gilroy, sans-serif",
    },
    inner: {
      [theme.breakpoints.down(980)]: {
        marginRight: '1rem',
        marginLeft: '1rem',
      },
    },
    nav: {
      backgroundColor: "#16181E",
    },
    description: {
      color: "#CEB095",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 400,
      fontSize: "1.15rem",
      "& h1": {
        fontFamily: "Gilroy, sans-serif",
        color: "#90663E",
        [theme.breakpoints.down(400)]: {
            fontSize: '2.1rem',
        },
      },
      "& h2": {
        fontFamily: "Gilroy, sans-serif",
        color: "#90663E",
        [theme.breakpoints.down(400)]: {
            fontSize: '1.9rem',
        },
      },
      "& h3": {
        fontFamily: "Gilroy, sans-serif",
        color: "#90663E",
        [theme.breakpoints.down(400)]: {
            fontSize: '1.7rem',
        },
      },
      "& h4": {
        fontFamily: "Gilroy, sans-serif",
        color: "#90663E",
        [theme.breakpoints.down(400)]: {
            fontSize: '1.5rem',
        },
      },
      "& h5": {
        fontFamily: "Gilroy, sans-serif",
        color: "#90663E",
        [theme.breakpoints.down(400)]: {
            fontSize: '1.4rem',
        },
      },
      "& p": {
        fontFamily: "Gilroy, sans-serif",
        fontSize: '1.25rem',
        lineHeight: '1.75rem',
        [theme.breakpoints.down(400)]: {
            fontSize: '1.1rem',
            lineHeight: '1.6rem',
        },
        "& strong": {
            lineHeight: '2rem',
        },
      },
      [theme.breakpoints.down(980)]: {
        fontSize: '1rem',
      },
    },
    listContainer: {
      display: `flex`,
      flexWrap: `wrap`,
      justifyContent: `space-between`,
      marginLeft: 0,
      marginRight: 0,
      listStyle: `none`,
      padding: 0,
    },
    link: {
      color: "#90663E",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 600,
      fontSize: "1.1rem",
      textDecoration: "none",
      boxShadow: 0,
    },
    hr: {
      marginBottom: '1rem',
    },
    grid: {
      display: 'grid',
      maxWidth: '52.5rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      gridGap: '2rem',
      paddingTop: '3rem',
    }
  })
)

export default function blogPost({ data, pageContext, location }) {
  const classes = useStyles()
  const post = data.markdownRemark
  const { previous, next } = pageContext
  return (
    <Layout>
      <div>
        <PanelOne title={data.markdownRemark.frontmatter.title} date={data.markdownRemark.frontmatter.date} image={data.markdownRemark.frontmatter.image.childImageSharp.fluid}/>
      </div>
      <div className={classes.root}>
        <div className={classes.inner}>
          <div className={classes.grid}>
            <SEO
              title={post.frontmatter.title}
              description={post.frontmatter.description || post.excerpt}
            />
            <div>
              <section
                dangerouslySetInnerHTML={{ __html: post.html }}
                className={classes.description}
              />
              <hr className={classes.hr} />
            </div>

            <nav>
              <ul className={classes.listContainer}>
                <li className={classes.link}>
                  {previous && (
                    <Link
                      to={previous.fields.slug}
                      rel="prev"
                      className={classes.link}
                    >
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li className={classes.link}>
                  {next && (
                    <Link
                      to={next.fields.slug}
                      rel="next"
                      className={classes.link}
                    >
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query Blog($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        date(formatString: "DD MMM, YYYY")
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
