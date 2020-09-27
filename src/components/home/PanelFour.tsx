import React from "react"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import Slider from "react-slick"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Button from "@material-ui/core/Button"
const useStyles = makeStyles((theme: any) =>
  createStyles({
    root: {
      overflowX: "hidden",
      background: "black",
      color: "white",
      paddingTop: "3rem",
      fontFamily: "Gilroy, sans-serif",
    },
    mainTitle: {
      fontWeight: "bolder",
      textAlign: "center",
      fontSize: "4.5rem",
      marginBottom: "4rem",
      lineHeight: "3rem",
      [theme.breakpoints.down(1100)]: {
        marginRight: '1.5rem',
        marginLeft: '1.5rem',
      },
      [theme.breakpoints.down(666)]: {
        fontSize: '3.5rem',
        lineHeight: "4rem",
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
    cardRoot: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      [theme.breakpoints.down(500)]: {
        paddingRight: '2rem',
        paddingLeft: '2rem',
      },
    },
    cardInner: {
      maxWidth: "25rem",
      marginLeft: "auto",
      marginRight: "auto",
      [theme.breakpoints.down(1530)]: {
        maxWidth: "20rem",
      },
      [theme.breakpoints.down(1266)]: {
        maxWidth: "25rem",
      },
      [theme.breakpoints.down(1100)]: {
        maxWidth: "20rem",
      },
    },
    cardImage: {
      borderRadius: "360rem",
      borderStyle: "solid",
      borderWidth: "7px",
      borderColor: "#FEA700",
    },
    cardTitle: {
      fontWeight: 600,
      fontSize: "2.3rem",
      marginTop: "2.5rem",
      lineHeight: "3rem",
      whiteSpace: "nowrap",
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.down(500)]: {
        whiteSpace: 'normal',
        fontSize: '2rem',
        lineHeight: '2.5rem',
      },
    },
    cardParagraph: {
      fontSize: "0.95rem",
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
    buttonContainer: {
      paddingTop: "3rem",
      paddingBottom: "3rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "auto",
      marginRight: "auto",
    },
    link: {
      textDecoration: 'none'
    },
  })
)

export default function PanelFour() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(content)/(ourTeam)/" } }
        sort: { fields: [frontmatter___title], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              image {
                childImageSharp {
                  fluid(maxWidth: 600, quality: 75) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            rawMarkdownBody
          }
        }
      }
    }
  `)
  const classes = useStyles()
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 1000,
    centerMode: true,
    centerPadding: "0px",
    touchMove: false,
    swipe: false,
    responsive: [
      {
        breakpoint: 1266,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          pauseOnHover: false,
          autoplaySpeed: 1000,
          centerMode: true,
          centerPadding: "0px",
          touchMove: false,
          swipe: false,
        },
      },
      {
        breakpoint: 820,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          pauseOnHover: false,
          autoplaySpeed: 1000,
          centerMode: true,
          centerPadding: "0px",
          touchMove: false,
          swipe: false,
        },
      },
    ],
  }

  return (
    <div className={classes.root}>
      <div className={classes.mainTitle}>Meet The Team</div>
      <Slider {...settings}>
        {data.allMarkdownRemark.edges.map(obj => {
          return (
            <div key={obj.node.frontmatter.title} className={classes.cardRoot}>
              <div className={classes.cardInner}>
                <div>
                  <Img
                    className={classes.cardImage}
                    fluid={obj.node.frontmatter.image.childImageSharp.fluid}
                    alt="Team Member"
                  />
                </div>
                <div className={classes.cardTitle}>
                  {obj.node.frontmatter.title}
                </div>
                <div className={classes.cardParagraph}>
                  {obj.node.rawMarkdownBody.replace(/^(.{230}[^\s]*).*/, "$1")}
                  ...
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
      <div className={classes.buttonContainer}>
        <Link to="/team" className={classes.link}>
          <Button className={classes.button}>Read More &rarr;</Button>
        </Link>
      </div>
    </div>
  )
}
