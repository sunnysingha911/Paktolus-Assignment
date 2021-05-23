import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Typography,
} from "@material-ui/core"
import React, { useEffect, useState } from "react"
import CountUp from "react-countup"
import { useDispatch } from "react-redux"
import { spin } from "../redux/actions/GameActions"

export default ({ open, handleClose }) => {
  const [openSlot1, setopenSlot1] = useState(0)
  const [openSlot2, setopenSlot2] = useState(0)
  const [openSlot3, setopenSlot3] = useState(0)

  const dispatch = useDispatch()

  useEffect(() => {
    setopenSlot1(0)
    setopenSlot2(0)
    setopenSlot3(0)
  }, [open])

  const getNumbers = new Promise((res, rej) => {
    res({
      slot1: Math.floor(Math.random() * 9 + 1),
      slot2: Math.floor(Math.random() * 9 + 1),
      slot3: Math.floor(Math.random() * 9 + 1),
    })
  })

  const debug = () => {
    setopenSlot1(7)
    setTimeout(() => {
      setopenSlot2(7)
    }, 3000)
    setTimeout(() => {
      setopenSlot3(7)
    }, 5000)
  }

  return (
    <Dialog open={open} onClose={handleClose} maxWidth='md' fullWidth>
      <DialogContent>
        <Box
          display='flex'
          justifyContent='space-evenly'
          alignItems='center'
          height='12rem'>
          <Box
            display='flex'
            justifyContent='space-evenly'
            alignItems='center'
            flexDirection='column'>
            <Typography variant='h1'>
              <CountUp start={0} end={openSlot1} duration={5} />
            </Typography>
            <Button
              variant='contained'
              onClick={() =>
                getNumbers.then((res) => {
                  const { slot1, slot2, slot3 } = res
                  setopenSlot1(slot1)
                  setTimeout(() => setopenSlot2(slot2), 2000)
                  setTimeout(() => setopenSlot3(slot3), 4000)
                  dispatch(spin(slot1, slot2, slot3))
                })
              }
              style={{ background: "#4caf50", color: "#fff" }}>
              Spin
            </Button>
          </Box>
          <Box
            display='flex'
            justifyContent='space-evenly'
            alignItems='center'
            flexDirection='column'>
            <Typography variant='h1'>
              <CountUp start={0} end={openSlot2} duration={5} />
            </Typography>
            <Button
              variant='contained'
              onClick={() => debug()}
              style={{ background: "#ffc107", color: "#fff" }}>
              Debug
            </Button>
          </Box>
          <Box
            display='flex'
            justifyContent='space-evenly'
            alignItems='center'
            flexDirection='column'>
            <Typography variant='h1'>
              <CountUp start={0} end={openSlot3} duration={5} />
            </Typography>
            <Button
              variant='contained'
              onClick={handleClose}
              style={{ background: "#ff3d00", color: "#fff" }}>
              Exit
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  )
}
