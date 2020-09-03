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
      top: "50%",
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
      letterSpacing: "0.1rem",
      maxWidth: "40rem",
      marginLeft: "0.75rem",
      width: "100%",
      height: "100vh",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bolder",
      fontSize: "5.5rem",
      lineHeight: "6rem",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginTop: "auto",
      paddingRight: "0.5rem",
      paddingLeft: "0.5rem",
      [theme.breakpoints.down(872)]: {
        marginLeft: 0,
        alignItems: "center",
        textAlign: "center",
        maxWidth: "50rem",
        fontSize: "4rem",
        lineHeight: "4.5rem",
      },
      [theme.breakpoints.down(524)]: {
        fontSize: "3rem",
        lineHeight: "3.5rem",
      },
      [theme.breakpoints.down(405)]: {
        fontSize: "2.5rem",
        lineHeight: "3rem",
      },
      [theme.breakpoints.down(350)]: {
        fontSize: "2.3rem",
        lineHeight: "2.8rem",
      },
      [theme.breakpoints.down(320)]: {
        fontSize: "2rem",
        lineHeight: "2.5rem",
      },
    },
    buttonContainer: {
      lineHeight: 0,
      marginTop: "0.8rem",
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
    textContainer: {
      display: "block",
      [theme.breakpoints.down(872)]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },
  })
)
export default function PanelOne() {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "TopWork.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1300, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <div className={classes.imageOuter}>
          <Img
            fluid={data.image.childImageSharp.fluid}
            className={classes.image}
            loading="eager"
            alt="Landing Page"
          />
        </div>
      </div>
      <div className={classes.textContainer}>
        <div className={classes.text}>
          We Fix Your Tax Problems.
          <div className={classes.buttonContainer}>
            <Link to="/contact">
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
