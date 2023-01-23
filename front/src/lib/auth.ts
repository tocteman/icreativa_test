type LoginPayload = {
  username: string,
  password: string
}
const apiUrl = import.meta.env.VITE_API_URL

export const apiLogin = async (payload:LoginPayload) => {
  const url = `${apiUrl}/auth/login` 
  const init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }
  return await fetch(url, init)
}
