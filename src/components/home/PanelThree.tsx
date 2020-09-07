import React from "react"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Card from "./Card"
const useStyles = makeStyles((theme: any) =>
  createStyles({
    root: {
      paddingTop: "3rem",
      fontFamily: "Gilroy, sans-serif",
      position: "relative",
      paddingBottom: "3rem",
    },
    mainTitle: {
      fontWeight: "bolder",
      textAlign: "center",
      color: "white",
      fontSize: "4.5rem",
      marginBottom: "4rem",
      lineHeight: "3rem",
      [theme.breakpoints.down(1100)]: {
        marginRight: "1.5rem",
        marginLeft: "1.5rem",
      },
      [theme.breakpoints.down(666)]: {
        fontSize: "3.5rem",
        lineHeight: "4rem",
      },
      [theme.breakpoints.down(545)]: {
        fontSize: "3rem",
        lineHeight: "3.5rem",
      },
      [theme.breakpoints.down(440)]: {
        fontSize: "2.5rem",
        lineHeight: "3rem",
      },
      [theme.breakpoints.down(380)]: {
        fontSize: "2rem",
        lineHeight: "2.5rem",
      },
    },
    cardTitle: {},
    cardParagraph: {
      color: 'white',
    },
    cardRoot: {
      backgroundColor: '#000000',
      color: 'white',
    },
    imageContainer: {
      overflow: "hidden",
    },
    imageOuter: {
      position: "absolute",
      width: "100%",
      left: "50%",
      top: "50%",
      height: "105%",
      transform: "translate(-50%, -50%)",
      zIndex: -1,
    },
    image: {
      height: "100%",
      objectFit: "cover",
      filter: "brightness(40%)",
    },
    card: {
      maxWidth: 345,
    },
    cardMedia: {
      height: 140,
      filter: "brightness(80%)",
    },

    title: {
      marginBottom: '1.5rem',
      paddingTop: "9rem",
      textTransform: "uppercase",
      textAlign: "center",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bolder",
      color: "white",
      letterSpacing: "0.15rem",
      fontSize: "2rem",
      lineHeight: '3rem',
      [theme.breakpoints.down(500)]: {
        paddingTop: "7rem",
        fontSize: "1.7rem",
      },
      [theme.breakpoints.down(380)]: {
        paddingTop: "7rem",
        fontSize: "1.4rem",
      },
      [theme.breakpoints.down(310)]: {
        paddingTop: "10rem",
        fontSize: "1.1rem",
      },
    },
  })
)
export default function PanelFour() {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "TopWork.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
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
      <div className={classes.mainTitle}>Our Services</div>

      <div>
      <Card
            image={data.image.childImageSharp.fluid}
            title={"Consultation"}
            paragraph={
              "Let’s talk! We’ll find out important information about your specific tax issues to find the best tax solution for you!"
            }
            link={"service"}
            titleModifier={classes.title}
          />
      </div>


    </div>
  )
}
