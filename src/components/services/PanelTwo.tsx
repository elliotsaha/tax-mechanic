import React from "react"
import { createStyles, makeStyles, Theme as AugmentedTheme } from "@material-ui/core/styles"
import { graphql, useStaticQuery } from "gatsby"
import Card from "./Card"
const useStyles = makeStyles((theme: AugmentedTheme) =>
  createStyles({
    root: {
      backgroundColor: "black",
      paddingTop: "3rem",
      paddingBottom: "3rem",
    },
    grid: {
      display: "grid",
      maxWidth: "100rem",
      marginRight: "auto",
      marginLeft: "auto",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridGap: "2rem",
      [theme.breakpoints.down(1800)]: {
        gridTemplateColumns: '1fr 1fr',
        maxWidth: '60rem',
      },
      [theme.breakpoints.down(1260)]: {
        gridTemplateColumns: '1fr 1fr',
        maxWidth: '50rem',
      },
      [theme.breakpoints.down(1111)]: {
        gridTemplateColumns: '1fr',
        maxWidth: '50rem',
      },
    },
    flexContainer: {
      marginRight: '2rem',
      marginLeft: '2rem',
      [theme.breakpoints.down(1111)]: {
        margin: 0,
      },
    },
    cardContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
)
export default function PanelTwo(): JSX.Element {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(content)/(services)/" } }
        sort: { fields: [frontmatter___title], order: ASC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            excerpt
            frontmatter {
              title
              image {
                childImageSharp {
                  fluid(maxWidth: 600, quality: 65) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            html
          }
        }
      }
    }
  `)
  return (
    <div className={classes.root}>
      <div className={classes.flexContainer}>
        <div className={classes.grid}>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <div
                key={node.frontmatter.title}
                className={classes.cardContainer}
              >
                <Card
                  image={node.frontmatter.image.childImageSharp.fluid}
                  title={node.frontmatter.title}
                  paragraph={node.excerpt}
                  link={node.fields.slug}
                ></Card>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
