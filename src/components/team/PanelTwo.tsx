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
      paddingTop: "1.5rem",
      fontFamily: "Gilroy, sans-serif",
    },
    cardRoot: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      marginBottom: '3rem',
      [theme.breakpoints.down(500)]: {
        paddingRight: "2rem",
        paddingLeft: "2rem",
      },
    },
    cardInner: {
      maxWidth: "18rem",
      marginLeft: "auto",
      marginRight: "auto",
      [theme.breakpoints.down(1530)]: {
        maxWidth: "18rem",
      },
      [theme.breakpoints.down(1266)]: {
        maxWidth: "19rem",
      },
      [theme.breakpoints.down(1100)]: {
        maxWidth: "17rem",
      },
    },
    cardImage: {
      borderRadius: "360rem",
      borderStyle: "solid",
      borderWidth: "7px",
      borderColor: "#FEA700",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      
      maxWidth: "1900px",
      marginLeft: "auto",
      marginRight: "auto",
      [theme.breakpoints.down(1530)]: {
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr",
      },
    },
    gridChild: {
      display: "flex",
      marginRight: "1.5rem",
      marginLeft: "1.5rem",
      flexDirection: "row",
      marginBottom: "1.25rem",
      marginTop: "1.25rem",
      [theme.breakpoints.down(1530)]: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '2rem',
      },
      [theme.breakpoints.down(924)]: {
        flexDirection: 'column',
        textAlign: 'center',
      },
    },
    gridImage: {
      borderRadius: "360rem",
      borderStyle: "solid",
      borderWidth: "0.4rem",
      borderColor: "#FEA700",
      width: "15rem",
      [theme.breakpoints.down(924)]: {
        marginBottom: '2rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '17rem',
      },
      [theme.breakpoints.down(660)]: {
        width: '15rem',
      },
    },
    gridTitle: {
      fontWeight: "bold",
      fontSize: "2rem",
      lineHeight: "2.5rem",
      [theme.breakpoints.down(660)]: {
        fontSize: '2.3rem',
        lineHeight: '3rem',
      },
    },
    gridMarkdownBody: {
      maxWidth: "30rem",
      [theme.breakpoints.down(660)]: {
        fontSize: '0.925rem'
      },
    },
    gridTextContainer: {
      marginLeft: "2rem",
      [theme.breakpoints.down(924)]: {
        margin: 0,
      },
      [theme.breakpoints.down(660)]: {
        marginRight: '1.5rem',
        marginLeft: '1.5rem',
      },
    },
  })
)

export default function PanelTwo() {
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
                  fluid(maxWidth: 450, quality: 100) {
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
      <Slider {...settings}>
        {data.allMarkdownRemark.edges.map(obj => {
          return (
            <div key={obj.node.frontmatter.title} className={classes.cardRoot}>
              <div className={classes.cardInner}>
                <div>
                  <Img
                    className={classes.cardImage}
                    fluid={obj.node.frontmatter.image.childImageSharp.fluid}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
      <div className={classes.grid}>
        {data.allMarkdownRemark.edges.map(obj => {
          return (
            <div key={obj.node.frontmatter.title} className={classes.gridChild}>
              <div>
                <Img
                  className={classes.gridImage}
                  fluid={obj.node.frontmatter.image.childImageSharp.fluid}
                />
              </div>
              <div className={classes.gridTextContainer}>
                <div className={classes.gridTitle}>
                  {obj.node.frontmatter.title}
                </div>
                <div className={classes.gridMarkdownBody}>
                  {obj.node.rawMarkdownBody}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
