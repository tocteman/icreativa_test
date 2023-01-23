import { useState } from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { apiLogin } from '../lib/auth'
import { useLocation } from 'wouter'

const LoginPage = () => {
  let [username, setUsername] = useState("")
  let [password, setPassword] = useState("")
  let [location, setLocation] = useLocation()
  let [loginError, setLoginError] = useState("")

  const login = async () => {
    apiLogin({username, password})
    .then(res => {
      if (res.ok) {
        res.json()
        .then(({access_token}) => {
          window.localStorage.setItem("access_token", access_token) 
          setLocation('/todos')
        })
      } 
      setLoginError("Por favor revisa tus credenciales")
    })
    .catch(err => console.log({err}))
  }

  return (
  <Container maxWidth={"sm"}>
    <Stack direction="column" justifyContent="center" sx={{minHeight: '100vh'}}>
      <Stack spacing={4}>
        <Typography variant={"h4"}>Tareas</Typography>
        <Typography variant={"h5"}>Ingresa con tus credenciales</Typography>
        <TextField 
          id="username" 
          name="username"
          label="Username" 
          variant="standard" 
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <TextField 
          id="password" 
          name="password"
          label="Password" 
          variant="standard" 
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button variant="contained" onClick={login}>
          Ingresar
        </Button>
        {loginError && 
          <Typography color={"error"}>
            {loginError}
          </Typography>
        }
      </Stack>

    </Stack>
  </Container>
    )
}

export default LoginPage
