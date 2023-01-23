import { useState, useEffect } from 'react'
import { getTodos, deleteTodo } from '../lib/todos'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import TodoCard from '../components/TodoCard'
import { Link, useLocation } from "wouter";

const TodosPage = () => {
  
  let [todos, setTodos] = useState([])
  let [location, setLocation] = useLocation()

  useEffect(() => {
    getTodos()
    .then(res => {
      if (res.ok) {
        res.json()
        .then(allTodos => setTodos(allTodos))
      }
    })
  }, [])

  const handleDelete = (id) => {
    deleteTodo({id})
    .then(res => {
      if (res.ok) {
        const updatedTodos = todos.filter(x => x.id !== id)
        setTodos(updatedTodos)
      }
    })

  }

  const logout = () => {
    window.localStorage.removeItem("access_token")
    setLocation('/login')
  }

  return (
  <Container maxWidth={"sm"}>
    <Stack direction="column" justifyContent="center"
      sx={{minHeight: '100vh'}}
    >
      <Stack justifyContent="space-between" sx={{minHeight: '80vh', justifyContent: 'space-between', marginTop: '2rem'}}>
        <Stack direction="horizontal" alignItems="baseline" justifyContent="space-between">
          <Typography variant="h4">
            Tareas
          </Typography>
          <Button onClick={logout} color="error">
            Salir
          </Button>
        </Stack>
          <Stack spacing={2} sx={{marginTop: '2rem'}}>
            {todos.length > 1 && todos.map(todo => (
              <TodoCard todo={todo} key={todo.id} deleteFn={() => handleDelete(todo.id)}/>
            ))}
          </Stack>
          <Link href="add_todo">
          <Button variant={"contained"} sx={{marginTop: '2rem', marginBottom: '2rem'}}>
            Añadir tarea
            </Button>
          </Link>
        </Stack>
    </Stack>
  </Container>


  )
}

export default TodosPage
