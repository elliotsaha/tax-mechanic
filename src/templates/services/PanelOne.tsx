import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Link, graphql, useStaticQuery } from "gatsby"
import Button from "@material-ui/core/Button"
import Img from "gatsby-image"
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      overflow: "hidden",
      position: "relative",
      backgroundColor: "#E1E1EB",
      zIndex: 1,
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
      flexDirection: "column",
      overflow: "hidden",
      textTransform: "uppercase",
      letterSpacing: "1.5rem",
      marginLeft: "0.75rem",
      textAlign: "center",
      width: "100%",
      height: "87vh",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bolder",
      fontSize: "5rem",
      lineHeight: "6rem",
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
        letterSpacing: "1rem",
      },
      [theme.breakpoints.down(680)]: {
        fontSize: "2rem",
        lineHeight: "3rem",
      },
      [theme.breakpoints.down(530)]: {
        fontSize: "2.5rem",
        lineHeight: "3rem",
        letterSpacing: "0.15rem",
        marginLeft: "0.05rem",
      },
    },
    buttonContainer: {
      lineHeight: 0,
      marginTop: "0.8rem",
      textAlign: "center",
    },
    button: {
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 600,
      color: "white",
      background: "linear-gradient(to right, #FEA700, #d98e00) no-repeat",
      padding: "0.8rem",
      textTransform: "none",
      fontSize: "1rem",
      paddingRight: "1.25rem",
      paddingLeft: "1.25rem",
      [theme.breakpoints.down(872)]: {
        fontSize: "0.9rem",
        padding: "0.65rem",
      },
    },
    link: {
      textDecoration: 'none'
    },
  })
)
export default function PanelOne({ title, image }: any) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <div className={classes.imageOuter}>
          <Img
            fluid={image}
            className={classes.image}
            loading="eager"
            alt="Services"
          />
        </div>
      </div>
      <div>
        <div className={classes.text}>
          {title}{" "}
          <div className={classes.buttonContainer}>
            <Link to="/contact" className={classes.link}>
              <Button className={classes.button}>
                Book a Free Consultation &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
