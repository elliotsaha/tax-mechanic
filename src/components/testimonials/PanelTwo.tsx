import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import FormatQuoteIcon from "@material-ui/icons/FormatQuote"

const useStyles = makeStyles((theme: any) =>
  createStyles({
    root: {
      backgroundColor: "#0c0c0c",
      color: "white",
      fontFamily: "Gilroy, sans-serif",
      overflow: "auto",
      paddingTop: "1.2rem",
      paddingBottom: "1.2rem",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      maxWidth: "80rem",
      [theme.breakpoints.down(750)]: {
        gridTemplateColumns: "1fr",
      },
    },
    icon: {
      transform: "rotate(180deg)",
      fontSize: "4rem",
      position: "absolute",
      top: "-2rem",
      left: "1.2rem",
      color: "#90663E",
    },
    cardContainer: {
      border: "0.1rem solid #E1C1A4",
      maxWidth: "35rem",
      position: "relative",
      padding: "2rem",
      margin: "1.5rem",
      borderRadius: "0.75rem",
      color: "#CEB095",
    },
    markdownBody: {},
    provider: {
      color: "#A87F58",
      fontWeight: "bolder",
    },
    line: {
      marginTop: "0.8rem",
      marginBottom: "1.1rem",
      width: "6rem",
      backgroundColor: "#90663E",
      height: "0.25rem",
    },
    gridContainer: {
      display: "flex",
      justifyContent: "center",
    },
  })
)
export default function PanelTwo() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(content)/(testimonials)/" } }
        sort: { fields: [frontmatter___provider], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              provider
              location
            }
            rawMarkdownBody
          }
        }
      }
    }
  `)
  console.log(data)
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.gridContainer}>
        <div className={classes.grid}>
          {data.allMarkdownRemark.edges.map((data: any, index: any) => {
            return (
              <div key={index} className={classes.cardContainer}>
                <FormatQuoteIcon className={classes.icon} />
                <div className={classes.markdownBody}>
                  {data.node.rawMarkdownBody}
                </div>
                <div className={classes.line} />
                <div className={classes.provider}>
                  {data.node.frontmatter.provider}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
