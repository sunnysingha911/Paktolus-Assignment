import { Container, makeStyles } from "@material-ui/core"
import React from "react"
import Content from "./components/Content"
import Footer from "./components/Footer"
import Header from "./components/Header"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1",
  },
}))

export default () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Header />
      <Container className={classes.content}>
        <Content />
      </Container>
      <Footer />
    </div>
  )
}
