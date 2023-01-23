import { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { useLocation } from 'wouter'
import { getTodos } from '../lib/todos'

const RootPage = () => {
  let [location, setLocation] = useLocation()

  useEffect(() => {
    const token = window.localStorage.getItem("access_token")
    if (!token) { setLocation('/login')}
    if (token) {
      getTodos()
      .then(res => {
        if (res.ok) { 
          setLocation('/todos') 
        } else {
          setLocation('/login')
        }
      })
    }
  }, [])


  return (
    <Stack direction="column" justifyContent="center"
      sx={{minHeight: '100vh'}}
    >
      <Typography variant="h1">
        ...
      </Typography>
    </Stack>
  )
  
}

export default RootPage
