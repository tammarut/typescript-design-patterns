import axios from "axios"

// ➤ Use `fetch` (built-in)
// function getFetch(url: string, params = {}) {
//   const queryString = Object.entries(params).map(param => `${param[0]}=${param[1]}`).join('&')
//   return fetch(`${url}=${queryString}`, {
//     method: 'GET',
//     headers: { "Content-Type": "application/json" }
//   }).then(res => res.json())
// }

// ➤ Use `axios` instead of `fetch`
function getFetch(url: string, params = {}) {
  return axios({
    url: url,
    method: 'GET',
    params: params
  }).then(res => res.data)
}

// ➥ Facade fetching logic inside the getFetch function
export function getUsers() {
  return getFetch('https://jsonplaceholder.typicode.com/users')
}
export function getUserPosts(userId: string) {
  return getFetch('https://jsonplaceholder.typicode.com/posts', { userId: userId })
}
