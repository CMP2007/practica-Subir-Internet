import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/persons'

const getAll = ()=> {
  return (
    axios
      .get(baseUrl)
      .then(response => response.data)
    )
  }

  const create = newObject => {
    return (
      axios.
        post(baseUrl, newObject)
        .then(response => response.data)
      )
  }

  const change = (changeNumber, id) =>{
    return(
      axios.put(`${baseUrl}/${id}`, changeNumber)
      .then(response=>response.data)
    )
  }
  
  const deleted = (id) => {
    return (
      axios
        .delete(`${baseUrl}/${id}`)
        .then(response => response.data)
      )

  }

export default {getAll, create, change, deleted}