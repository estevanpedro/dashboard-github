import axios from 'axios'

class Api {
  url: string

  constructor() {
    this.url = process.env.REACT_APP_API_ENDPOINT as string
  }
  getUserDetails = async (username: any) => {
    try {
      const response = await axios.get(`${this.url}/api/users/${username}/details`, {
        headers: { 'Access-Control-Allow-Origin': '*' },
      })
      console.log('getUserDetails:', response.data)
      return response.data
    } catch (err) {
      throw Error(`Error on get getUserDetails: ${err.message}`)
    }
  }

  getUserList = async (since: any) => {
    try {
      const response = await axios.get(`${this.url}/api/users?since=${since}`)
      return response.data
    } catch (err) {
      throw Error(`Error on get History: ${err.message}`)
    }
  }

  getUserRepos = async (username: any) => {
    try {
      const response = await axios.get(`${this.url}/api/users/${username}/repos`)
      return response.data
    } catch (err) {
      throw Error(`Error on get getUserRepos: ${err.message}`)
    }
  }
}

export default new Api()
