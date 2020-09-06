import React from "react"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import Slider from "react-slick"

const useStyles = makeStyles((theme: any) => createStyles({
  root: {
    overflowX: 'hidden',
  },
}))

export default function PanelThree() {
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
    autoplaySpeed: 1000
  }

  return (
    <div className={classes.root}>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  )
}
