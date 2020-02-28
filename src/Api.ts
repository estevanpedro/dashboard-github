import axios from 'axios'

class Api {
  url: string
  options: {
    headers: Object
  }

  constructor() {
    this.url = process.env.REACT_APP_API_ENDPOINT as string
    this.options = {
      headers: { 'Access-Control-Allow-Origin': '*' },
    }
  }

  // TODO: methods documentation

  login = async (loginData: { username: string; password: string }) => {
    return await axios.post(
      `${this.url}/login`,
      {
        username: loginData.username,
        password: loginData.password,
      },
      this.options
    )
  }

  createUser = async (createUserData: {
    username: string
    password: string
    fullname: string
    email: string
  }) => {
    const { username, password, fullname, email } = createUserData

    return await axios.post(
      `${this.url}/signup`,
      {
        username,
        password,
        fullname,
        email,
      },
      this.options
    )
  }

  getProfile = async (secretToken: string) => {
    return await axios.get(`${this.url}/profile?secret_token=${secretToken}`)
  }
}

export default new Api()
