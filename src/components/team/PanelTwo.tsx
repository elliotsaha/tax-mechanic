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
    cardRoot: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      [theme.breakpoints.down(500)]: {
        paddingRight: "2rem",
        paddingLeft: "2rem",
      },
    },
    cardInner: {
      maxWidth: "22rem",
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
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
    },
    gridChild: {
      display: 'flex',
      flexDirection: 'row',

    },
    gridImage: {
      borderRadius: "360rem",
      borderStyle: "solid",
      borderWidth: "0.4rem",
      borderColor: "#FEA700",
      width: "15rem",
    },
    gridTitle: {
      fontWeight: 'bold',
      fontSize: '2rem',
      lineHeight: '2.5rem',
    },  
    gridMarkdownBody: {
      maxWidth: '30rem',
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
                <div className={classes.gridTitle}>{obj.node.frontmatter.title}</div>
                <div className={classes.gridMarkdownBody}>{obj.node.rawMarkdownBody}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
