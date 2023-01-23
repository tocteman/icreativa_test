import { useState } from 'react'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import { completeTodo, getTodos } from '../lib/todos'
import DeleteIcon from '@mui/icons-material/Delete';

type TodoProps = {
  id: number,
  completed: boolean,
  description: string,
  createdAt: string,
  updated_at?: string,
  active: boolean
}

const TodoCard = ({todo, deleteFn}) => {
  
  let [checked, setChecked] = useState(todo.completed)


  const { completed, description, id, createdAt, updated_at } = todo

  const complete = async () => {
    completeTodo({id, completed: !completed })
    .then(res => {
      if (res.ok) {
      getTodos(id)
      .then(getRes => {
        if (getRes.ok) {
          getRes.json()
          .then(updatedTodo => { setChecked(!completed) })
          }
        })
      }
    })
  }

  const fmtDate = timestamp => {
    return new Date(timestamp).toLocaleString()
  }


  return (
        <Card>
          <Stack direction="horizontal" spacing={4} alignItems="center">
            <Checkbox checked={checked}
              onChange={complete}
            />
            <Typography variant={"h6"}>
              {description}
            </Typography>
            <IconButton onClick={deleteFn}>
             <DeleteIcon/> 
            </IconButton>
          </Stack>
            <Typography variant={"body2"}>
              {updated_at ?
               `Actualizada: ${fmtDate(updated_at)}` :
               `Creada: ${fmtDate(createdAt)}` 
              }
            </Typography>
        </Card>
  )
}

export default TodoCard

