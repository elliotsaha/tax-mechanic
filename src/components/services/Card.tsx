import React from "react"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"
import Img from "gatsby-image"
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {},
    card: {
      position: "relative",
      width: "30rem",
      overflow: "hidden",
      backgroundColor: "#101111",
      minHeight: "34rem",
      fontFamily: "Gilroy, sans-serif",
      borderRadius: "1.5rem",
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
      zIndex: 2,
      [theme.breakpoints.down(1260)]: {
        width: "22rem",
        minHeight: "38rem",
      },
      [theme.breakpoints.down(1111)]: {
        width: "30rem",
        minHeight: '1rem',
      },
      [theme.breakpoints.down(606)]: {
        width: "25rem",
      },
      [theme.breakpoints.down(486)]: {
        width: "22rem",
      },
      [theme.breakpoints.down(400)]: {
        width: "18rem",
      },
      [theme.breakpoints.down(320)]: {
        width: "15rem",
      },
    },
    imageContainer: {
      position: "absolute",
      zIndex: -1,
    },
    image: {
      maxHeight: "20rem",
      width: "30rem",
      objectFit: "cover",
      filter: "brightness(40%)",
      margin: 0,
      position: "absolute",
      zIndex: 1,
    },
    text: {
      zIndex: -2,
    },
    title: {
      paddingTop: "7rem",
      lineHeight: '2.2rem',
      marginRight: '1rem',
      wordBreak: 'break-word',
      marginLeft: '1rem',
      textTransform: "uppercase",
      textAlign: "center",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bolder",
      color: "white",
      letterSpacing: "0.15rem",
      fontSize: "1.7rem",
      [theme.breakpoints.down(1260)]: {
        
      },
      [theme.breakpoints.down(500)]: {
        paddingTop: "6.5rem",
        fontSize: "1.5rem",
        letterSpacing: 0,
      },
      [theme.breakpoints.down(340)]: {
        paddingTop: "6rem",
        fontSize: "1.25rem",
        lineHeight: '1.75rem',
      },
    },
    mainText: {
      marginTop: "7rem",
      zIndex: 0,
      backgroundColor: "#101111",
      color: "white",
      padding: "1.5rem",
    },
    readMore: {
      position: "absolute",
      bottom: "2rem",
      color: "#FEA700",
      fontWeight: 800,
      textTransform: "uppercase",
      fontSize: "1rem",
      display: "flex",
      alignItems: "center",
      margin: 0,
      paddingTop: "2rem",
      [theme.breakpoints.down(1111)]: {
        position: 'relative',
        paddingTop: "4rem",
        bottom: 0,
      },
    },
    icon: {
      verticalAlign: "middle",
      fontSize: "0.85rem",
      marginBottom: "0.2rem",
      marginLeft: "0.5rem",
    },
    link: {
      textDecoration: "none",
    },
    para: {
      fontSize: "1.25rem",
      lineHeight: "2rem",
    },
  })
)

export default function PanelTwo({
  image,
  title,
  paragraph,
  link,
}: any): JSX.Element {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <div className={classes.imageContainer}>
          <Img fluid={image} className={classes.image} />
        </div>

        <div className={classes.text}>
          <div className={classes. title}>{title}</div>
          <div className={classes.mainText}>
            <div className={classes.para}>{paragraph}</div>

            <Link to={link} className={classes.link}>
              <div className={classes.readMore}>
                <span>Learn More</span>
                <span>
                  <ArrowForwardIosRoundedIcon className={classes.icon} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
