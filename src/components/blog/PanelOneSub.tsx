import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      overflow: "hidden",
      position: "relative",
      backgroundColor: "#E1E1EB",
      zIndex: -1,
    },
    imageContainer: {
      overflow: "hidden",
    },
    imageOuter: {
      position: "absolute",
      width: "100%",
      left: "50%",
      top: "45%",
      height: "100%",
      transform: "translate(-50%, -50%)",
      zIndex: -1,
    },
    image: {
      height: "105%",
      objectFit: "cover",
      filter: "brightness(40%)",
    },
    text: {
      overflow: "hidden",
      textTransform: "uppercase",
      letterSpacing: "1rem",
      textAlign: "center",
      width: "100%",
      height: "87vh",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bolder",
      fontSize: "3.5rem",
      lineHeight: "4.5rem",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "auto",
      paddingRight: "0.5rem",
      paddingLeft: "0.5rem",
      [theme.breakpoints.down(950)]: {
        fontSize: "2.5rem",
        lineHeight: "3rem",
        letterSpacing: "0.3rem",
      },
      [theme.breakpoints.down(680)]: {
        fontSize: "2rem",
        lineHeight: "3rem",
      },
      [theme.breakpoints.down(530)]: {
        fontSize: "1.5rem",
        lineHeight: "2rem",
        letterSpacing: "0.1rem",
        marginLeft: "0.05rem",
      },
    },
    date: {
      color: 'white',
      textAlign: 'center',
      marginBottom: '3rem',
      fontFamily: 'Gilroy, sans-serif',
      fontWeight: 'bold',
    },
  })
)
export default function PanelOne({ title, date, image }: any) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <div className={classes.imageOuter}>
          <Img
            fluid={image}
            className={classes.image}
            loading="eager"
            alt="City"
          />
        </div>
      </div>
      <div className={classes.text}>{title}</div>
      <div className={classes.date}>{date}</div>
    </div>
  )
}
