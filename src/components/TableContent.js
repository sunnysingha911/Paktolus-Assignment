import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const useStyles = makeStyles({
  tableContainer: {
    minWidth: 650,
    maxWidth: 900,
  },
})

export default () => {
  const classes = useStyles()
  const { spin } = useSelector((state) => state.game)
  const [newData, setNewData] = useState(spin)
  const [idSort, setidSort] = useState(null)
  const [timeSort, settimeSort] = useState(null)

  useEffect(() => {
    setNewData(spin)
  }, [spin])

  const sortArray = (key) => {
    if (key === "id") {
      idSort === null ? setidSort(true) : setidSort(!idSort)
      setNewData(
        idSort
          ? spin.sort((item1, item2) => item1.id - item2.id)
          : spin.sort((item1, item2) => item2.id - item1.id)
      )
    } else if (key === "time") {
      timeSort === null ? settimeSort(true) : settimeSort(!timeSort)
      setNewData(
        idSort
          ? spin.sort((item1, item2) => {
              let keyA = new Date(item1.time)
              let keyB = new Date(item2.time)
              if (keyA < keyB) return -1
              if (keyA > keyB) return 1
              return 0
            })
          : spin.sort((item1, item2) => {
              let keyA = new Date(item1.time)
              let keyB = new Date(item2.time)
              if (keyA < keyB) return 1
              if (keyA > keyB) return -1
              return 0
            })
      )
    }
  }
  return (
    <div>
      {spin.length === 0 ? (
        <Typography variant='h3'>No Spins</Typography>
      ) : (
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell
                  style={{ cursor: "pointer" }}
                  onClick={() => sortArray("id")}>
                  Id
                </TableCell>
                <TableCell>Slot 1</TableCell>
                <TableCell>Slot 2</TableCell>
                <TableCell>Slot 3</TableCell>
                <TableCell
                  style={{ cursor: "pointer" }}
                  onClick={() => sortArray("id")}>
                  Time
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {newData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.slot1}</TableCell>
                  <TableCell>{item.slot2}</TableCell>
                  <TableCell>{item.slot3}</TableCell>
                  <TableCell>
                    {new Date(item.time).toLocaleTimeString("en-US")}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  )
}
