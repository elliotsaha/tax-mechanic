import React from "react"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { Link, graphql, useStaticQuery } from "gatsby"
import Button from "@material-ui/core/Button"
import Img from "gatsby-image"

const useStyles = makeStyles((theme: any) =>
  createStyles({
    root: {
      paddingTop: "3rem",
      paddingBottom: "3rem",
      backgroundColor: "black",
      color: "white",
      fontFamily: "Gilroy, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      position: "relative",
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
      [theme.breakpoints.down(400)]: {
        fontSize: "0.9rem",
        padding: "0.65rem",
      },
    },
    para: {
      maxWidth: "45rem",
      textAlign: "center",
      fontSize: "1.1rem",
      paddingBottom: '1.5rem',
      [theme.breakpoints.down(910)]: {
        marginRight: '2.5rem',
        marginLeft: '2.5rem',
      },
      [theme.breakpoints.down(400)]: {
        fontSize: '0.9rem',
      },
    },
    title: {
      fontSize: "4rem",
      fontWeight: "bolder",
      lineHeight: "4.5rem",
      paddingBottom: "1rem",
      textAlign: 'center',
      [theme.breakpoints.down(1100)]: {
        marginRight: '1.5rem',
        marginLeft: '1.5rem',
      },
      [theme.breakpoints.down(666)]: {
        fontSize: '3.25rem',
        lineHeight: "3.75rem",
      },
      [theme.breakpoints.down(545)]: {
        fontSize: '3rem',
        lineHeight: "3.5rem",
      },
      [theme.breakpoints.down(440)]: {
        fontSize: '2.5rem',
        lineHeight: "3rem",
      },
      [theme.breakpoints.down(380)]: {
        fontSize: '2rem',
        lineHeight: "2.5rem",
      },
    },
    hr: {
      border: ".13rem solid #FEA700",
      backgroundColor: "#FEA700",
      paddingRight: "10rem",
      paddingLeft: "10rem",
      [theme.breakpoints.down(618)]: {
        paddingRight: "7rem",
      paddingLeft: "7rem",
      },
      [theme.breakpoints.down(420)]: {
        paddingRight: "5rem",
      paddingLeft: "5rem",
      },
      [theme.breakpoints.down(400)]: {
        paddingRight: "2.5rem",
      paddingLeft: "2.5rem",
      },
    },
    name: {
      fontWeight: 500,
      paddingBottom: '1.5rem',
      [theme.breakpoints.down(400)]: {
        fontSize: '0.9rem',
      },
    },
    link: {
      textDecoration: 'none'
    },
  })
)
export default function PanelTwo() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.title}>What Our Clients Say About Us</div>
      <div className={classes.para}>
        “I have had an excellent experience working with the Tax Mechanic to get
        my taxes under control. I had not filed for a number of years, and the
        guilt of not doing so was weighing me down. Fortunately after a quick
        call with David, one of the co-founders, everything was set up and dealt
        with quickly and professionally. I am so happy that they have taken care
        of my tax headache for me. I highly recommend their services!”
      </div>

      <hr className={classes.hr} />

      <div className={classes.name}>Brad J, Ontario</div>
      <Link to="/testimonials" className={classes.link}>
        <Button className={classes.button}>
          Read More Testimonials &rarr;
        </Button>
      </Link>
    </div>
  )
}
