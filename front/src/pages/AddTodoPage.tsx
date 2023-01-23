import { useState } from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { addTodo } from '../lib/todos'
import { useLocation } from 'wouter'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from 'wouter'

const AddTodoPage = () => {
  let [description, setDescription] = useState("")
  let [ location, setLocation ] = useLocation()

  const add = () => {
    addTodo({description})
    .then(res => {
      if (res.ok) {
        res.json()
        .then(todo => {
          setLocation('/todos')
        })
      }
    })
  }

  return (
    <Container maxWidth={"sm"}>
      <Stack direction="column" justifyContent="center"
        sx={{minHeight: '100vh'}}
      >
        <Stack direction="row" alignItems="center">
        <Link href="/todos">
          <IconButton>
            <ChevronLeftIcon/>
          </IconButton>
        </Link>
        <Typography>
          Regresar
        </Typography>
        </Stack>
        <Stack direction="column" sx={{marginTop: '3rem'}}>
        <Typography variant="h5">
          Añadir tarea
        </Typography>
        <TextField
          id="description"
          label="Añadir tarea"
          variant="standard"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <Button onClick={add} sx={{marginTop: "4rem"}}>
          Añadir
        </Button>
        </Stack>
      </Stack>
    </Container>

  )
}

export default AddTodoPage
