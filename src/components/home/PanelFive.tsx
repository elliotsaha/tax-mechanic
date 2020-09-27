import React, { useState, useRef, useEffect } from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import { useIntersection } from "react-use"
import { gsap } from "gsap"
import Button from "@material-ui/core/Button"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Error from "@material-ui/icons/Error"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    aboveRoot: {
      background: "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
    },
    root: {
      overflow: "auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      maxWidth: "200rem",
    },
    button: {
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bold",
      color: "white",
      padding: "0.7rem",
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
      display: "block",
      textTransform: "none",
      transition: "all 1s ease",
      background:
      "linear-gradient(to right, #FEA700, #d98e00) no-repeat",
      "&:hover": {
        transition: "all 1s ease",
        background:
        "linear-gradient(to right, #FEA700, #d98e00) no-repeat",
      },
    },
    textField: {
      paddingBottom: "1.5rem",
      display: "block",
      "& label.Mui-focused": {
        color: "#FEA700",
        fontFamily: "Gilroy, sans-serif",
        fontWeight: "bold",
      },
      "& label": {
        color: "#FEA700",
        fontFamily: "Gilroy, sans-serif",
        fontWeight: "bold",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#FEA700",
      },
      "& .MuiOutlinedInput-root": {
        width: "29rem",
        [theme.breakpoints.down(600)]: {
          width: "20rem",
        },
        [theme.breakpoints.down(360)]: {
          width: "16rem",
        },
        "& fieldset": {
          borderColor: "#FEA700",
          borderWidth: "0.2rem",
        },
        "&:hover fieldset": {
          borderColor: "#FEA700",
          borderWidth: "0.2rem",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#d98e00",
          borderWidth: "0.2rem",
        },
      },
    },
    textFieldError: {
      paddingBottom: "1.5rem",
      display: "block",
      "& label.Mui-focused": {
        color: "#FEA700",
        fontFamily: "Gilroy, sans-serif",
        fontWeight: "bold",
      },
      "& label": {
        color: "#FEA700",
        fontFamily: "Gilroy, sans-serif",
        fontWeight: "bold",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#FEA700",
      },
      "& .MuiOutlinedInput-root": {
        width: "29rem",
        [theme.breakpoints.down(600)]: {
          width: "20rem",
        },
        "& fieldset": {
          borderColor: "#FEA700",
          borderWidth: "0.2rem",
        },
        "&:focus fieldset": {
          borderColor: "#FEA700",
          borderWidth: "0.2rem",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#FEA700",
          borderWidth: "0.2rem",
        },
      },
    },
    helperText: {
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bold",
    },
    formContainer: {
      margin: "auto",
      paddingTop: "3rem",
      paddingBottom: "3rem",
      paddingRight: "3rem",
      [theme.breakpoints.down(1270)]: {
        padding: 0,
        margin: "auto",
        gridColumnStart: "1",
        gridColumnEnd: "3",
        paddingTop: "3.5rem",
        paddingBottom: "3.5rem",
      },
    },
    title: {
      gridColumnStart: "1",
      gridColumnEnd: "3",
      textAlign: "center",
      paddingTop: "2rem",
      lineHeight: "8rem",
      color: "white",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bolder",
      fontSize: "6rem",
      [theme.breakpoints.down(430)]: {
        fontSize: "4rem",
        lineHeight: "5rem",
      },
    },
    video: {
      paddingLeft: "2.5rem",

      width: "34rem",
      height: "24.9rem",
      [theme.breakpoints.down(1270)]: {
        display: "none",
      },
    },
    error: {
      verticalAlign: "middle",
      width: "1rem",
      marginRight: "0.5rem",
      marginLeft: "-0.8rem",
    },
    videoContainer: {
      marginBottom: "auto",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "2.6rem",
    },
    imageContainer: {
      overflow: "hidden",
    },
    imageOuter: {
      position: "absolute",
      width: "100%",
      left: "50%",
      top: "50%",
      height: "106%",
      transform: "translate(-50%, -50%)",
      zIndex: -1,
    },
    image: {
      height: "100%",
      objectFit: "cover",
      filter: "brightness(30%)",
    },
  })
)

export default function PanelSeven() {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "contact.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500, quality: 65) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const classes = useStyles()

  // States for form fields and error handling
  const [name, setName] = useState("")
  const [isNameError, setIsNameError] = useState(false)
  const [nameError, setNameError] = useState(<React.Fragment />)

  const [email, setEmail] = useState("")
  const [isEmailError, setIsEmailError] = useState(false)
  const [emailError, setEmailError] = useState(<React.Fragment />)

  const [paragraph, setParagraph] = useState("")
  const [isParagraphError, setIsParagraphError] = useState(false)
  const [paragraphError, setParagraphError] = useState(<React.Fragment />)

  // Setting the form field to state
  const onNameChange = (event: any) => {
    setName(event.target.value)
  }

  const onEmailChange = (event: any) => {
    setEmail(event.target.value)
  }

  const onParagraphChange = (event: any) => {
    setParagraph(event.target.value)
  }

  // On submit function function for error handling
  const onSubmit = (e: any) => {
    setIsEmailError(false)
    setIsNameError(false)
    setIsParagraphError(false)
    if (name === "") {
      e.preventDefault()
      setIsNameError(true)
      setNameError(
        <div>
          <Error className={classes.error} />
          <span>Required Field</span>
        </div>
      )
    }
    // Regex expression to know if email is invalid
    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      ) !== true
    ) {
      e.preventDefault()
      setIsEmailError(true)
      setEmailError(
        <div>
          <Error className={classes.error} />
          <span>Invalid Email</span>
        </div>
      )
    }
    if (paragraph === "") {
      e.preventDefault()
      setIsParagraphError(true)
      setParagraphError(
        <div>
          <Error className={classes.error} />
          <span>Required Field</span>
        </div>
      )
    }
  }

  // Defining ref for intersection observer
  const sectionRef6 = useRef(null)

  const intersection = useIntersection(sectionRef6, {
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
        fadeOut(".fadeIn6")
      : fadeIn(".fadeIn6")
  }, [intersection])

  return (
    <div className={classes.aboveRoot}>
      <div className={classes.imageContainer}>
        <div className={classes.imageOuter}>
          <Img
            fluid={data.image.childImageSharp.fluid}
            className={classes.image}
            loading="eager"
            alt="Contact"
          />
        </div>
      </div>
      {/*Defining Ref for intersection observer*/}
      <div ref={sectionRef6} className={classes.root}>
        <div className={classes.title}>
          <span>
            {/*Title*/}
            <div className="fadeIn6">Contact</div>
          </span>
        </div>
        <div className={classes.formContainer}>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/thankyou"
          >
            <input type="hidden" name="bot-field" />{" "}
            {/*Hidden Input for bot detection*/}
            <div className="fadeIn6">
              {/*Text field for Name*/}
              <TextField
                InputProps={{
                  style: {
                    fontFamily: "Gilroy, sans-serif",
                    fontWeight: "bold",
                    color: "white",
                  },
                }}
                FormHelperTextProps={{
                  className: classes.helperText,
                }}
                className={
                  isNameError ? classes.textFieldError : classes.textField
                }
                name="Name"
                label="Name"
                value={name}
                onChange={onNameChange}
                helperText={nameError}
                error={isNameError}
                variant="outlined"
                color="secondary"
              />
            </div>
            <div className="fadeIn6">
              {/*Text field for Email*/}
              <TextField
                InputProps={{
                  style: {
                    fontFamily: "Gilroy, sans-serif",
                    fontWeight: "bold",
                    color: "white",
                  },
                }}
                FormHelperTextProps={{
                  className: classes.helperText,
                }}
                className={
                  isEmailError ? classes.textFieldError : classes.textField
                }
                name="Email"
                label="Email"
                value={email}
                onChange={onEmailChange}
                helperText={emailError}
                error={isEmailError}
                variant="outlined"
              />
            </div>
            <div className="fadeIn6">
              {/*Text field for Message*/}
              <TextField
                InputProps={{
                  style: {
                    fontFamily: "Gilroy, sans-serif",
                    fontWeight: "bold",
                    color: "white",
                  },
                }}
                FormHelperTextProps={{
                  className: classes.helperText,
                }}
                multiline
                rows={10}
                className={
                  isParagraphError ? classes.textFieldError : classes.textField
                }
                name="Message"
                label="Message"
                value={paragraph}
                onChange={onParagraphChange}
                helperText={paragraphError}
                error={isParagraphError}
                variant="outlined"
              />
            </div>
            <div>
              <div className="fadeIn6">
                {/*Submit Button*/}
                <Button
                  type="submit"
                  className={classes.button}
                  onClick={onSubmit}
                >
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </div>
        <div className={classes.videoContainer}>
          <div className="fadeIn6">
            <iframe
              className={classes.video}
              src="https://www.youtube.com/embed/IA7do6XD3EQ"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
