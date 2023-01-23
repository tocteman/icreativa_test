const apiUrl = import.meta.env.VITE_API_URL

type CompleteTodoPayload = {
  id: number,
  completed: boolean
}

type AddTodoPayload = {
  description: string
}

type DeleteTodoPayload = {
  id: number
}

export const getTodos = async (id = null) => {
  const token = window.localStorage.getItem("access_token")
  const url = !id ? `${apiUrl}/todos` : `${apiUrl}/todos/${id}`
  const init = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type' : 'application/json'
    }
  }
  return await fetch(url, init)
}



export const completeTodo = async (payload: CompleteTodoPayload) => {
  const token = window.localStorage.getItem("access_token")
  const url = `${apiUrl}/todos/${payload.id}`
  const init = {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({completed: payload.completed}) 
  }
  return await fetch(url, init)
}

export const addTodo = async (payload: AddTodoPayload) => {
  const token = window.localStorage.getItem("access_token")
  const url = `${apiUrl}/todos`
  const init = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(payload) 
  }
  return await fetch(url, init)
}

export const deleteTodo = async (payload: DeleteTodoPayload) => {
  const token = window.localStorage.getItem("access_token")
  const { id } = payload
  const url = `${apiUrl}/todos/${id}`
  const init = {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type' : 'application/json'
    }
  }
  return await fetch(url, init)
}
