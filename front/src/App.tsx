import { Link, Route } from "wouter";
import RootPage from './pages/RootPage'
import LoginPage from './pages/LoginPage'
import TodosPage from './pages/TodosPage'
import AddTodoPage from './pages/AddTodoPage'
import Paper from '@mui/material/Paper'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  
  return (
  <ThemeProvider theme={darkTheme}>
  <Paper elevation={3} sx={{width: '100%', height: '100%'}}>
    <Route path="/" component={RootPage}/>
    <Route path="/login" component={LoginPage}/>
    <Route path="/todos" component={TodosPage}/>
    <Route path="/add_todo" component={AddTodoPage}/>
    </Paper>
  </ThemeProvider>
  )
}

export default App
