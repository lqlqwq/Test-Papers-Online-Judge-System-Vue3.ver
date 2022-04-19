import axios from 'axios'

export default (URL,Methods) => {
    axios({
      url: `/api/${URL}`,
      method: Methods ? Methods : 'POST',
    }).then((response) => {
        console.log(response)
        return response
    }).catch((error) => {
        console.log(error)
        return error
    })
  }