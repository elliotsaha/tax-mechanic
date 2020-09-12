import React from 'react'
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Button from "@material-ui/core/Button"
const useStyles = makeStyles((theme: any) =>
  createStyles({
    root: {
        backgroundColor: 'black',
    },
  }))
export default function PanelTwo() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            
        </div>
    )
}
