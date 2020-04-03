import API_ENDPOINT from 'dotenv'
import axios from 'axios'

const Api = () => {
  const serverUrl = API_ENDPOINT

  const login = async (userData: any) => {
    return await axios
      .post(`${serverUrl}/login`,
        {
          username: userData.username,
          password: userData.password
        }
      )
      .then((response: any) => {
        console.log('got signin response', response)
        return response
      })
      .catch((err: any) => {
        console.log('error at signin', err.response)
      })
  }

  const createUser = async (signUpData: any) => {
    return await axios
      .post(`${serverUrl}/registration`,
        {
          fullname: signUpData.fullname,
          email: signUpData.email,
          username: signUpData.username,
          password: signUpData.password,

        }
      )
      .then((response: any) => {
        return response
      })
      .catch((err: any) => {
        console.log('error inside createUser', err.response)
        throw err.response
      })
  }

  return {
    login,
    createUser,
  }
}

export default Api
