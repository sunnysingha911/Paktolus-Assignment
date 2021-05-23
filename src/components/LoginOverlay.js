import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core"
import React from "react"
import { useDispatch } from "react-redux"
import { login } from "../redux/actions/LoginActions"

export default ({ open, handleClose }) => {
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(e.target.name.value))
    handleClose()
  }
  return (
    <Dialog open={open} onClose={handleClose} maxWidth='sm' fullWidth>
      <DialogTitle>Login</DialogTitle>

      <DialogContent>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleSubmit}>
          <TextField
            variant='outlined'
            size='small'
            placeholder='User name'
            name='name'
          />
          <Box mt='1rem' />
          <Button
            type='submit'
            color='secondary'
            variant='contained'
            size='small'>
            Login
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
