import axios from "axios"

const host = "http://localhost:3030/"
const makeURL = (path: string) => `${host}${path}`

export function getAnswer(): Promise<string> {
  return axios.get(makeURL("answer")).then(response => response.data.answer)
}
