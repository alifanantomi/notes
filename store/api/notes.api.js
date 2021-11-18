import axios from 'axios'

const BASE_URL = process.env.baseURL

const getNotes = () => axios.get(BASE_URL + `notes/all`)

const getNotesById = (id) => axios.get(BASE_URL + `notes?id=${id}`)

export { getNotes, getNotesById }
