import {
  AppBar,
  Avatar,
  Button,
  CssBaseline,
  Paper,
  Popper,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@material-ui/core"
import React, { useState } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import LoginOverlay from "./LoginOverlay"
import { logout } from "../redux/actions/LoginActions"

const ElevationScroll = (props) => {
  const { children, window } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
}

export default () => {
  const { balance } = useSelector((state) => state.game)
  const { user } = useSelector((state) => state.login)
  const dispatch = useDispatch()
  const [openLogin, setOpenLogin] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  return (
    <div>
      <CssBaseline />
      <ElevationScroll>
        <AppBar position='fixed' color='primary'>
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant='h6'>Paktolus</Typography>
            {user ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography style={{ marginRight: "1rem" }}>
                  ${balance}
                </Typography>
                <Avatar
                  component='button'
                  style={{ background: "#ff5722" }}
                  onClick={(event) =>
                    setAnchorEl(anchorEl ? null : event.currentTarget)
                  }>
                  {user.substring(0, 1)}
                </Avatar>
                <Popper open={Boolean(anchorEl)} anchorEl={anchorEl}>
                  <Paper style={{ paddingTop: "1rem" }}>
                    <Button
                      color='secondary'
                      variant='contained'
                      onClick={() => dispatch(logout())}>
                      Logout
                    </Button>
                  </Paper>
                </Popper>
              </div>
            ) : (
              <Button
                onClick={() => setOpenLogin(true)}
                style={{ color: "#fff" }}>
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Toolbar />
      <LoginOverlay open={openLogin} handleClose={() => setOpenLogin(false)} />
    </div>
  )
}
