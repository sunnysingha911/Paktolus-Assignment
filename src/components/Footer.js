import { makeStyles, Typography } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: "1px solid #dadce0",
    height: "4rem",
    display: "flex",
    alignItems: "center",
    paddingLeft: "1.5rem",
  },
}))

export default () => {
  const classes = useStyles()
  return (
    <footer>
      <div className={classes.footer}>
        <Typography variant='body1'>
          Copyrights &copy; {new Date().getFullYear()} Paktolus Group LLC. All
          rights reserved
        </Typography>
      </div>
    </footer>
  )
}
