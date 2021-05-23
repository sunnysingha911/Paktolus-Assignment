import { Box, Button } from "@material-ui/core"
import React, { useState } from "react"
import GameOverlay from "./GameOverlay"
import TableContent from "./TableContent"

export default () => {
  const [openGame, setOpenGame] = useState(false)
  return (
    <div>
      <Button
        onClick={() => setOpenGame(true)}
        color='primary'
        variant='contained'>
        Start Game
      </Button>
      <Box mt='3rem' />
      <GameOverlay handleClose={() => setOpenGame(false)} open={openGame} />
      <TableContent />
    </div>
  )
}
