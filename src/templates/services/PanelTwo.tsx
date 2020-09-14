import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Link, graphql, useStaticQuery } from "gatsby"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: "#0c0c0c",
      overflow: "auto",
      paddingTop: '2rem',
      paddingBottom: '2rem',
    },
    inner: {
        maxWidth: '42.5rem',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    section: {
      color: "#CEB095",
      marginLeft: '2.5rem',
      marginRight: '2.5rem',
      fontFamily: "Gilroy, sans-serif",
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
    },
  })
)
export default function PanelTwo({ data }: any) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <div
          dangerouslySetInnerHTML={{ __html: data.html }}
          className={classes.section}
        />
      </div>
    </div>
  )
}
