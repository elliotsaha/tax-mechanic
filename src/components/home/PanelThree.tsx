import React, { useRef, useEffect } from "react"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { Link, graphql, useStaticQuery } from "gatsby"
import { useIntersection } from "react-use"
import { gsap } from "gsap"
import Img from "gatsby-image"
import Card from "./Card"
const useStyles = makeStyles((theme: any) =>
  createStyles({
    root: {
      paddingTop: "5rem",
      fontFamily: "Gilroy, sans-serif",
      position: "relative",
      paddingBottom: "7rem",
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
      color: "white",
    },
    cardRoot: {
      backgroundColor: "#000000",
      color: "white",
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
      marginBottom: "1.5rem",
      paddingTop: "9rem",
      textTransform: "uppercase",
      textAlign: "center",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bolder",
      color: "white",
      letterSpacing: "0.15rem",
      fontSize: "2rem",
      lineHeight: "3rem",
      [theme.breakpoints.down(1260)]: {
        paddingTop: "7rem",
        fontSize: "1.7rem",
      },
      [theme.breakpoints.down(1111)]: {
        paddingTop: "7rem",
        fontSize: "2rem",
      },
      [theme.breakpoints.down(500)]: {
        paddingTop: "7rem",
        fontSize: "1.7rem",
      },
      [theme.breakpoints.down(380)]: {
        paddingTop: "7rem",
        fontSize: "1.4rem",
      },
    },
    cardContainers: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "stretch",
      [theme.breakpoints.down(1111)]: {
        flexDirection: "column",
        "& > div": {
          marginLeft: "auto",
          marginRight: "auto",
          margin: "1rem",
        },
      },
    },
    maxWidthCardContainers: {
      maxWidth: "100rem",
      marginLeft: "auto",
      marginRight: "auto",
    },
    middleCard: {},
    normalCard: {
      paddingTop: "3rem",
      [theme.breakpoints.down(1111)]: {
        paddingTop: 0,
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

  // Defining ref for intersection observer
  const sectionRef3 = useRef(null)

  const intersection = useIntersection(sectionRef3, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  })

  useEffect(() => {
    // Fade in animation when scroll in
    const fadeIn = (element: any) => {
      gsap.to(element, 1, {
        opacity: 1,
        y: -0,
        ease: "power3.out",
        stagger: {
          amount: 0,
        },
      })
    }

    // Fade out animation when scroll out
    const fadeOut = (element: any) => {
      gsap.to(element, 1, {
        opacity: 0,
        y: -20,
        ease: "power3.out",
      })
    }
    intersection && intersection.intersectionRatio < 0.2
      ? // Not Reached
        fadeOut(".fadeIn3")
      : fadeIn(".fadeIn3")
  }, [intersection])

  const classes = useStyles()
  return (
    <div className={classes.root} ref={sectionRef3}>
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
      <div className="fadeIn3">
        <div className={classes.mainTitle}>Our Services</div>
      </div>

      <div className={classes.maxWidthCardContainers}>
        <div className={classes.cardContainers}>
          <div className="fadeIn3">
            <div className={classes.normalCard}>
              <Card
                image={data.image.childImageSharp.fluid}
                title={"Consultation"}
                paragraph={
                  "Let’s talk! We’ll find out important information about your specific tax issues to find the best tax solution for you!"
                }
                link={"services"}
                titleModifier={classes.title}
              />
            </div>
          </div>
          <div className="fadeIn3">
            <div className={classes.middleCard}>
              <Card
                image={data.image.childImageSharp.fluid}
                title={"Communication"}
                paragraph={
                  "The professional tax debt specialists in our network will speak with the CRA on your behalf. They will deal with the CRA collection calls."
                }
                link={"services"}
                titleModifier={classes.title}
              />
            </div>
          </div>
          <div className="fadeIn3">
            <div className={classes.normalCard}>
              <Card
                image={data.image.childImageSharp.fluid}
                title={"Compensation"}
                paragraph={
                  "Our experts know the ins and outs of the CRA. Through aggressive negotiations with the CRA, we’ll reach a settlement that’s within your financial means."
                }
                link={"services"}
                titleModifier={classes.title}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
