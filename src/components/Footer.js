import React from "react"
import { Link } from "gatsby"
import Logo from "../images/TaxMechanicLogo.png"
import { createStyles, makeStyles, useTheme } from "@material-ui/core/styles"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: "black",
      color: "white",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bold",
      paddingTop: "1rem",
      paddingBottom: "2rem",
    },
    inner: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      paddingBottom: '1rem',
      [theme.breakpoints.down(1066)]: {
        flexDirection: 'column-reverse',
        paddingLeft: '2rem',
        paddingRight: '2rem',
      },
    },
    image: {
      width: "13rem",
      margin: 0,
      [theme.breakpoints.down(1066)]: {
        display: 'none',
      },
    },
    textBlocks: {
      paddingTop: "1.25rem",
    },
    bottom: {
        textAlign: 'center',
        [theme.breakpoints.down(1066)]: {
            textAlign: 'left',
            paddingLeft: '2rem',
            maxWidth: "25rem",
            paddingRight: '2rem',
          },
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
  })
)

export default function Footer() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <div className={classes.textBlocks}>
          Location
          <br />
          180 John Street
          <br />
          Toronto, ON
          <br />
          M5T 1X5
        </div>
        <div className={classes.textBlocks}>
          TEL: 647-499-5693
          <br />
          FAX: 647-494-0169
          <br />
          <Link to="/privacypolicy" className={classes.link}>Privacy Policy</Link>
        </div>
        <div className={classes.textBlocks}>
          Email: <br />
          david@taxmechanic.ca
        </div>
        <div>
          <img src={Logo} alt="Logo" className={classes.image} />
        </div>
      </div>
      <div className={classes.bottom}>
        &copy; {new Date().getFullYear()} Tax Filing Services Toronto –
        Taxmechanic.ca. All Rights Reserved.
      </div>
    </div>
  )
}
